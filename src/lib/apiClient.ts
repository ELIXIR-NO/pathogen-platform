// src/lib/apiClient.ts

export async function fetchCristinData(title: string) {
    try {
        const response = await fetch(`https://api.cristin.no/v2/results?title=${title}&sort=year_published%20desc`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from Cristin API');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Cristin data:', error);
        throw error;
    }
}
