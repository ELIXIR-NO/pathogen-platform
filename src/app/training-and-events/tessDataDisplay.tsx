"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface EventData {
	title: string;
	country: string;
	start: string;
	end: string;
	event_types: string[];
	scientific_topics: { preferred_label: string; uri: string }[];
	keywords: string[];
	url: string;
}

const formatEventType = (type: string) => {
	return type.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

const fetchAllEvents = async () => {
	const allEvents: EventData[] = [];
	let pageNumber = 1;
	let hasMorePages = true;

	while (hasMorePages) {
		const response = await fetch(
			`https://tess.elixir-europe.org/events.json?page_number=${pageNumber}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch events");
		}
		const events: EventData[] = await response.json();

		if (events.length > 0) {
			allEvents.push(...events);
			pageNumber++;
		} else {
			hasMorePages = false;
		}
	}

	return allEvents;
};

const applyFilters = (events: EventData[], filters, searchQuery) => {
	return events.filter((event) => {
		return (
			(!filters.country ||
				event.country.toLowerCase().includes(filters.country.toLowerCase())) &&
			(!filters.start || new Date(event.start) >= new Date(filters.start)) &&
			(!filters.end || new Date(event.end) <= new Date(filters.end)) &&
			(!filters.event_types ||
				event.event_types.includes(filters.event_types)) &&
			(!filters.scientific_topics ||
				event.scientific_topics.some(
					(topic) => topic.preferred_label === filters.scientific_topics
				)) &&
			(!filters.keywords || event.keywords.includes(filters.keywords)) &&
			(!searchQuery ||
				event.title.toLowerCase().includes(searchQuery.toLowerCase()))
		);
	});
};

export function TessDataDisplay() {
	const [filters, setFilters] = useState({
		country: "",
		start: "",
		end: "",
		event_types: "",
		scientific_topics: "",
		keywords: "",
	});

	const [searchQuery, setSearchQuery] = useState("pathogen");
	const [currentPage, setCurrentPage] = useState(1);
	const [eventsPerPage] = useState(10);
	const {
		data: allEvents,
		error,
		isLoading,
	} = useQuery<EventData[]>({
		queryKey: ["allEvents"],
		queryFn: fetchAllEvents,
		keepPreviousData: true,
	});

	const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
	const [paginatedEvents, setPaginatedEvents] = useState<EventData[]>([]);
	const [countries, setCountries] = useState<string[]>([]);

	useEffect(() => {
		if (allEvents) {
			setCountries([
				...new Set(allEvents.map((event) => event.country).filter(Boolean)),
			]);

			const filtered = applyFilters(allEvents, filters, searchQuery);
			setFilteredEvents(filtered);

			const indexOfLastEvent = currentPage * eventsPerPage;
			const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
			setPaginatedEvents(filtered.slice(indexOfFirstEvent, indexOfLastEvent));
		}
	}, [allEvents, filters, currentPage, eventsPerPage, searchQuery]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFilters({ ...filters, [e.target.name]: e.target.value });
		setCurrentPage(1);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
	};

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const eventTypes = Array.from(
		new Set(allEvents?.flatMap((event) => event.event_types))
	);
	const topics = Array.from(
		new Set(
			allEvents?.flatMap((event) =>
				event.scientific_topics.map((topic) => topic.preferred_label)
			)
		)
	);
	const keywords = Array.from(
		new Set(allEvents?.flatMap((event) => event.keywords))
	);

	const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

	return (
		<div>
			<h2 className="mb-4 text-2xl font-bold">Filters</h2>
			{/* Campo de busca separado dos outros filtros */}
			<div className="mb-4">
				<label htmlFor="searchQuery" className="block font-medium">
					Search Events
				</label>
				<input
					type="text"
					id="searchQuery"
					value={searchQuery}
					onChange={handleSearchChange}
					className="mt-1 block w-full rounded border-gray-300 shadow-sm"
				/>
			</div>
			{/* Grid para os outros filtros */}
			<div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div>
					<label htmlFor="country" className="block font-medium">
						Country
					</label>
					<select
						id="country"
						name="country"
						value={filters.country}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					>
						<option value="">Select Country</option>
						{countries.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="start" className="block font-medium">
						Start Time
					</label>
					<input
						type="date"
						id="start"
						name="start"
						value={filters.start}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					/>
				</div>

				<div>
					<label htmlFor="end" className="block font-medium">
						End Time
					</label>
					<input
						type="date"
						id="end"
						name="end"
						value={filters.end}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					/>
				</div>

				<div>
					<label htmlFor="event_types" className="block font-medium">
						Event Types
					</label>
					<select
						id="event_types"
						name="event_types"
						value={filters.event_types}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					>
						<option value="">Select Event Type</option>
						{eventTypes.map((type) => (
							<option key={type} value={type}>
								{formatEventType(type)}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="scientific-topics" className="block font-medium">
						Scientific Topics
					</label>
					<select
						id="scientific-topics"
						name="scientific_topics"
						value={filters.scientific_topics}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					>
						<option value="">Select Topic</option>
						{topics.map((topic) => (
							<option key={topic} value={topic}>
								{topic}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="keywords" className="block font-medium">
						Keywords
					</label>
					<select
						id="keywords"
						name="keywords"
						value={filters.keywords}
						onChange={handleChange}
						className="mt-1 block w-full rounded border-gray-300 shadow-sm"
					>
						<option value="">Select Keywords</option>
						{keywords.map((keyword) => (
							<option key={keyword} value={keyword}>
								{keyword}
							</option>
						))}
					</select>
				</div>
			</div>

			{isLoading && <div>Loading events...</div>}
			{error && <div>Error loading events: {error.message}</div>}
			{paginatedEvents && paginatedEvents.length > 0 ? (
				<div>
					<a
						href="https://tess.elixir-europe.org/events"
						target="_blank"
						rel="noopener noreferrer"
						className="mb-4 block text-blue-500 underline"
					>
						View events on TeSS
					</a>
					<h2 className="mb-4 text-2xl font-bold">Filtered Events</h2>
					<div className="space-y-4">
						{paginatedEvents.map((event) => (
							<a
								key={event.title}
								href={event.url}
								target="_blank"
								className="block rounded border border-gray-300 p-4 shadow-sm hover:bg-foreground/10"
							>
								<div className="flex items-start space-x-4">
									<div className="xs:block hidden flex-shrink-0">
										<i className="icon icon-h2 online-event-icon"></i>
										<br />
										<span className="text-muted">Online</span>
									</div>

									<div className="flex-1">
										<div className="flex items-center justify-between">
											<div className="text-sm text-muted">
												{event.event_types
													.map((type) => type.preferred_label)
													.join(", ")}
											</div>
											<div className="text-xs text-muted">
												<i
													className="fa fa-hourglass-half"
													aria-hidden="true"
													title="This event has already started"
												></i>
											</div>
										</div>
										<h4 className="mt-2 text-lg font-semibold">
											{event.title}
										</h4>
										<p className="mt-1 text-sm">
											{new Date(event.start).toLocaleDateString()} -{" "}
											{new Date(event.end).toLocaleDateString()}
										</p>
										<p className="mt-1 text-sm">
											{event.keywords.map((keyword) => (
												<span
													key={keyword}
													className="mb-1 mr-1 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold text-blue-800"
												>
													{keyword}
												</span>
											))}
										</p>
									</div>
								</div>
							</a>
						))}
					</div>

					<div className="mt-8 flex items-center justify-between">
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
						>
							Previous
						</button>
						<span className="px-4 py-2">
							Page {currentPage} of {totalPages}
						</span>
						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
						>
							Next
						</button>
					</div>
				</div>
			) : (
				<div>No events found.</div>
			)}
		</div>
	);
}
