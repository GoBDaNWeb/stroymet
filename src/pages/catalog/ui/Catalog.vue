<script setup>
import { watch, onMounted, ref } from "vue";
import { Catalog } from "@/widgets/catalog";
import { CatalogInfo } from "@/widgets/catalog-info";
import { Breadcrumbs } from "@/shared/ui";
import { catalogItems, breadcrumbsList } from "../config";
import { useRoute, useRouter } from "vue-router";
import catalogList from "@/shared/config/catalog.json";
const route = useRoute();

let catalog = ref([]);
let breadcrumbs = ref([]);
let catalogName = ref("Каталог");

watch(route, () => {
  if (route.params.slug) {
    const filteredCatalog = catalog._rawValue.filter((item) => {
      return item.url === route.path;
    });
    catalog.value = filteredCatalog[0].catalogInner;
    catalogName.value = filteredCatalog[0].title;
    breadcrumbs.value = [
      ...breadcrumbsList,
      { url: filteredCatalog[0].url, title: filteredCatalog[0].title },
    ];
  } else {
    catalog.value = catalogList;
    catalogName.value = "Каталог";
    breadcrumbs.value = breadcrumbsList;
  }
});

onMounted(() => {
  catalog.value = catalogList;
  catalogName.value = "Каталог";
  breadcrumbs.value = breadcrumbsList;
  if (route.params.slug) {
    const filteredCatalog = catalog._rawValue.filter((item) => {
      return item.url === route.path;
    });
    catalog.value = filteredCatalog[0].catalogInner;
    catalogName.value = filteredCatalog[0].title;
    breadcrumbs.value = [
      ...breadcrumbsList,
      { url: filteredCatalog[0].url, title: filteredCatalog[0].title },
    ];
  }
});
</script>

<template>
  <main class="catalog-page">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Catalog :title="catalogName" :catalogList="catalog" />
    <CatalogInfo />
  </main>
</template>

<style lang="scss" scoped></style>
