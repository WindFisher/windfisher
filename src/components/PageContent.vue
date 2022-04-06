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
            class="w-full max-h-96 container-block-image object-cover"
            :height="image.formats.large.height || image.formats.medium.height"
            :width="image.formats.large.width || image.formats.medium.width"
          />
        </picture>
      </div>

      <div
        :class="image && mode === 'page' ? '-mt-8 md:-mt-20 lg:-mt-24' : ''"
        class="relative bg-white mx-2 md:mx-10 lg:mx-20 py-8 px-2 md:px-8 z-1 shadow-lg"
      >
        <article class="article-content">
          <h1
            class="text-4xl md:text-5xl mb-6 text-customBlueDark font-semibold"
          >
            {{ page.title }}
          </h1>

          <p class="font-semibold">{{ page.description }}</p>
          <div
            class="content-page"
            :class="mode === 'page' ? 'type-page' : 'type-post'"
            v-html="content"
          ></div>
          <div class="clearer"></div>
        </article>

        <ContactForm client:load v-if="hasContactForm" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
article.article-content {
  h2 {
    color: #292355;
    font-size: 2em;
    font-weight: 600;
  }

  h3 {
    color: #292355;
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 1em;
  }

  .clearer {
    clear: both;
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

  .type-page {
    img {
      margin-top: 1em;
      margin-bottom: 1em;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 641px) {
    .type-post {
      img {
        float: left;
        margin-right: 1.5em;
        clear: both;
        margin-bottom: 1em;
        max-width: 40%;
      }
      img .right {
        float: right;
        clear: right;
        margin-left: 1.5em;
        margin-bottom: 1em;
        max-width: 40%;
      }
    }
  }
  @media screen and (max-width: 640px) {
    .type-post {
      img {
        width: 100%;
        margin-bottom: 1em;
      }
    }
  }

  ul {
    margin: 1em;
  }

  li {
    list-style-type: circle;
  }
}
</style>
