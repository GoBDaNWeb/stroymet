<script setup>
import { CatalogItem } from "@/entities/catalog-item";
import { Button } from "@/shared/ui";
import { DownloadIcon } from "@/shared/icons";
defineProps(["title", "catalogList", "haveBtn"]);
</script>

<template>
  <div class="catalog">
    <div class="catalog-top container">
      <h3>{{ title }}</h3>
      <Button v-if="haveBtn"><DownloadIcon />Скачать прайс</Button>
    </div>
    <div class="catalog-content">
      <CatalogItem
        v-for="product in catalogList"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :url="product.url"
        :index="product.id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  .catalog-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 62px;
    h3 {
      color: var(--gray-color);
      font-size: 50px;
      font-weight: 400;
      line-height: 50px;
      text-transform: uppercase;
    }
    button {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 20px;
      line-height: 20px;
      font-weight: 400;
      color: var(--blue-color);
      text-transform: uppercase;
    }
  }
  .catalog-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
