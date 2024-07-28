<template>
  <div>
    <select v-model="countryDialCode">
      <option
        v-for="code in COUNTRY_CODES"
        :key="code.code"
        :value="code.dial_code"
      >
        {{ code.code }} {{ code.dial_code }}
      </option>
    </select>

    <input v-model="phoneNumber" />
    full number: {{ displayPhoneNumber }}
  </div>
</template>

<script lang="ts" setup>
import { COUNTRY_CODES } from "@/constants/country-codes";
const { $getCountryCode } = useNuxtApp();

const countryDialCode = ref<string>();
const phoneNumber = ref<number>();

const displayPhoneNumber = computed(() => {
  return `${countryDialCode.value}${phoneNumber.value ?? ""}`;
});

onMounted(() => {
  countryDialCode.value = COUNTRY_CODES.find(
    (code) => code.code.toLowerCase() === String($getCountryCode).toLowerCase()
  )?.dial_code;
});
</script>
