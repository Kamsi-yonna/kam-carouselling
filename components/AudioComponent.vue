<template>
    <div class="sound-icon_block">
        <svg id="audio-icon" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"
            @click="toggleAudio">
            <path
                d="M8.0967 24.2241L1.15101 31.1698L0.473129 30.4928L7.39913 23.5668L6.97815 23.1702V11.681L16.8351 2.40067V14.1318L22.5 8.4669C21.8005 7.94478 21.0414 7.50742 20.2395 7.1627L20.6239 6.27949C21.5378 6.67229 22.3996 7.17676 23.1901 7.78058L25.0897 5.88101C24.5103 5.47402 23.9 5.11232 23.2651 4.79903L23.6898 3.93551C24.4188 4.2965 25.1169 4.71582 25.7778 5.19001L30.3205 0.647366L30.9984 1.32431L26.5439 5.77882C27.7814 6.79289 28.8505 7.99624 29.712 9.34449C30.8625 11.1363 31.6131 13.1553 31.9125 15.2635C32.212 17.3717 32.0536 19.5191 31.4475 21.5604C30.8414 23.6017 29.8017 25.489 28.4003 27.0922C26.9989 28.6954 25.2689 29.9774 23.327 30.851L22.9323 29.9744C25.3647 28.876 27.4281 27.098 28.8747 24.8551C30.3214 22.6122 31.0891 19.9999 31.0865 17.3309C31.0748 15.245 30.6007 13.1869 29.697 11.3069C28.7932 9.42683 27.483 7.7715 25.8613 6.45951L23.9308 8.39001C26.1072 10.3555 27.4947 13.0455 27.8349 15.9583C28.1751 18.871 27.4446 21.8081 25.7797 24.2222C24.4373 26.1837 22.5362 27.6973 20.3239 28.5661L19.9741 27.6688C21.7299 26.9662 23.2775 25.8269 24.4699 24.3591C25.6623 22.8913 26.4596 21.1436 26.7876 19.2811C27.1157 17.4186 26.9633 15.5034 26.3442 13.7165C25.725 11.9296 24.6602 10.33 23.2501 9.06977L16.8426 15.4763V32.4449L8.0967 24.2241ZM15.8731 30.2294V16.4477L8.77552 23.5462L15.8731 30.2294ZM7.93731 12.0963V22.753L8.07701 22.8862L15.8722 15.091V4.62558L7.93731 12.0963ZM0.0380859 23.099V11.7532H4.83013V23.099H0.0380859ZM0.998182 22.1389H3.87284V12.7133H0.998182V22.1389Z"
                fill="currentColor" />
        </svg>
        <svg id="audio-icon-playing" width="33" height="33" viewBox="0 0 33 33" fill="none"
            xmlns="http://www.w3.org/2000/svg" style="display: none;" @click="toggleAudio">
            <path
                d="M13959.367,12426.468V12414.5l10.267-9.667v31.3Zm1-11.533v11.1l8.266,7.785v-26.668Zm15.608,18.63a14.433,14.433,0,0,0,8.494-13.169,14.682,14.682,0,0,0-8.146-13.057l.442-.9a15.727,15.727,0,0,1,6.272,5.634,15.422,15.422,0,0,1-6.651,22.4Zm-3.081-2.4a11.567,11.567,0,0,0,.28-21.364l.4-.92a12.578,12.578,0,0,1,5.37,18.693,12.352,12.352,0,0,1-5.682,4.521Zm-20.754-4.77v-11.818h4.991v11.818Zm1-1h2.994v-9.817h-2.994Z"
                transform="translate(-13952.141 -12404.836)" fill="#0045ff"></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
const isPlaying = ref(false)

const audioElement = ref<HTMLAudioElement>(new Audio('/assets/audio/MyloXyloto.mp3'));

const toggleAudio = () => {
    if (isPlaying.value) {
        audioElement.value.pause();
        isPlaying.value = false;
        document.getElementById('audio-icon')!.style.display = 'block';
        document.getElementById('audio-icon-playing')!.style.display = 'none';
    } else {
        audioElement.value.play();
        isPlaying.value = true
        document.getElementById('audio-icon')!.style.display = 'none'
        document.getElementById('audio-icon-playing')!.style.display = 'block';
    }

    console.log('clicked')
    console.log(isPlaying.value)
    console.log(audioElement)
};

audioElement.value.loop = true;


</script>

<style scoped></style>