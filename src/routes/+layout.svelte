<script lang="ts">
  import '../app.postcss';
</script>

<div class="w-screen min-h-screen">
  <header class="w-full flex lg:flex-row flex-col justify-between p-4">
    <a href="/" class="text-xl">My AI Journey</a>
    <nav>
      <ul>
        <li>
          <a href="/search">Rechercher une destination</a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="max-w-7xl mx-auto p-4 lg:p-0">
    <slot />
  </div>
</div>
