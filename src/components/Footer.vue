<template>
  <div class="py-24 bg-customBlueDark">
    <div class="container mx-auto flex">
      <div class="flex-1">
        <img
          src="../assets/images/logo-wf-two-lines-white.svg"
          alt="logo wind fisher"
          width="200"
        />
      </div>

      <div class="flex-1">
        <nav>
          <ul
            class="items-center justify-between text-base text-white pt-4 md:pt-0"
          >
            <li class="my-4" v-for="item in footerItems" :key="item.id">
              <a
                class="no-underline text-customGreenLight hover:text-white"
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
