// src/components/CristinResults.tsx
import { useEffect, useState } from 'react';
import { fetchCristinData } from '@/lib/apiClient';

interface CristinResultsProps {
  title: string;
}

export default function CristinResults({ title }: CristinResultsProps) {
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCristinData(title);
        setApiData(data.slice(0, 5));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [title]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (apiData.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h3 className="font-bold">Latest publications in Cristin</h3>
      {apiData.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold">{item.title.en}</h2>
          <p className="text-gray-700">Published in: {item.year_published}</p>
          <p className="text-gray-700">Journal: {item.journal?.name}</p>
          <p className="text-gray-700">Publisher: {item.journal?.publisher?.name}</p>
          <p className="mt-4">
            <a
                    href={
                        Array.isArray(item.links)
                            ? item.links.find(link => link.url_type === "DOI")?.url || "#"
                            : "#"
                    }
                    className="text-blue-500 hover:underline"
                >
                    {Array.isArray(item.links) && item.links.find(link => link.url_type === "DOI")
                        ? "View Article (DOI)"
                        : "DOI Not Available"}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
