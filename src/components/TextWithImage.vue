<script setup>
const props = defineProps({ content: Object, direction: String });
const { title, content, image: imageDatas } = props.content;
const image = imageDatas.data.attributes;
</script>

<template>
  <div class="container mx-auto">
    <div
      class="md:flex mx-2"
      :class="props.direction === 'left' ? 'flex-row-reverse' : 'md:flex-row'"
    >
      <div
        class="flex-1"
        :class="props.direction === 'right' ? 'md:pr-16 ' : 'md:pl-16 md:pr-48'"
      >
        <h2
          class="font-semibold text-customBlueDark text-3xl mb-4 mt-4 md:mt-1"
        >
          {{ title }}
        </h2>
        <div class="content" v-html="content"></div>
      </div>

      <div
        class="pt-6 md:pt-0"
        :class="props.direction === 'right' ? 'basis-1/3 ' : 'basis-1/4'"
      >
        <picture>
          <source
            media="(min-width:750px)"
            :srcset="image.formats.medium.url"
          />
          <source media="(min-width:500px)" :srcset="image.formats.small.url" />

          <img
            :src="image.formats.medium.url"
            alt="Flowers"
            class="rounded-lg"
            :height="image.formats.medium.height"
            :width="image.formats.medium.width"
          />
        </picture>
      </div>
    </div>
  </div>
</template>
