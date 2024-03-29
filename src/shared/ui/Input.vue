<script setup>
import { ref, defineProps, watch } from "vue";
const props = defineProps(["type", "placeholder", "value", "modelValue"]);
</script>

<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
.input::placeholder {
  color: var(--white-color);
  text-transform: none;
  opacity: 1;
}
.input {
  outline: none;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: var(--white-color);
  width: 100%;
  padding: 25px 30px;
  height: 62px;
}
</style>
