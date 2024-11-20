<template>
    <div class="menu-windo">
        <div class="c-nav">
            <div class="menu-dropdown_wrapper">
                <div class="c-logo">
                    <a href="https://kam-caroselling.webflow.io/" class="logo">Caroselling</a>
                </div>
                <div class="nav-links_wrapper">
                    <div class="social-links_block">
                        <a href="/" class="menu-social_link w-inline-block"><img
                                src="https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732e5fbd12ebee771e7ceca_instagram.svg"
                                loading="lazy" alt="" class="cc-image c-contain" /></a><a href="/"
                            class="menu-social_link w-inline-block"><img
                                src="https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732e5fb1ecc3b35a9812ee7_twitter.svg"
                                loading="lazy" alt="" class="cc-image c-contain" /></a><a href="/"
                            class="menu-social_link w-inline-block"><img
                                src="https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732e5fb7060f1754ebab753_facebook.svg"
                                loading="lazy" alt="" class="cc-image c-contain" /></a>
                    </div>
                </div>
                <div id="w-node-_6fee054e-36b7-ebf9-cb21-1cce6b0ecbb3-068d2a65" class="search-bar">
                    <div class="search-placeholder">
                        <div>Search the site</div>
                        <div class="search-icon_wrapper">
                            <img src="https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/673cbb103be41d78db6837cc_search-icon.svg"
                                loading="lazy" alt="" class="cc-image c-contain" />
                        </div>
                    </div>
                    <div class="cc-underline"></div>
                </div>
            </div>
            <div class="menu">
                <div class="nav-menu">
                    <a href="#" class="nav-link menu w-inline-block" @click.prevent="$emit('close')">
                        <div>Close</div>
                        <div class="nav-underline"></div>
                    </a>
                </div>
            </div>
            <div class="menu-dropdown_window">
                <div class="menu-dropdown_wrapper">
                    <div id="w-node-_18cb03d4-1a29-7922-12c0-620e3d45b193-068d2a65" class="main-menu_wrapper">
                        <div class="menu-section_title">
                            <div>Browse</div>
                        </div>
                        <div class="main-menu_block">
                            <div class="contact-link_block">
                                <div class="contact-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">home</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="contact-link_block">
                                <div class="contact-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">letters</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="contact-link_block">
                                <div class="contact-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">contacts</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-dd289534-7654-3228-13a6-0d14954cd648-068d2a65" class="service-menu_wrapper">
                        <div class="menu-section_title">
                            <div>Services</div>
                        </div>
                        <div class="main-menu_block">
                            <div class="menu-link_block">
                                <div class="menu-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">web design</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="menu-link_block">
                                <div class="menu-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">copywriting</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="menu-link_block">
                                <div class="menu-link">
                                    <a href="/" class="menu-link_name w-inline-block">
                                        <div class="text-block">brand design</div>
                                        <div class="cc-underline"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_8007e243-e138-af78-dc41-ca97e27854d0-068d2a65" class="service-image_wrapper">
                        <img src="https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732d33a320e0e24e4ffb040_Collages-servizi-01.webp"
                            loading="lazy" sizes="(max-width: 991px) 100vw, 36vw" srcset="
                https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732d33a320e0e24e4ffb040_Collages-servizi-01-p-500.webp 500w,
                https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/6732d33a320e0e24e4ffb040_Collages-servizi-01.webp       762w
              " alt="" class="cc-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);

</script>

<style scoped></style>