<template>
  <div class="go-top" :class="{ 'show': show }" @click="goTop()">
    <svg height="42" width="42">
      <circle cx="21" cy="21" r="20" />
    </svg>
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    window.addEventListener('scroll', this.showGotop)
  },
  methods: {
    showGotop () {
      if (window.pageYOffset > 400) {
        this.show = true
      } else {
        this.show = false
      }
    },
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
