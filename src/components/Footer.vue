<template>
  <div class="py-12 md:py-24 bg-customBlueDark">
    <div class="container mx-auto text-center md:text-left md:flex">
      <div class="flex md:flex-1 justify-center md:justify-end md:mr-8">
        <img
          src="../assets/images/logo-wf-two-lines-white.svg"
          alt="logo wind fisher"
          width="200"
        />
      </div>

      <div class="flex-1">
        <nav>
          <ul class="text-white pt-4 md:ml-8">
            <li class="my-5" v-for="item in footerItems" :key="item.id">
              <a
                class="no-underline text-white hover:text-white"
                :href="item.url"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  footerItems: Array,
});
</script>

<style scoped></style>
