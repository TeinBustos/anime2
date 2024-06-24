<template>
    <ion-col size="6" size-md="3">
        <ion-card>
            <img :src="anime.images.jpg.image_url" :alt="anime.title" />
            <ion-card-header>
                <ion-card-title>{{ anime.title }}</ion-card-title>
            </ion-card-header>
        </ion-card>
    </ion-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'AnimeCard',
    props: {
        anime: {
            type: Object as PropType<any>,
                required: true
            }
        }
    });
</script>

<style scoped>
ion-card {
    text-align: center;
}

ion-card img {
    width: 100%;
    height: auto;
}
</style>