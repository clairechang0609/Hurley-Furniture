<template>
  <div class="top__search" :class="{ 'show': search }">
    <div class="close-btn" @click="changeSearch()"><i class="fas fa-times"></i></div>
    <input type="search" placeholder="search">
    <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
  </div>
</template>

<script>
export default {
  props: ['search'],
  methods: {
    changeSearch () {
      this.$emit('changesearch')
    }
  }
}
</script>
