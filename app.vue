<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>

<script setup lang="ts">
const metaTags = useDefault('meta')

useSeoMeta({ ...metaTags })
</script>
