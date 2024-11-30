<template>
  <!-- navbar -->
  <div v-if="!isMenuVisible" data-w-id="56d0c008-e9f9-172c-ea9c-4ae7a1558a08" class="c-nav" style="opacity: 1">
    <div class="nav-wrapper">
      <div class="c-logo">
        <a href="/" aria-current="page" class="logo w--current">Caroselling</a>
      </div>
      <div class="nav-links w-dyn-list">
        <div role="list" class="nav-links w-dyn-items">
          <div role="listitem" class="w-dyn-item">
            <a href="/services/copywriting" class="nav-link w-inline-block">
              <div>copywriting</div>
              <div class="nav-underline"></div>
            </a>
          </div>
          <div role="listitem" class="w-dyn-item">
            <a href="/services/web-design" class="nav-link w-inline-block">
              <div>web design</div>
              <div class="nav-underline"></div>
            </a>
          </div>
          <div role="listitem" class="w-dyn-item">
            <a href="/services/brand-design" class="nav-link w-inline-block">
              <div>brand design</div>
              <div class="nav-underline"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-menu">
      <a href="" class="nav-link w-inline-block" @click.prevent="toggleMenu">
        <div>Menu</div>
        <div class="nav-underline"></div>
      </a>
    </div>
  </div>

  <transition name="fade">
    <!-- menu window -->
    <div v-if="isMenuVisible" class="menu-window">
      <div class="c-nav">
        <div class="menu-dropdown_wrapper">
          <div class="c-logo">
            <a href="/" class="logo">Caroselling</a>
          </div>
          <div class="nav-links_wrapper">
            <div class="social-links_block">
              <a href="https://www.instagram.com/" target="_blank" class="menu-social_link w-inline-block">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.78988 0.578125H16.5817C19.9617 0.578125 22.7017 3.31805 22.7017 6.69792V16.4895C22.7017 19.8694 19.9617 22.6094 16.5817 22.6094H6.78988C3.40992 22.6094 0.669922 19.8694 0.669922 16.4895V6.69792C0.669922 3.31805 3.40992 0.578125 6.78988 0.578125ZM17.5053 7.002C18.1813 7.002 18.7293 6.45401 18.7293 5.77803C18.7293 5.10207 18.1813 4.55408 17.5053 4.55408C16.8292 4.55408 16.2812 5.10207 16.2812 5.77803C16.2812 6.45401 16.8292 7.002 17.5053 7.002ZM11.6872 6.08595C8.64515 6.08595 6.17914 8.55188 6.17914 11.5938C6.17914 14.6357 8.64515 17.1016 11.6872 17.1016C14.729 17.1016 17.1951 14.6357 17.1951 11.5938C17.1983 10.132 16.619 8.72917 15.5855 7.69556C14.5517 6.66194 13.1489 6.08269 11.6872 6.08595ZM8.32098 11.5918C8.32098 13.4508 9.82798 14.9578 11.687 14.9578C13.5459 14.9578 15.0529 13.4508 15.0529 11.5918C15.0529 9.73292 13.5459 8.22595 11.687 8.22595C9.82798 8.22595 8.32098 9.73292 8.32098 11.5918Z"
                    fill="currentColor" />
                </svg>

              </a>
              <a href="https://twitter.com" target="_blank" class="menu-social_link w-inline-block">
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.5827 3.81781C23.9511 4.66032 23.1876 5.39525 22.3217 5.99422C22.3217 6.2143 22.3217 6.43439 22.3217 6.6667C22.3287 10.6634 20.7321 14.4958 17.8901 17.3047C15.048 20.1134 11.1982 21.6638 7.20368 21.6081C4.89433 21.6158 2.61457 21.0885 0.542961 20.0676C0.43126 20.0186 0.359216 19.9082 0.359627 19.7863V19.6517C0.359627 19.4762 0.501894 19.3339 0.677399 19.3339C2.94743 19.259 5.13646 18.472 6.9348 17.0841C4.88012 17.0427 3.03143 15.8255 2.18065 13.954C2.13767 13.8518 2.15105 13.7344 2.21594 13.6446C2.28085 13.5547 2.38789 13.5052 2.4984 13.5138C3.12286 13.5766 3.75357 13.5185 4.35607 13.3426C2.08786 12.8719 0.383554 10.9888 0.139647 8.68415C0.130981 8.5736 0.180523 8.46651 0.270384 8.40158C0.360244 8.33664 0.477439 8.32326 0.579622 8.36625C1.1883 8.63483 1.84538 8.77629 2.51062 8.78197C0.523133 7.47751 -0.33533 4.99641 0.420743 2.74184C0.49878 2.52276 0.686285 2.36092 0.914344 2.31578C1.14239 2.27066 1.37737 2.34889 1.53289 2.52174C4.21489 5.37611 7.89999 7.07701 11.8112 7.26582C11.711 6.86607 11.6617 6.45525 11.6645 6.04313C11.7011 3.88216 13.0383 1.95713 15.0499 1.16926C17.0616 0.381393 19.3495 0.886614 20.8428 2.44839C21.8608 2.25448 22.8449 1.91258 23.7638 1.43355C23.8311 1.39153 23.9166 1.39153 23.9838 1.43355C24.0258 1.50089 24.0258 1.5863 23.9838 1.65364C23.5386 2.67288 22.7868 3.52775 21.8328 4.09904C22.6682 4.00216 23.4888 3.80511 24.2771 3.51214C24.3435 3.46696 24.4308 3.46696 24.4972 3.51214C24.5527 3.53758 24.5943 3.58622 24.6107 3.64512C24.6273 3.70401 24.617 3.76719 24.5827 3.81781Z"
                    fill="currentColor" />
                </svg>

              </a>
              <a href="https://www.facebook.com" target="_blank" class="menu-social_link w-inline-block">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5494 3.02605V20.1614C22.5494 21.5134 21.4534 22.6094 20.1014 22.6094H15.5114C15.1734 22.6094 14.8995 22.3355 14.8995 21.9973V14.6536H17.7636C18.0544 14.6537 18.3052 14.449 18.3633 14.1641L18.804 11.9609C18.8222 11.8719 18.7999 11.7794 18.7432 11.7085C18.6863 11.6377 18.601 11.5955 18.5102 11.5938H14.8995V7.61589C14.8995 7.4469 15.0365 7.30989 15.2054 7.30989H18.2654C18.6035 7.30989 18.8774 7.03591 18.8774 6.69792V4.86198C18.8774 4.524 18.6035 4.25 18.2654 4.25H15.2054C13.1775 4.25 11.5335 5.89396 11.5335 7.92188V11.5938H10.028C9.68998 11.5938 9.41599 11.8677 9.41599 12.2058V14.0417C9.41599 14.3797 9.68998 14.6536 10.028 14.6536H11.5335V21.9973C11.5335 22.3355 11.2595 22.6094 10.9214 22.6094H2.96556C1.61357 22.6094 0.517578 21.5134 0.517578 20.1614V3.02605C0.517578 1.67409 1.61357 0.578125 2.96556 0.578125H20.1014C21.4534 0.578125 22.5494 1.67409 22.5494 3.02605Z"
                    fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div id="w-node-_6fee054e-36b7-ebf9-cb21-1cce6b0ecbb3-068d2a65" class="search-bar">
            <div class="search-placeholder">
              <div>Search the site</div>
              <div class="search-icon_wrapper">
                <svg viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M34.6336 11.3216C31.9001 4.75767 25.4952 0.474582 18.3849 0.45559C10.7217 0.415236 3.90782 5.32379 1.51904 12.6053C-0.869735 19.8868 1.71233 27.8778 7.91022 32.3847C14.1081 36.8917 22.5059 36.885 28.6966 32.3681L46.4683 50.14C47.0296 50.7006 47.9388 50.7006 48.5 50.14C49.0605 49.5788 49.0605 48.6696 48.5 48.1084L30.9007 30.5089C35.8958 25.4486 37.3672 17.8854 34.6336 11.3216ZM32.0707 23.7794C29.7756 29.3103 24.3731 32.9125 18.3849 32.9048V32.8281C10.2577 32.8177 3.6601 26.2543 3.60746 18.1273C3.59971 12.1391 7.20193 6.73659 12.7328 4.44143C18.2637 2.14628 24.6326 3.411 28.8669 7.64528C33.1012 11.8796 34.3659 18.2485 32.0707 23.7794Z"
                    fill="currentColor" />
                </svg>

              </div>
            </div>
            <div class="cc-underline"></div>
          </div>
        </div>
        <div class="nav-menu">
          <a class="nav-link menu w-inline-block" @click.prevent="toggleMenu">
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
                  <a href="/letters/brand-identity-more-than-a-logo-it-is-the-soul-of-your-business"
                    class="menu-link_name w-inline-block">
                    <div class="text-block">letters</div>
                    <div class="cc-underline"></div>
                  </a>
                </div>
              </div>
              <div class="contact-link_block">
                <div class="contact-link">
                  <a class="menu-link_name w-inline-block">
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
              <div class="menu-link_block" v-for="(service, index) in services" :key="index"
                @mouseover="hoveredService = service.image" @mouseleave="hoveredService = ''">
                <div class="menu-link">
                  <a :href="service.url" class="menu-link_name w-inline-block">
                    <div class="text-block">{{ service.name }}</div>
                    <div class="cc-underline"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="w-node-_8007e243-e138-af78-dc41-ca97e27854d0-068d2a65" class="service-image_wrapper">
            <img :src="hoveredService" loading="lazy" sizes="(max-width: 991px) 100vw, 36vw" alt=""
              class="cc-image hide-image" :class="{ 'fade-in': hoveredService, 'fade-out': !hoveredService }" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const isMenuVisible = ref(false);
const hoveredService = ref('');

const services = ref([
  { name: 'Web Design', image: '/assets/images/services/web-design.webp', url: "/services/web-design" },
  { name: 'Copywriting', image: '/assets/images/services/copywriting.webp', url: "/services/copywriting" },
  { name: 'Brand Design', image: '/assets/images/services/brand-design.webp', url: "/services/brand-design" },
]);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

</script>

<style scoped>
.menu-window {
  z-index: 3;
}

.service-image_wrapper {
  position: relative;
}

.cc-image {
  width: 100%;
  transition: opacity 0.5s ease-in-out;
  height: auto;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  /* Duration and easing */
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <=2.1.8 */
  {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  /* Start and end opacity */
}
</style>
