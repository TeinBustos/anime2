<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Anime List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <anime-card v-for="anime in animes" :key="anime.mal_id" :anime="anime" />
        </ion-row>
      </ion-grid>
      <div class="pagination">
        <ion-button @click="prevPage" :disabled="page === 1">Previous</ion-button>
        <span>Page {{ page }}</span>
        <ion-button @click="nextPage">Next</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonButton } from '@ionic/vue';
import AnimeService from '@/services/AnimeService';
import AnimeCard from '@/components/AnimeCard.vue';

export default {
  name: 'HomePage',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonButton, AnimeCard
  },
  data() {
    return {
      animes: [],
      page: 1,
      limit: 12
    };
  },
  async created() {
    await this.loadAnimes();
  },
  methods: {
    async loadAnimes() {
      try {
        this.animes = await AnimeService.getAnimes(this.page, this.limit);
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    },
    async nextPage() {
      this.page += 1;
      await this.loadAnimes();
    },
    async prevPage() {
      if (this.page > 1) {
        this.page -= 1;
        await this.loadAnimes();
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.pagination span {
  margin: 0 10px;
}
</style>
