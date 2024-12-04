<template>
    <div class="fade-in-section" data-fade-anim>
        <div class="service-section">
            <div class="section-top_line"></div>
            <div class="service-wrapper">
                <div class="service-header_block">
                    <h2 class="service-header">services</h2>
                </div>
                <div id="w-node-_5b896560-fb7c-e681-4987-60d14758cb22-8f245f80" class="w-dyn-list">
                    <div role="list" class="service-list_grid w-dyn-items">
                        <div v-for="(service, index) in services" :key="index" role="listitem"
                            class="service-list w-dyn-item">
                            <div class="service-list_title">
                                <a :href="service.url" class="service-title w-inline-block">
                                    <div>{{ service.name }}</div>
                                    <div class="cc-underline"></div>
                                </a>
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
const services = ref([
    { name: "Web Design", url: "/services/web-design" },
    { name: "Brand Design", url: "/services/brand-design" },
    { name: "Copywriting", url: "/services/copywriting" },
]);
</script>

<style scoped></style>