<script setup>
import { ref, onMounted } from "vue";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ArrowRightIcon, ArrowLeftIcon } from "@/shared/icons";
import "swiper/css";
import "swiper/css/navigation";
defineProps(["reviewsList"]);

const modules = ref([Navigation]);

const prev = ref(null);
const next = ref(null);
</script>

<template>
  <div class="reviews">
    <div class="top container">
      <h3>Отзывы</h3>
      <div class="navigation">
        <button ref="prev" class="nav"><ArrowLeftIcon /></button>
        <button ref="next" class="nav"><ArrowRightIcon /></button>
      </div>
    </div>
    <Swiper
      :slidesPerView="2"
      :spaceBetween="10"
      class="reviews-swiper"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :modules="modules"
    >
      <SwiperSlide v-for="review in reviewsList" :key="review.id">
        <div class="user">
          <div class="user-avatar">
            <img v-if="review.avatar" :src="review.avatar" alt="avatar" />
            <p v-else>{{ review.name[0] }}{{ review.lastname[0] }}</p>
          </div>
          <div class="user-info">
            <div class="user-name">{{ review.name }} {{ review.lastname }}</div>
            <div class="user-city">
              {{ review.city }}
            </div>
          </div>
        </div>
        <p>
          {{ review.text }}
        </p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.reviews {
  margin-top: 200px;
  .top {
    display: flex;
    justify-content: space-between;
    h3 {
      color: var(--gray-color);
      text-transform: uppercase;
      font-weight: 400;
      font-size: 50px;
      line-height: 50px;
    }
    .navigation {
      display: flex;
      align-items: center;
      gap: 1px;
    }
  }
  .reviews-swiper {
    border-top: 1px solid var(--light-gray-color);
    border-bottom: 1px solid var(--light-gray-color);
    margin-top: 44px;
    .swiper-slide {
      border-right: 1px solid var(--light-gray-color);
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: auto;
      .user {
        display: flex;
        align-items: center;
        gap: 20px;
        .user-avatar {
          width: 75px;
          height: 75px;
          border-radius: 999px;
          border: 1px solid var(--light-gray-color);
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            color: var(--blue-color);
            line-height: 26px;
            font-size: 29px;
            font-weight: 400;
          }
        }
        .user-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
          .user-name {
            color: var(--gray-color);
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
          }
          .user-city {
            font-weight: 400;
            color: var(--light2-gray-color);
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
      p {
        color: var(--gray-color);
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
      }
    }
  }
}
</style>
