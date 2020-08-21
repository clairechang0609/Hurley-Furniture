<template>
  <div class="wrap">
    <router-view></router-view>
    <div is="gotop"></div>
  </div>
</template>

<script>
import Gotop from '@/components/Gotop.vue'

export default {
  components: {
    Gotop
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  @import '@/assets/sass/all.sass'
</style>
