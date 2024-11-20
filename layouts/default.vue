<template>
    <div class="body">
        <div class="page-wrapper">
            <NavbarComponent />
            <slot />
            <FooterComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style>
.menu-window {
    background: #000;
}
</style>