<template>
    <div>
        <HomeHeroComponent class="fade-in-section" data-fade-anim />
        <WeSection index="firstSection" class="fade-in-section" data-fade-anim />
        <ServiceSection class="fade-in-section" data-fade-anim />
        <QuoteComponent index="firstQuote" class="fade-in-section" data-fade-anim />
        <WeSection index="secondSection" class="fade-in-section" data-fade-anim />
        <ClientSection class="fade-in-section" data-fade-anim />
        <WeSection index="thirdSection" class="fade-in-section" data-fade-anim />
        <QuoteComponent index="secondQuote" class="fade-in-section" data-fade-anim />
        <WeSection index="fourthSection" class="fade-in-section" data-fade-anim />
        <MentionsSection class="fade-in-section" data-fade-anim />
        <LettersSection class="fade-in-section" data-fade-anim />
    </div>
</template>

<script setup lang="ts">
import useGsap from '~/composables/useGsap';

useGsap();

</script>

<style scoped></style>