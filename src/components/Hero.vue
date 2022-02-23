<script setup>
const props = defineProps({
  hero: Object,
});

const { title, subtitle, useVideo, heroImage, heroVideo } = props.hero;
</script>

<template>
  <div class="hero-block">
    <div class="container-block">
      <div class="container mx-auto">
        <div class="container-block-text mx-2">
          <h1
            class="text-3xl md:text-5xl mb-2 font-semibold text-white text-shadow"
          >
            {{ title }}
          </h1>
          <h2 class="text-md md:text-xl font-semibold text-white text-shadow">
            {{ subtitle }}
          </h2>
        </div>
      </div>
      <picture>
        <source
          media="(min-width:1000px)"
          :srcset="heroImage.formats.large.url"
        />
        <source
          media="(min-width:750px)"
          :srcset="heroImage.formats.medium.url"
        />
        <source
          media="(min-width:500px)"
          :srcset="heroImage.formats.small.url"
        />
        <img
          :src="heroImage.formats.large.url"
          alt="Flowers"
          class="container-block-image object-cover"
        />
      </picture>
    </div>
  </div>
</template>

<style scoped>
.container-block {
  position: relative;
  height: 100%;
}

.container-block-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.container-block-image {
  z-index: -1;
  top: 0;
  position: absolute !important;
  height: 100%;
  width: 100%;
}

.hero-block {
  height: 75vh;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>
