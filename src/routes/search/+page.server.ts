import { searchDestinations } from '$lib/utils/search';

import type { PageServerLoad } from './$types';

export const load = (async ({ url, locals }) => {
  const query = url.searchParams.get('q');

  if (query) {
    return {
      query,
      stream: {
        destinations: searchDestinations(query, locals.ai),
      },
    };
  }

  return {
    query: null,
    stream: {
      destinations: null,
    },
  };
}) satisfies PageServerLoad;
