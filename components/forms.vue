<template>
  <form @submit="submitFormValues">
    <div v-for="input in renderForms" :key="input.name">
      <label :for="input.name">{{ input.label }}</label>
      <input :id="input.name" :name="input.name" v-model="input.value" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import data from "./dynamicFields.json";
const renderForms = ref([]);

const forms = [
  {
    label: "Product",
    name: "product",
    type: "input",
  },
  {
    label: "Price",
    name: "price",
    type: "input",
  },
];

onMounted(() => {
  renderForms.value = [...forms, ...data];
});

const submitFormValues = (e) => {
  e.preventDefault();

  const payload = renderForms.value.reduce(
    (acc, field) => ({ ...acc, [field.name]: field.value }),
    {}
  );

  console.log(payload);
};
</script>
