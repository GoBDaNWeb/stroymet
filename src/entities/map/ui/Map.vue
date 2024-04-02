<script setup>
const props = defineProps(['coords', 'id']);
let center = props.coords;

function init() {
	let map = new ymaps.Map(props.id, {
		center: center,
		zoom: 15
	});

	let placemark = new ymaps.Placemark(
		center,
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: '/images/pin.svg',
			iconImageSize: [50, 40],
			iconImageOffset: [-20, -37]
		}
	);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
}

ymaps.ready(init);
</script>

<template>
	<div :id="id" class="map"></div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.map {
	width: 100%;
	height: 100%;
	background-color: var(--bg-color);
}
</style>
