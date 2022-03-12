<script setup>
import { computed } from "vue";

import ContactForm from "./ContactForm.vue";

const props = defineProps({ page: Object, image: Object, mode: String });
const { page, image, mode } = props;

const hasContactForm = computed(() => page.content.includes("<ContactForm />"));

const content = computed(() => {
  if (!page.content) return "";

  return page.content
    .replaceAll(".png", ".jpg")
    .replaceAll("<ContactForm />", "")
    .replaceAll("/image/upload/", "/image/upload/w_700,c_scale/");
});
</script>

<template>
  <div class="container mx-auto my-8">
    <div class="mx-2">
      <div
        v-if="image && mode === 'page'"
        class="w-full h-128 md:h-256 z-0 relative"
      >
        <picture>
          <source
            v-if="image.formats.large"
            media="(min-width:1000px)"
            :srcset="image.formats.large.url"
          />
          <source
            v-if="image.formats.medium"
            media="(min-width:750px)"
            :srcset="image.formats.medium.url"
          />
          <source
            v-if="image.formats.small"
            media="(min-width:500px)"
            :srcset="image.formats.small.url"
          />
          <img
            :src="image.formats.large?.url || image.formats.medium?.url"
            :alt="image.alternativeText"
            class="container-block-image object-cover"
            :height="image.formats.medium.height"
            :width="image.formats.medium.width"
          />
        </picture>
      </div>

      <div
        :class="image && mode === 'page' ? '-mt-8 md:-mt-20 lg:-mt-32' : ''"
        class="relative bg-white mx-6 md:mx-32 py-8 px-8 z-10 shadow-lg"
      >
        <article>
          <h1
            class="text-4xl md:text-5xl mb-6 text-customBlueDark font-semibold"
          >
            {{ page.title }}
          </h1>

          <div v-if="mode === 'post' && image.formats.small">
            <img
              :src="image.formats.small.url"
              :alt="image.alternativeText"
              class="ml-4 md:float-right md:w-1/3"
              :height="image.formats.medium.height"
              :width="image.formats.medium.width"
            />
          </div>

          <p class="font-semibold">{{ page.description }}</p>

          <div class="content-page" v-html="content"></div>
        </article>

        <ContactForm client:load v-if="hasContactForm" />
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

.content-page a {
  text-decoration: underline !important;
}

.content-page img {
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

ul {
  margin: 1em;
}

li {
  list-style-type: circle;
}
</style>
