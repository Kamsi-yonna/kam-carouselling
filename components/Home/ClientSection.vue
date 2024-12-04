<template>
    <div class="fade-in-section" data-fade-anim>
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
                                <div class="project-image_block"><img :src="project.src" loading="lazy" alt=""
                                        class="cc-image"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useGsap from '~/composables/useGsap';
useGsap();

const projects = ref([
    { name: "New spaces two | Naming", label: "NAMING", url: "/projects/new-spaces-two-naming", src: "/assets/images/projects/673a508e9820f5ce5a8f1ab2_revoir-768x424_w20pqy.webp" },
    { name: "APT Dolomiti Paganella", label: "COPYWRITING", url: "/projects/APT-Dolomiti-Paganella", src: "/assets/images/projects/673a508e830b9cdde51c960d_paganella-1_ktpybg.webp" },
    { name: "Gardalisa | Real Estate", label: "BRAND, COPYWRITING, SEO POSITIONING, SOCIAL MEDIA,TRANSLATIONS, WEB DESIGN", url: "/projects/gardalisa-real-estate", src: "/assets/images/projects/673a508fbd397ea38a1e774d_gardalisa_gienhw.webp" },
    { name: "Mobiliar | interior design", label: "COPYWRITING, SOCIAL MEDIA, TRANSLATIONS, WEB DESIGN", url: "/projects/mobiliar-interior-design", src: "/assets/images/projects/673a508fdcc68218ba92b6fd_mobilart-1_shjvun.webp" },
]);
</script>

<style scoped></style>