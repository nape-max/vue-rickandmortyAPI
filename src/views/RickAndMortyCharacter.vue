<template>
  <div>
    <CharacterBlock v-if="character" :character="character"/>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
import CharacterBlock from "@/components/CharacterBlock";

export default {
  name: "RickAndMortyCharacter",
  components: {
    CharacterBlock
  },
  data() {
    return {
      character: null,
    }
  },
  async created() {
    try {
      const {id} = this.$route.params;

      if (id) {
        const {data} = await this.$store.dispatch('fetchSingleCharacter', id);
        console.log(data);
        this.character = data;
      }
    } catch(err) {
      console.log(err);
    }
  },
  methods: {
    goBack() {
      this.$router.push({name: 'RickAndMortyList'})
    }
  },
}
</script>