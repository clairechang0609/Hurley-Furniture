<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div is="navbar" :router='router' @getproducts="getProducts"></div>
    <div class="header">
      <div
        class="header__banner-products"
        v-if="category === 'All Products'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/HzXptYyxgN3ZYOu7oC83Z6A9mmJkbJf7OsxJ4RMuJJJsCMmNLr4D66116JW4sBYUmOHJ5X7WInNTxNyinjIE1sKmwj4NPTLA7ehiRDeEDEEtBkzWoyTAIYTl9fwGO91S.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sofa'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/87MKhyLZmjmQLSAcfUhwFG8IXAa3STAV7oOwY0palmh1tY2ZULIV1FRvNkEp2cMbFRnzbAZt8e6GeUqraLHnk1ecu8uHq5ekEFOVaBPhVJdCI2nMRHS7hfl37dsFoIGh.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Chair'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/udE6lxHHveCdXRRJBuCNCeqvF79gMu1M7WdTFu6FcmFfhz8jM0UF3VU5IAEl7B4txyK4Mi4I0I5cqaAMUiIagaZt34XLBQoooJuYRGkWEYaV1GuwVccShXWIS1SIkTTy.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Table'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dse7xWc7qSACcDIjUubtmHEs8iqay1uaU9BTrqt5WNw6IJfTBii9XFCAHoo2MHaRZaZM7Gnb22IEvgeXtHJndKhjrIBnL3DwH83LHzN7z8r06A7cFvLqR6MeMM0Xf7bP.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Cabinet'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NCfrAFX3jnqVp8EmY9XAhOCGyT5pxY8Hf6k8HXqLR2feWtkq7lv6GoECsSAt06anGgubqCAOCO9bYXoU9vDtG6eyXQyatUNb79diGrZ80yi7qkq8b7rmxTUvOkq8VzCo.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Side Table'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FA8OtQ71Ok3jjHpx4xGleDDEViuTU8iSYrkc91tkcRoSdHIB4qXIPOi6GHA1M2BlIY1Lq6nzTGlvVeO3vnY8OXyCJ2T9VPyKAq6DOAQZd44gloFjQWhQ6gM7g4O4bg4z.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Lighting'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/3G77snGeN7i1YPiDYoHdK535mxMxYLRReDEy8RAMowp6BJAsO4h336GEGjFvFesf9Vahd1QFjHUUm4BOd6eXjxb0jROkewuEM3jX5NC8LuhYdtk2hyBd2HaNO336gYsJ.jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sale'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FyzOhf6flDI62JcIkPmN25aVp1CWsBzcO5pczl4goDLO2CYGQKGgj4eaHTUu7YCTeC1jdpFcVtzfPIZiTWnRvnrCjLraYz3SShCNlWzz7ZVHm6dHfbuH4orJRoa8eMYc.jpg)`"
      ></div>
      <ul class="header__main-menu">
        <li @click="openMenu = false">
          <router-link to="/">
            <span>HOME</span>
            <span>首頁</span>
          </router-link>
        </li>
        <li @click="getProducts(), openMenu = false">
          <router-link to="/products/All-Products">
            <span>ALL PRODUCTS</span>
            <span>所有商品</span>
          </router-link>
        </li>
        <li class="header__all-product">
          <a href="#" @click.prevent="openMenu = !openMenu">
            <span>PRODUCT CATEGORY ▾</span>
            <span>分類單品 ▾</span>
          </a>
          <ul class="header__all-product-list" :class="{ 'show': openMenu }">
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Sofa">
                <img src="../../assets/img/sofa-04.png" alt />
                <p>Sofa</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Chair">
                <img src="../../assets/img/chair-04.png" alt />
                <p>Chair</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Table">
                <img src="../../assets/img/table-04.png" alt />
                <p>Table</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Cabinet">
                <img src="../../assets/img/cabinet-04.png" alt />
                <p>Cabinet</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Side Table">
                <img src="../../assets/img/sidetable-04.png" alt />
                <p>Side Table</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Lighting">
                <img src="../../assets/img/lamp-04.png" alt />
                <p>Lighting</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="getProducts(), openMenu = false">
          <router-link to="/products/Sale">
            <span>SALE</span>
            <span>限時特價</span>
          </router-link>
        </li>
        <li @click="openMenu = false">
          <router-link to="/guide">
            <span>SHIPPING GUIDE</span>
            <span>運送須知</span>
          </router-link>
        </li>
        <li @click="openMenu = false">
          <router-link to="/contact">
            <span>CONTACT</span>
            <span>聯絡我們</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content contents-products">
      <h4>{{ category }}</h4>
      <ul class="items">
        <li class="item" v-for="product in showProducts" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <div class="card-img" :style="`background-image: url(${product.imageUrl[0]})`">
              <button type="button" class="add-btn" @click.prevent="addToCart(product.id)">Add to Cart</button>
            </div>
            <div class="card-text">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="sale-price">NT${{ product.price | thousands }}<span class="sale-icon" v-if="product.price !== product.origin_price">sale</span></p>
              <p class="origin-price" v-if="product.price !== product.origin_price">NT${{ product.origin_price | thousands }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="text">
        <p>© Hurley Furniture 2020 All Rights Reserved.</p>
        <p>圖片為練習使用，無商業用途。</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      products: [],
      showProducts: [],
      category: '',
      openMenu: false,
      isLoading: false,
      cart: [],
      router: ''
    }
  },
  created () {
    this.getCart()
    this.getProducts()
    this.router = this.$router.history.current.name
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(response => {
          this.cart = response.data.data
          this.isLoading = false
        })
    },
    getProducts () {
      const category = this.$route.params.category
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=40`
      this.isLoading = true
      this.$http
        .get(url)
        .then(response => {
          this.showProducts = []
          this.products = response.data.data

          this.products.forEach(product => {
            if (category === product.category) {
              this.showProducts.push(product)
              this.category = category
            } else if (category === 'All-Products') {
              this.showProducts = this.products
              this.category = 'All Products'
            } else if (category === 'Sale') {
              if (product.price < product.origin_price) {
                this.showProducts.push(product)
              }
              this.category = category
            }
          })
          this.isLoading = false
        })
    },
    addToCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`

      const judgment = this.cart.some(item => { // 檢查該商品是否已被加入購物車
        if (item.product.id === id) {
          const data = {
            product: id,
            quantity: item.quantity + 1
          }
          this.$http
            .patch(url, data)
            .then(() => {
              this.getCart()
              this.$bus.$emit('get-cart')
              this.isLoading = false
            })

          return true
        }
      })
      if (!judgment) {
        const data = {
          product: id,
          quantity: 1
        }
        this.$http
          .post(url, data)
          .then(() => {
            this.getCart()
            this.$bus.$emit('get-cart')
            this.isLoading = false
          })
      }
    }
  }
}
</script>
