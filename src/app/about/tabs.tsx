"use client";

import { Tabs, Tab } from "@nextui-org/react";

type AboutUsTabsProps = {
	partners: React.ReactNode;
	contactUs: React.ReactNode;
};

export default function AboutUsTabs({ partners, contactUs }: AboutUsTabsProps) {
	return (
		<Tabs
			aria-label="Options"
			variant="underlined"
			className="w-full pb-2"
			classNames={{
				tabList: "gap-6 w-full p-0 border-b",
				cursor: "bg-primary",
				tabContent: "group-data-[selected=true]:text-foreground",
			}}
		>
			<Tab key="people" title="People" className="text-lg font-semibold"></Tab>
			<Tab key="partners" title="Partners" className="text-lg font-semibold">
				{partners}
			</Tab>
			<Tab
				key="contactForm"
				title="Contact us"
				className="text-xl font-semibold"
			>
				{contactUs}
			</Tab>
		</Tabs>
	);
}
