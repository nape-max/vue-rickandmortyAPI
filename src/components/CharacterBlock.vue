<template>
  <div>
  <div class="character-block">
    <div class="character-block__image">
      <img :src="character.image" :alt="character.name">
    </div>
    <div class="character-block__info">
      <span @click="detailedInfo">
        {{character.name}}
      </span>
      <span>
        {{character.status}} - {{character.species}}
      </span>
      <span>
        Last know location: {{character.location.name}}
      </span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "CharacterBlock",
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    detailedInfo() {
      this.$router.push({ name: 'CharacterDetails', params: {id: this.character.id }})
    }
  }
};
</script>