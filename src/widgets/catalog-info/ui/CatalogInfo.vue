<template>
  <div class="catalog-info container">
    <div class="catalog-info-item">
      <h5>Кровля и фасадные материалы от завода Строймет</h5>
      <p>
        Завод кровельных материалов «Строймет» с 1995 года реализует продукцию в
        сфере строительных материалов и кровельных систем. Главное наше
        преимущество, это наличие собственного производства, отвечающего высоким
        требованиям заказчиков и современным стандартам, а соответственно, и
        более выгодные цены при сотрудничестве напрямую. Завод кровельных
        материалов «Строймет» с 1995 года реализует продукцию в сфере
        строительных материалов и кровельных систем.
      </p>
      <p>
        Главное наше преимущество, это наличие собственного производства,
        отвечающего высоким требованиям заказчиков и современным стандартам, а
        соответственно, и более выгодные цены при сотрудничестве напрямую.
      </p>
    </div>
    <div class="catalog-info-item">
      <div class="image-wrapper">
        <img src="/images/catalog/catalog-info.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog-info {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
  h5 {
    color: var(--gray-color);
    font-size: 30px;
    line-height: 33px;
    margin-bottom: 30px;
    font-weight: 400;
  }
  p {
    color: var(--gray-color);
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
  }
  .image-wrapper {
    position: relative;
    padding-bottom: 75%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
