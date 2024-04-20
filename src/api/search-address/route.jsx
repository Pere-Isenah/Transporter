import { Response } from 'express';

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';

export async function GET(request: any, response: Response) {
    const { searchParams } = new URL(request.url);

    const searchText = searchParams.get('q');

    try {
        const res = await fetch(
            `${BASE_URL}?q=${searchText}&language=en&limit=6&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363&access_token=${import.meta.env.VITE_MAP_BOX_TOKEN_KEY}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const searchResult = await res.json();
        
        // Send the response
        response.json(searchResult);
    } catch (error) {
        console.error('Error fetching data:', error);
        response.status(500).json({ error: 'An error occurred while fetching data' });
    }
}