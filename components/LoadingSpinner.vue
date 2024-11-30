<template>
    <div class="loading-spinner" ref="spinner">
        <div class="loadingContainer">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useGsap from '~/composables/useGsap';

const { gsap } = useGsap();
const spinner = ref();

onMounted(() => {
    gsap.fromTo(spinner.value,
        { opacity: 1 },
        {
            opacity: 1,
            duration: 0.8,
            delay: 0.8,
            onComplete: () => {
                gsap.to(spinner.value, {
                    opacity: 0,
                    duration: 0.7,
                    ease: "power1.inOut",
                    onComplete: () => {
                        // spinner.value.style.display = 'none';
                    }
                });
            }
        }
    );
});
</script>

<style scoped>
.loading-spinner {
    position: fixed;
    font-size: 300px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    /* Optional background */
    z-index: 9999;
    /* Ensure it covers other content */
}

.loadingContainer {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background: linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgb(220, 220, 220) 40%, rgb(170, 170, 170) 98%, rgb(10, 10, 10) 100%);
    position: relative;
}

/* .loader {} */

.loader:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;

    box-shadow:
        0 -10px 20px 20px #ffffff40 inset,
        0 -5px 15px 10px #ffffff50 inset,
        0 -2px 5px #ffffff80 inset,
        0 -3px 2px #ffffffBB inset,
        0 2px 0px #ffffff,
        0 2px 3px #ffffff,
        0 5px 5px #ffffff90,
        0 10px 15px #ffffff60,
        0 10px 20px 20px #366cff18;
    filter: blur(3px);
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}
</style>