<script lang="ts">
  import { getCurrentSeason } from '$lib/utils/season';
</script>

<div class="flex flex-col gap-4">
  <h1 class="text-4xl text-center">My AI Journey</h1>

  <p class="text-lg text-center">
    My AI Journey est votre compagnon de voyage pour vous aider à trouver votre prochaine
    destination de vacances.
  </p>

  <section class="flex flex-col gap-4">
    <h2 class="text-3xl text-center">Les meilleures destinations ({getCurrentSeason()})</h2>

    <!-- TODO -->
  </section>
</div>
