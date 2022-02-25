<script setup>
import { ref, computed } from "vue";

const formAction = import.meta.env.PUBLIC_NEWSLETTER;
const formId = "mc-embedded-subscribe-form";
const formName = "mc-embedded-subscribe-form";
const formTarget = "_blank";

const mailFieldName = "EMAIL";
const idFiedlName = "mce-EMAIL";

const emailField = ref("");

const isDisabled = computed(() =>
  emailField.value.length < 5 ||
  !emailField.value.includes("@") ||
  !emailField.value.includes(".")
    ? "disabled"
    : false
);
</script>

<template>
  <form
    :action="formAction"
    accept-charset="utf-8"
    method="post"
    :id="formId"
    :name="formName"
    class="validate"
    :target="formTarget"
    novalidate
  >
    <div>
      <label class="block font-medium font-semibold" for="email"
        >Enter you email address :</label
      >
      <div class="flex">
        <input
          type="email"
          :name="mailFieldName"
          :id="idFiedlName"
          v-model="emailField"
          class="flex-1 required email input w-full px-3 py-2 pb-2 text-black"
          placeholder="john.doe@gmail.com"
        />
        <input
          type="submit"
          value="Subscribe"
          :disabled="isDisabled"
          id="mc-embedded-subscribe"
          :class="
            isDisabled
              ? 'text-gray-500 bg-gray-300'
              : 'text-gray-700 bg-gray-300 hover:bg-gray-400'
          "
          class="flex font-bold px-5 py-3 text-black text-bold"
        />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
