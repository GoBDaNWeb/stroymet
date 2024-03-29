<script setup>
import Hero from "./Hero.vue";
import Features from "./Features.vue";
import { Catalog } from "@/widgets/catalog";
import ProductionSwiper from "./ProductionSwiper.vue";
import Reviews from "./Reviews.vue";
import Faq from "./Faq.vue";
import catalogList from "@/shared/config/catalog.json";

import { catalogItems, productionImgs, reviewsList } from "../config";
</script>

<template>
  <main class="home-page">
    <Hero />
    <Features />
    <Catalog title="Каталог" :catalogList="catalogList" :haveBtn="true" />
    <ProductionSwiper :imgs="productionImgs" />
    <Reviews :reviewsList="reviewsList" />
    <Faq />
  </main>
</template>
