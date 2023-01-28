<script lang="ts" setup>

  useHead({
    title: 'Vite + Vue 3 + Nuxt 3 + Tailwind CSS',
    meta: [
      {
        name: 'description',
        content: 'Vite + Vue 3 + Nuxt 3 + Tailwind CSS'
      },
      {
        name: 'keywords',
        content: 'vite, vue, nuxt, tailwind'
      }
    ]
  })

</script>

<!-- <template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <h1 class="text-3xl font-bold text-purple-600 animate-bounce">
        <Icon name="icon-park:home-two"></Icon>
        <Icon name="icon-park:home-two"></Icon>
        Welcome to Vite + Vue 3 + Nuxt 3 + Tailwind CSS
      </h1>

    </div>
  </div>
</template> -->

<template>

  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Kanit Google Font All Style -->
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </Head>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
