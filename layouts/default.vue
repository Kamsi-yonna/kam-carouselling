<template>
    <div class="body">
        <div class="page-wrapper">
            <NavbarComponent />
            <LoadingSpinner v-if="isLoading" />
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

<style>
.menu-window {
    background: #000;
}
</style>