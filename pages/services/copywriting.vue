<template>
    <div>
        <div class="services-hero_wrapper">
            <div class="services-hero_details">
                <div class="service-title_block">
                    <div class="blue-text_span">copywriting</div>
                </div>
                <div class="service-hero-image_block">
                    <img src="/public/assets/images/services/copywriting.webp" loading="lazy" alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 70vw, 40vw"
                        class="hero-image" />
                </div>
            </div>
        </div>
        <WeSection page="copywriting" />
        <QuoteComponent page="copywriting" />
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
        "Advertising is fundamentally persuasion, and persuasion is not a science but an art.",
    ogDescription:
        "Advertising is fundamentally persuasion, and persuasion is not a science but an art.",
    ogImage:
        "https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d56da8b5df11e0285f32_Collages-servizi-03.webp",
})
</script>

<style scoped></style>
