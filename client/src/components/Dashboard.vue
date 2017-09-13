<template>
  <div class="dashboard">
    <div class="row">
      <h1>Characters:</h1>
      <div class="col-xs-12 col-lg-3" v-for="character in characters">
        {{character.name}}
      </div>
    </div>
    <div class="row">
      <h1>Towns:</h1>
      <div class="col-xs-12 col-lg-3" v-for="town in towns">
        {{town.name}}
      </div>
    </div>
    <div class="row">
      <h1>Campaigns:</h1>      
      <div class="col-xs-12 col-lg-3" v-for="campaign in campaigns">
        {{campaign.name}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'dashboard',
  data() {
    return {}
  },
  computed: {
    characters() {
      return [{ name: "char one" }, { name: "char two" }, { name: "char three" }, { name: "char four" }, { name: "char five" }]
    },
    towns() {
      return [{ name: "town one" }, { name: "town two" }, { name: "town three" }, { name: "town four" }]
    },
    campaigns() {
      return [{ name: "campaign one" }, { name: "campaign two" }, { name: "campaign three" }, { name: "campaign four" }]
    }
  },
  methods: {},
  components: {}
}
</script>


<style scoped>

</style>