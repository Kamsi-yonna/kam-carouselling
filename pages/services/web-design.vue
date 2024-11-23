<template>
    <div>
        <div class="services-hero_wrapper">
            <div class="services-hero_details">
                <div class="service-title_block">
                    <div class="blue-text_span">web design</div>
                </div>
                <div class="service-hero-image_block">
                    <img src="/public/assets/images/services/web-design.webp" loading="lazy" alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 70vw, 40vw"
                        class="hero-image" />
                </div>
            </div>
        </div>
        <WeSection page="webDesign" />
        <QuoteComponent page="webDesign" />
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
        "The universe seems less and less like a great mechanism and more and more, a great thought",
    ogDescription:
        "The universe seems less and less like a great mechanism and more and more, a great thought",
    ogImage:
        "https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d51fbba77eaa19ba8516_Collages-servizi-02.webp",
})
</script>

<style scoped></style>
