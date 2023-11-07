import type OpenAI from 'openai';

const aiSystem = `
  Using the given prompt, return a list of corresponding destinations as a JSON array.
  Respect a few rules :
    - You must only speak in French.
    - You must fill all the fields for each destination.
    - A destination can only be a city or a country.
    - You must return at most 20 results.
    - Try to return as many results as possible.
    - You must ALWAYS return an array, even if you don't find anything.
    - The schema for the destinations is as follows:

  {
    "name": string,
    "slug": string,
    "description": string,
    "type": "country" | "city",
    "advantages": string[],
    "averagePrice": number,
    "currency": string,
  }[]
`;

export type Destination = {
  name: string;
  slug: string;
  description: string;
  type: 'country' | 'city';
  advantages: string[];
  averagePrice: number;
  currency: string;
};

export const searchDestinations = async (query: string, ai: OpenAI) => {
  const response = await ai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: aiSystem,
      },
      { role: 'user', content: query },
    ],
    stream: false,
  });

  try {
    return JSON.parse(response.choices[0].message.content ?? '[]') as Destination[];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse response from OpenAI.', error);

    return [];
  }
};
