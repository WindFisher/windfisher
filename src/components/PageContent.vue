<script setup>
import { computed } from "vue";

const props = defineProps({ page: Object, image: Object });
const { page, image } = props;

const content = computed(() => {
  if (!page.content) return "";

  return page.content
    .replaceAll(".png", ".jpg")
    .replaceAll("/image/upload/", "/image/upload/w_800,c_scale/");
});
</script>

<template>
  <div class="container mx-auto my-8">
    <div class="mx-2">
      <div v-if="image" class="w-full h-128 md:h-256 z-0 relative">
        <picture>
          <source
            media="(min-width:1000px)"
            :srcset="image.formats.large.url"
          />
          <source
            media="(min-width:750px)"
            :srcset="image.formats.medium.url"
          />
          <source media="(min-width:500px)" :srcset="image.formats.small.url" />
          <img
            :src="image.formats.large.url"
            :alt="image.alternativeText"
            class="container-block-image object-cover"
          />
        </picture>
      </div>

      <div
        :class="image ? '-mt-32' : ''"
        class="relative bg-white mx-6 md:mx-32 py-8 px-8 z-10 shadow-lg"
      >
        <article>
          <h1
            class="text-4xl md:text-5xl mb-6 text-customBlueDark font-semibold"
          >
            {{ page.title }}
          </h1>

          <p class="font-semibold">{{ page.description }}</p>

          <div v-html="content"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  color: #292355;
  font-size: 2em;
  font-weight: 600;
  margin-top: 1em;
}

h3 {
  color: #292355;
  font-size: 1.3em;
  font-weight: 600;
  margin-top: 1em;
}

@media screen and (max-width: 640px) {
  h2 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }
}

p {
  margin-bottom: 1em;
}

.container-block-image {
  width: 100%;
}
</style>
