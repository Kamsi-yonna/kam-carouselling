<template>
    <div>
        <div class="services-hero_wrapper">
            <div class="services-hero_details">
                <div class="service-title_block">
                    <div class="blue-text_span">brand design</div>
                </div>
                <div class="service-hero-image_block">
                    <img src="/assets/images/services/brand-design.webp" loading="lazy" alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 70vw, 40vw"
                        class="hero-image" />
                </div>
            </div>
        </div>
        <WeSection page="brandDesign" />
        <QuoteComponent page="brandDesign" />
        <ServiceSection />
    </div>
</template>

<script setup lang="ts">
const metaTags = useDefault('meta')
const route = useRoute()
const projectName = route.path.split('/').pop()!.replace('.vue', '');

const metaTitle = projectName.charAt(0).toUpperCase() + projectName.slice(1).toLowerCase().replace(/-/g, ' ');

useSeoMeta({
    ...metaTags,
    title: `${metaTitle} | Projects`,
    ogTitle: `${metaTitle} | Projects`,
    description:
        "Before you give away yourself, you must have a you to give.",
    ogDescription:
        "Before you give away yourself, you must have a you to give.",
    ogImage:
        "https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d467d12ebee771dafb9f_Collages-servizi-01.webp",
})
</script>

<style scoped></style>
