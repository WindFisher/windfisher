<script setup>
const props = defineProps({ content: Object });
const { title, content } = props.content;

import NewsletterForm from "./NewsletterForm.vue";
</script>

<template>
  <div class="bg-customRed text-customBlueDark py-8 px-5">
    <div class="container mx-auto">
      <div class="mx-2">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div class="flex md:col-span-7 lg:col-span-8 items-center">
            <div class="">
              <h2 class="text-3xl font-semibold text-customBlueDark">
                {{ title }}
              </h2>
              <p class="text-lg">
                {{ content }}
              </p>
            </div>
          </div>

          <div class="flex-1 md:col-span-5 lg:col-span-4">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
