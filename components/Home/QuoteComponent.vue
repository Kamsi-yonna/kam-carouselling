<template>
  <div>
    <div v-if="index === 'firstQuote'" class="quote-wrapper">
      <div id="w-node-_89c19100-c9bb-e0c5-5a08-21062159f36b-8f245f80" class="quote-video_wrapper">
        <div class="quote-video_block"></div>
      </div>
      <div id="w-node-b7988b77-0d78-815a-6d9f-bfcb88170c21-8f245f80" class="quote-block">
        <div class="quote-text_wrapper">
          <div class="quote-text_block">
            <div class="quote-text">
              Any sufficiently advanced<br />technology is
              indistinguishable<br />‍<span class="blue-text_span">from magic.</span>
            </div>
          </div>
        </div>
        <div id="w-node-_89c19100-c9bb-e0c5-5a08-21062159f378-8f245f80" class="quote-subtext_wrapper">
          <div class="quote-subtext_block">
            <div class="quote-subtext">Arthur C. Clarke</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="index === 'secondQuote'" class="quote-wrapper">
      <div id="w-node-_5db9684e-0440-4776-1b17-6f8a86a59546-8f245f80" class="quote-video_wrapper">
        <div class="quote-video_block left-image"></div>
      </div>
      <div id="w-node-_5db9684e-0440-4776-1b17-6f8a86a59548-8f245f80" class="quote-block">
        <div class="quote-text_wrapper">
          <div class="quote-text_block">
            <div class="quote-text">
              The only way to discover the limits of the possible is
              <span class="blue-text_span">to<br />venture a little further</span>, towards<br />the
              impossible.
            </div>
          </div>
        </div>
        <div id="w-node-_5db9684e-0440-4776-1b17-6f8a86a59553-8f245f80" class="quote-subtext_wrapper">
          <div class="quote-subtext_block">
            <div class="quote-subtext">Arthur C. <br />Clarke</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page === 'brandDesign'" class="quote-wrapper">
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac674-692dd9a1" class="quote-video_wrapper">
        <div style="
              background-image: url('https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d498a8b5df11e027c8b8_brand-design-cit.webp');
            " class="quote-video_block"></div>
      </div>
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac676-692dd9a1" class="quote-block">
        <div class="service-quote-text_wrapper">
          <div class="quote-text_block">
            <div class="quote-text">
              Before you give away yourself, you must have a you to give.
            </div>
          </div>
        </div>
        <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac681-692dd9a1" class="quote-subtext_wrapper subtext-shrink">
          <div class="quote-subtext_block">
            <div class="service-quote_subtext">
              Isabel Hickey, Astrology: A cosmic science
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page === 'copywriting'" class="quote-wrapper">
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac674-692dd9a1" class="quote-video_wrapper">
        <div style="
              background-image: url('https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d57ef74b05c10d7778d7_copywriting-quote-desktop.webp');
            " class="quote-video_block"></div>
      </div>
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac676-692dd9a1" class="quote-block">
        <div class="service-quote-text_wrapper">
          <div class="quote-text_block">
            <div class="quote-text">
              Advertising is fundamentally persuasion, and persuasion is not a
              science but an art.
            </div>
          </div>
        </div>
        <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac681-692dd9a1" class="quote-subtext_wrapper subtext-shrink">
          <div class="quote-subtext_block">
            <div class="service-quote_subtext">William Berbanch</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page === 'webDesign'" class="quote-wrapper">
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac674-692dd9a1" class="quote-video_wrapper">
        <div style="
              background-image: url('https://cdn.prod.website-files.com/6732d301546e113668feb3eb/6732d52c03b13515a88e92cd_Gruppo-di-maschere-17.webp');
            " class="quote-video_block"></div>
      </div>
      <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac676-692dd9a1" class="quote-block">
        <div class="service-quote-text_wrapper">
          <div class="quote-text_block">
            <div class="quote-text">
              The universe seems less and less like a great mechanism and more
              and more, a great thought
            </div>
          </div>
        </div>
        <div id="w-node-ab3fa91e-2091-59d2-e2f7-b4925afac681-692dd9a1" class="quote-subtext_wrapper subtext-shrink">
          <div class="quote-subtext_block">
            <div class="service-quote_subtext">James Jeans</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  index?: string;
  page?: string;
}>();
</script>

<style scoped></style>