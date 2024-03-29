<script setup>
import {watch} from 'vue'
import { RouterView,useRoute } from "vue-router";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const router = useRoute();

watch(router, () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
