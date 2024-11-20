<template>
    <div>
        <div v-if="index === 'firstSection'" data-w-id="b3963c32-dd42-ca14-821f-5e79a5d17bfd" class="we-section">
            <div class="we-wrapper">
                <div class="we-bracket_block">
                    <h5 class="we-bracket_text">(we)</h5>
                </div>
                <div class="we-content_wrapper">
                    <div class="we-content_block">
                        <h2 class="we-content_heading">
                            Big things, as well as small things, <br />we are passionate
                            about <br />everything.
                        </h2>
                        <h4 class="we-content_description">
                            Every day, we have the ambition to
                            <span class="blue-text_span">simplify complexity</span>.
                            <br />We don't like compromises, standard answers to any
                            problem, but only the solution designed and right for you.
                            <br />We believe in ideas that can embrace a strategic vision.
                            <br />We'll tell you we're going to do things, and then we're
                            actually going to do them<span class="blue-text_span">.</span>
                        </h4>
                    </div>
                    <div class="section-top_line"></div>
                </div>
            </div>
        </div>

        <div v-if="index === 'secondSection'" class="we-section">
            <div class="step-wrapper">
                <div class="we-bracket_block">
                    <h5 class="we-bracket_text">(come)</h5>
                </div>
                <div class="we-content_wrapper">
                    <div class="we-content_block">
                        <h2 class="we-content_heading">
                            We design for the future.<br />
                        </h2>
                        <h4 class="we-content_description">
                            In chaotic times, language and communication can do small big
                            things, such as leaving
                            <span class="blue-text_span">5 messages</span> in the time
                            capsule.
                        </h4>
                    </div>
                    <div class="section-top_line"></div>
                </div>
            </div>
            <div class="design-step-wrapper">
                <div class="design-step-block">
                    <div class="index-block">
                        <div>01</div>
                    </div>
                    <div class="step-description">
                        <div>
                            Design content as if you were working
                            <span class="blue-text_span">for Fisher Price.</span>
                        </div>
                    </div>
                </div>
                <div id="w-node-bb1b0713-6053-3723-462f-eb6be24a33c9-8f245f80" class="design-step-block">
                    <div class="index-block">
                        <div>02</div>
                    </div>
                    <div class="step-description">
                        <div>
                            Respect the <span class="blue-text_span">emotions</span> of
                            those who read and consume your content.
                        </div>
                    </div>
                </div>
                <div id="w-node-f060d18c-20b6-25fd-bd55-5eb0ec78a521-8f245f80" class="design-step-block">
                    <div class="index-block">
                        <div>03</div>
                    </div>
                    <div class="step-description">
                        <div>
                            <span class="blue-text_span">Use a human voice, not a tone of voice.</span>
                        </div>
                    </div>
                </div>
                <div id="w-node-_2f201533-4659-fbc0-8d9c-bf4f97797619-8f245f80" class="design-step-block">
                    <div class="index-block">
                        <div>04</div>
                    </div>
                    <div class="step-description">
                        <div>
                            Convey closeness,
                            <span class="blue-text_span">ethics and values.</span>
                        </div>
                    </div>
                </div>
                <div id="w-node-e2497751-db73-dbd7-687b-f5465376b817-8f245f80" class="design-step-block">
                    <div class="index-block">
                        <div>05</div>
                    </div>
                    <div class="step-description">
                        <div>
                            Guide people's actions, solve their problems, and change their
                            lives <span class="blue-text_span">for the better.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="index === 'thirdSection'" class="we-section">
            <div class="we-wrapper">
                <div class="we-bracket_block">
                    <h5 class="we-bracket_text">(human)</h5>
                </div>
                <div class="we-content_wrapper">
                    <div class="we-content_block">
                        <h2 class="we-content_heading full-width">
                            We need
                            <span class="blue-text_span">words that say things</span>.<br />And then things that turn
                            into reality.
                        </h2>
                        <h4 class="we-content_description">
                            The designer must never forget that people's mental models
                            change: returning content within everyone's reach means
                            intimately understanding the motivations of the mental processes
                            behind a state of mind and the ways in which information is
                            used. <br />and it is a
                            <span class="blue-text_span">constant process.</span><br />
                        </h4>
                    </div>
                    <div class="section-top_line"></div>
                </div>
            </div>
        </div>

        <div v-if="index === 'fourthSection'" class="we-section">
            <div class="we-wrapper">
                <div class="we-bracket_block">
                    <h5 class="we-bracket_text">(chi siamo)</h5>
                </div>
                <div class="we-content_wrapper">
                    <div class="we-content_block">
                        <h2 class="we-content_heading chi-content_heading">
                            No, we are not young and dynamic, <br />even if we risk as<br />if
                            we were 23 years old.
                        </h2>
                        <h4 class="we-content_description full-width">
                            We use creative group techniques to develop effective ideas.
                            <br /><br />It means that the team's ability to develop a
                            process between the problem and the solution is multiplied by
                            all the elements of the group who participate with their skills
                            and knowledge: a sort of collective brain that
                            <span class="blue-text_span">amplifies ideas</span> to make the
                            creative process more fertile.<br />
                        </h4>
                    </div>
                    <div class="section-top_line"></div>
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