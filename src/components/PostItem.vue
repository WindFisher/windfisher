<script setup>
import defaultImage from "../assets/images/thumbnail-default.jpg";

const { itemDatas } = defineProps({ itemDatas: Object });

const item = itemDatas.attributes;

const imageURL = item.image.data.attributes.formats?.medium?.url;

const itemURL = `/posts/${item.slug}`;
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden mb-10 shadow-lg">
    <a :href="itemURL">
      <img
        :src="imageURL || defaultImage"
        alt="image"
        class="w-full object-cover h-72"
      />
    </a>

    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
      <h2 class="text-2xl font-semibold text-customBlueDark">
        {{ item.title }}
      </h2>
      <p class="text-base text-body-color leading-relaxed mb-7">
        {{ item.description }}
      </p>
      <a
        :href="itemURL"
        class="inline-block py-2 px-7 border border-customBlueDark rounded-full text-base text-customBlueDark font-semibold hover:border-primary hover:bg-customBlueDark hover:text-white transition"
      >
        View Details
      </a>
    </div>
  </div>
</template>
