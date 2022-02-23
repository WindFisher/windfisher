<script setup>
const props = defineProps({ advantages: Object });
const { title, content, valorisationItems } = props.advantages;
</script>

<template>
  <div class="bg-customGreenLight">
    <div class="container mx-auto py-12">
      <h2
        class="text-customBlueDark font-semibold text-4xl mb-4 text-center px-2"
      >
        {{ title }}
      </h2>
      <div class="text-center my-8 text-customBlueDark text-lg px-2">
        {{ content }}
      </div>

      <div class="px-2 grid gap-4 grid-cols-2 md:grid-cols-5">
        <div
          v-for="item in valorisationItems"
          :key="item.id"
          class="text-center my-4"
        >
          <div
            class="justify-center items-center mx-auto rounded-full bg-white h-28 w-28 flex"
          >
            <img
              alt=""
              :src="item.image.data[0].attributes.url"
              class="h-20 w-20 content-center items-center"
            />
          </div>
          <div class="text-customBlueDark font-semibold mt-2">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
