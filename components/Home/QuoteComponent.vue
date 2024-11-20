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
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    index: string;
}>();
</script>

<style scoped></style>