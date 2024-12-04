<template>
    <div class="body">
        <LoadingSpinner v-if="isLoading" />
        <div v-else class="page-wrapper">
            <NavbarComponent />
            <slot />
            <FooterComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});
</script>