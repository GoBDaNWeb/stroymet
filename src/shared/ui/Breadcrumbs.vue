<script setup>
import { RouterLink } from "vue-router";
import {BreadcrumbArrow} from '@/shared/icons'
defineProps(['breadcrumbs'])
</script>

<template>
    <div class="breadcrumbs container">
        <RouterLink :to="breadcrumb.url" v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title">
            {{ breadcrumb.title }}
            <div class="icon"><BreadcrumbArrow/></div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 5px;
    a {
        color: var(--light2-gray-color);
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        gap: 5px;
        .icon {
            display: flex;
            align-items: center;
            
        }
        &:last-child {
            pointer-events: none;
            .icon {
                display: none;
            }
        }
    }
}
</style>