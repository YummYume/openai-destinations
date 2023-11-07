import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
  const query = await request.json();

  if (!query) {
    return new Response('No query provided.', { status: 400 });
  }

  const stream = await locals.ai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: query }],
    stream: true,
  });

  return new Response(stream.toReadableStream(), {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  });
};
