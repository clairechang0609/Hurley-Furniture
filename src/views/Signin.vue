<template>
    <div class="wrap">
      <div :class="{'add-background': bgShow}"></div>
      <div class="signin" @keyup.enter="signin()">
          <h3>登入後台</h3>
          <input type="email" v-model="user.email" placeholder="email" required autofocus>
          <input type="password" v-model="user.password" placeholder="password" required>
          <button type="submit" @click.prevent="signin()">登入</button>
          <p>© Hurley Furniture 2020</p>
      </div>
      <loading :active.sync="isLoading"></loading>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false,
      bgShow: true
    }
  },
  methods: {
    signin () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}auth/login`
      this.$http.post(url, this.user)
        .then(response => {
          this.isLoading = false
          const token = response.data.token
          const expired = response.data.expired
          document.cookie = `HurleyHomeToken = ${token}; expires = ${new Date(expired * 1000)}; path=/`
          this.$router.push('/admin/products')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="sass">
    @import '../assets/sass/all.sass'
</style>
