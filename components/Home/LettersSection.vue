<template>
    <div>
        <div class="letters-section">
            <div class="letters-wrapper">
                <div class="letters-header_block">
                    <h2 class="letters-header">letters</h2>
                </div>
                <h4 class="letters-content_description">
                    Letters because they are thoughtful photographs, letters because
                    they make incredible things happen, letters because you can take us
                    literally<br />
                </h4>
            </div>
            <div class="w-dyn-list">
                <div role="list" class="letters-list_wrapper w-dyn-items">
                    <div v-for="(letter, index) in letters" :key="index" role="listitem" class="w-dyn-item">
                        <a id="w-node-_49235d1c-2744-ac1f-f87f-3578aa59ebd9-8f245f80" :href=letter.link
                            class="w-inline-block">
                            <div id="w-node-_8bd6daf4-0591-0448-377a-9a854fb8949b-8f245f80" class="letters-item">
                                <div id="w-node-_8bd6daf4-0591-0448-377a-9a854fb8949c-8f245f80"
                                    class="letter-image_block">
                                    <img :src=letter.imgUrl loading="lazy" alt=""
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 42vw, 49vw"
                                        class="cc-image" />
                                </div>
                                <div class="letter-details_block">
                                    <div class="letter-details">
                                        <div class="letter-title">
                                            <div>{{ letter.title }}</div>
                                        </div>
                                        <div class="letter-label">
                                            <div>{{ letter.description }}</div>
                                        </div>
                                        <div class="plus-icon">
                                            <div>+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="see-more_container see-more_letter">
                <div class="see-more_button">
                    <div class="see-more_icon">
                        <div>+</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const letters = ref([
    {
        title: 'Brand Identity: more than a logo, it is the soul of your business',
        description: 'Learn how a strong brand identity can increase your business revenue by standing out in the market and building customer loyalty.',
        imgUrl: '/assets/images/letters/6732d97f623231aef8084c50_audiojungle-jibU6OvF-background-ambient-1536x1025.webp',
        link: '/letters/brand-identity-more-than-a-logo-it-is-the-soul-of-your-business',
    },
    {
        title: 'The Fools | to Larry Page and Sergey Brin',
        description: 'Learn about the journey of Larry Page and Sergey Brin, the visionary founders of Google who transformed the internet.A story of audacity.',
        imgUrl: '/assets/images/letters/6732dd334595a1ac8ef30fba_b58bbf0d-de42-4b5a-9a9d-9ef14c094ac1_1200x738.webp',
        link: '/letters/the-fools-to-larry-page-and-sergey-brin',
    },
    {
        title: 'The Fools | to Steve Jobs',
        description: 'Discover the extraordinary story of Steve Jobs, loved,hated, but a fundamental man in the transition to technology as we know it today',
        imgUrl: '/assets/images/letters/6732ddacdff39f1fc79b7e96_1422461253_Steve_Jobs_portrait_by_tumb.webp',
        link: '/letters/the-fools-to-steve-jobs',
    },
    {
        title: 'The Fools | to Bill Gates, innovator and philanthropist',
        description: 'Learn about the remarkable story of Bill Gates, his innovations in the field of personal computers, and his passion for philanthropy.',
        imgUrl: '/assets/images/letters/6732ddf2feeebafefe57787a_Screenshot-2024-07-03-alle-13.49.56-1320x669.webp',
        link: '/letters/the-fools-to-bill-gates-innovator-and-philanthropist',
    }
])
</script>

<style scoped>
.cc-image {
    transform: translate(0, 0);
    transition: transform 0.5s ease-in-out;
}

.plus-icon {
    transition: color 0.5s ease-in-out;
    color: white;
}

.letter-image_block:hover .cc-image {
    transition: transform 0.5s ease-in-out;
    transform: translateX(-18px) translateY(-18px);
}

.letters-item:hover .plus-icon {
    transition: transform 0.5s ease-in-out;
    color: #0045ff;
}
</style>