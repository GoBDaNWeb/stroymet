<script setup>
import { RouterLink } from "vue-router";
import { Button } from "@/shared/ui";
import { ArrowRightIcon } from "@/shared/icons";
defineProps(["img", "index", "title", "url"]);
</script>

<template>
  <RouterLink :to="url" class="catalog-item">
    <span class="index">{{ index }}</span>
    <div class="image-wrapper">
      <img :src="img" alt="catalog" />
    </div>
    <h5>{{ title }}</h5>
    <Button><ArrowRightIcon />смотреть</Button>
  </RouterLink>
</template>

<style lang="scss">
.catalog-item {
  button {
    svg {
      path {
        stroke: var(--blue-color);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.catalog-item {
  border: 1px solid var(--light-gray-color);
  padding: 30px;
  position: relative;
  .index {
    color: var(--light-gray-color);
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -1px;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 2;
  }
  .image-wrapper {
    position: relative;
    padding-bottom: 75%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  h5 {
    color: var(--gray-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    text-transform: uppercase;
    margin-top: 71px;
    margin-bottom: 20px;
  }
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    color: var(--blue-color);
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
  }
}
</style>
