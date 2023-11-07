import { openAI } from '$lib/server/ai';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
  event.locals.ai = openAI;

  const response = await resolve(event);

  return response;
};
