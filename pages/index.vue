<template>
    <div>
        <HomeHeroComponent  />
        <WeSection index="firstSection" />
        <ServiceSection />
        <QuoteComponent index="firstQuote" />
        <WeSection index="secondSection" />
        <ClientSection  />
        <WeSection index="thirdSection" />
        <QuoteComponent index="secondQuote" />
        <WeSection index="fourthSection" />
        <MentionsSection />
        <LettersSection />
    </div>
</template>

<script setup lang="ts">
import useGsap from '~/composables/useGsap';

useGsap();

</script>

<style scoped></style>