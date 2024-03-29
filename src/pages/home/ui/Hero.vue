<template>
  <div class="hero">
    <img src="/images/home/hero.jpg" alt="" />
    <div class="container">
      <div class="hero-inner">
        <h1>кровельные <br />и фасадные материалы <br />от производителя</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-inner {
    position: relative;
    h1 {
      font-weight: 400;
      font-size: 50px;
      line-height: 50px;
      z-index: 2;
      text-transform: uppercase;
      color: var(--white-color);
      position: absolute;
      bottom: 50px;
      left: 0;
      text-shadow: 3px 3px 4px #000;
      letter-spacing: -1px;
    }
  }
}
</style>
