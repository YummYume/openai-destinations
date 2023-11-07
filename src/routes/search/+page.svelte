<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center">Rechercher une destination</h1>

  <form method="get" role="search">
    <div>
      <label for="search">Tapez une destination</label>
      <div class="w-full flex">
        <input
          class="border rounded-l-lg flex-grow"
          id="search"
          type="search"
          name="q"
          value={data.query}
          placeholder="Votre destination de rêve..."
        />
        <button
          class="border rounded-r-lg p-2 bg-slate-400"
          type="submit"
          aria-controls="destination-search">Rechercher</button
        >
      </div>
    </div>
  </form>

  <div id="destination-search" aria-live="polite" role="region">
    {#if data.stream.destinations}
      {#await data.stream.destinations}
        <p role="status" class="text-lg text-center">Recherche en cours...</p>
      {:then destinations}
        {#if destinations.length === 0}
          <p class="text-lg text-center">Aucune destination trouvée.</p>
        {:else}
          <p role="status" class="text-lg text-center">
            {destinations.length} destination{destinations.length > 1 ? 's' : ''} trouvée{destinations.length >
            1
              ? 's'
              : ''}.
          </p>

          <ul class="flex justify-around gap-4 text-slate-200">
            {#each destinations as destination}
              <li class="rounded-xl w-96 bg-slate-600 flex flex-col gap-2">
                <a href={`/destination/${destination.slug}`} class="p-4 flex flex-col h-full">
                  <p class="font-bold text-xl">{destination.name}</p>

                  <p class="text-lg">{destination.description}</p>

                  {#if destination.advantages.length > 0}
                    <ul class="list-item pl-3">
                      {#each destination.advantages as advantage}
                        <li>{advantage}</li>
                      {/each}
                    </ul>
                  {/if}

                  <div class="text-sm flex gap-2 mt-auto">
                    <p>Prix moyens : <span class="font-bold">{destination.averagePrice}</span></p>
                    <p>Devise : <span class="font-bold">{destination.currency}</span></p>
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      {:catch}
        <p role="status" class="text-red-500 text-lg text-center">
          Oops! Une erreur est survenue lors de la recherche. Merci de réessayer plus tard.
        </p>
      {/await}
    {/if}
  </div>
</div>
