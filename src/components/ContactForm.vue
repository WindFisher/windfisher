<script setup>
import Alert from "./Alert.vue";

import { ref, computed } from "vue";

const cssFormLayout = ref(
  "block w-full py-3 px-1 mt-2 text-gray-800 appearance-none rounded border-2 border-sky-500 focus:customBlueDark"
);

const email = ref("");
const message = ref("");
const isSent = ref(false);
const error = ref("");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isDisabled = computed(() =>
  message.value.length < 5 || !isValidEmail(email.value) ? "disabled" : false
);

const sendMessage = () => {
  const formData = {
    "form-name": "contact",
    email: email.value,
    message: message.value,
  };

  try {
    const res = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      formData,
      body: new URLSearchParams(formData).toString(),
    }).then((res) => {
      console.log("result :", res);
      isSent.value = true;
    });
  } catch (error) {
    console.log(error);
    error.value = "An error has occured. Sorry for the inconvenience.";
  }
};
</script>

<template>
  <transition name="slide">
    <Alert v-if="isSent" type="success" title="Message sent"
      >Your message has been successfully sent ! We will answer you
      shortly</Alert
    ></transition
  >

  <transition name="slide">
    <Alert v-if="error" type="error" title="Error sending message">{{
      error
    }}</Alert>
  </transition>

  <transition name="slide">
    <form v-if="!isSent" name="contact" method="POST" data-netlify="true">
      <p class="mt-5">
        <label class="block"
          >Email :
          <input
            v-model="email"
            type="email"
            name="email"
            :class="`${cssFormLayout}`"
        /></label>
      </p>
      <p class="mt-5">
        <label class="block"
          >Message :
          <textarea
            v-model="message"
            rows="8"
            name="message"
            :class="`${cssFormLayout}`"
          ></textarea>
        </label>
      </p>
      <p>
        <button
          @click="sendMessage"
          type="button"
          :class="
            !isDisabled
              ? 'text-white bg-customBlueDark cursor-pointer'
              : 'text-gray-500 bg-gray-300'
          "
          class="mt-2 px-8 py-2 rounded-md text-lg font-semibold"
          :disabled="isDisabled"
        >
          Send
        </button>
      </p>
    </form>
  </transition>
</template>
