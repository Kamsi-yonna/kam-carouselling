<template>
    <div>
        <div class="client-section">
            <div class="client-wrapper">
                <div class="client-header_block">
                    <h2 class="client-header-copy">clients</h2>
                </div>
                <div class="client-list_wrapper w-dyn-list">
                    <div role="list" class="w-dyn-items">
                        <div v-for="(project, index) in projects" :key="index" role="listitem" class="w-dyn-item">
                            <div class="client-list_block">
                                <a :href="project.url" class="client-title w-inline-block">
                                    <div>{{ project.name }}</div>
                                </a>
                                <div class="client-label">
                                    <div>{{ project.label }}</div>
                                </div>
                                <div class="plus-icon">
                                    <div>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = ref([
    { name: "New spaces two | Naming", label: "NAMING", url: "/pages/projects/new-spaces-two-naming.vue" },
    { name: "APT Dolomiti Paganella", label: "COPYWRITING", url: "/projects/APT-Dolomiti-Paganella" },
    { name: "Gardalisa | Real Estate", label: "BRAND, COPYWRITING, SEO POSITIONING, SOCIAL MEDIA,TRANSLATIONS, WEB DESIGN", url: "/projects/gardalisa-real-estate" },
    { name: "Mobiliar | interior design", label: "COPYWRITING, SOCIAL MEDIA, TRANSLATIONS, WEB DESIGN", url: "/projects/mobiliar-interior-design.vue" },
]);
</script>

<style scoped></style>