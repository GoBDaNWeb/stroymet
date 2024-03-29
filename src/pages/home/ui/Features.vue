<script setup>
import {
  ProductionIcon,
  DeliveryIcon,
  GostIcon,
  WastesIcon,
} from "@/shared/icons";
</script>

<template>
  <div class="features container">
    <div class="feture-item">
      <div class="icon">
        <GostIcon />
      </div>
      <h4>Работаем по ГОСТ</h4>
      <p>
        Используем только сертифицированное сырье ведущих металлургических
        комбинатов ММК, Северсталь, НЛМК
      </p>
    </div>
    <div class="feture-item">
      <div class="icon">
        <ProductionIcon />
      </div>
      <h4>Наличие собственного производства</h4>
      <p>
        Мы являемся производителем, <br />что делает наши цены
        конкурентоспособными на рынке
      </p>
    </div>
    <div class="feture-item">
      <div class="icon">
        <DeliveryIcon />
      </div>
      <h4>Своевременная доставка от 1 до 3 дней</h4>
      <p>
        Благодаря продуманной логистике мы доставляем материалы точно
        в согласованное время
      </p>
    </div>
    <div class="feture-item">
      <div class="icon">
        <WastesIcon />
      </div>
      <h4>Минимальное количество отходов</h4>
      <p>
        Наши специалисты просчитывают комплектацию вашего заказа с минимальными
        обрезками
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 61px;
  margin-bottom: 130px;
  .feture-item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    h4 {
      color: var(--blue-color);
      text-transform: uppercase;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      max-width: 290px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: var(--gray-color);
    }
  }
}
</style>
