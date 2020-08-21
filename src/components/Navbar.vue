<template>
  <div class="top-menu">
    <loading :active.sync="isLoading"></loading>
    <div class="top" :class="{ 'show': openMainMenu }">
      <ul class="top__icon">
        <li>
          <a href="#" class="fab fa-twitter twitter"></a>
        </li>
        <li>
          <a href="#" class="fab fa-facebook-f facebook"></a>
        </li>
        <li>
          <a href="#" class="fab fa-instagram ig"></a>
        </li>
      </ul>
      <ul class="top__menu" :class="{ 'hide': opensearch }">
        <li>
          <router-link to="/admin">ADMIN LOGIN</router-link>
        </li>
        <li>
          <router-link to="/account">ACCOUNT</router-link>
        </li>
        <li>
          <a href="#" @click.prevent="shoppingCartOpen = true">
            CART
            <span>({{ cart.length }})</span>
          </a>
        </li>
        <li>
          <a href="#" @click="opensearch = true">
            <i class="fas fa-search search-icon"></i>
          </a>
        </li>
        <li class="ham-btn" @click.prevent="openMainMenu = !openMainMenu">
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
      <div
        is="shoppingcart"
        :shoppingcart="cart"
        :shoppingcartopen="shoppingCartOpen"
        :totalprice="totalPrice"
        @deleteproduct="deleteCartItem"
        @qtyupdate="qtyUpdate"
        @shoppingcartclose="shoppingCartClose"
      ></div>
      <ul class="top__main-menu" v-if="router === 'products'">
        <li @click="openMainMenu = !openMainMenu, openMenu = false">
          <router-link to="/">
            <span>HOME</span>
          </router-link>
        </li>
        <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
          <router-link to="/products/All-Products">
            <span>ALL PRODUCTS</span>
          </router-link>
        </li>
        <li class="top__all-product">
          <a href="#" @click.prevent="openMenu = !openMenu">
            <span>PRODUCT CATEGORY ▸</span>
          </a>
          <ul class="top__all-product-list" :class="{ 'show': openMenu }">
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Sofa">Sofa</router-link>
            </li>
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Chair">Chair</router-link>
            </li>
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Table">Table</router-link>
            </li>
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Cabinet">Cabinet</router-link>
            </li>
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Side Table">Side Table</router-link>
            </li>
            <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
              <router-link to="/products/Lighting">Lighting</router-link>
            </li>
          </ul>
        </li>
        <li @click="getProducts(), openMainMenu = !openMainMenu, openMenu = false">
          <router-link to="/products/Sale">
            <span>SALE</span>
          </router-link>
        </li>
        <li @click="openMainMenu = !openMainMenu, openMenu = false">
          <router-link to="/guide">
            <span>SHIPPING GUIDE</span>
          </router-link>
        </li>
        <li @click="openMainMenu = !openMainMenu, openMenu = false">
          <router-link to="/contact">
            <span>CONTACT</span>
          </router-link>
        </li>
      </ul>
      <ul class="top__main-menu" v-else>
          <li @click="openMainMenu = !openMainMenu, openMenu = false">
            <router-link to="/">
              <span>HOME</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu, openMenu = false">
            <router-link to="/products/All-Products">
              <span>ALL PRODUCTS</span>
            </router-link>
          </li>
          <li class="top__all-product">
            <a href="#" @click.prevent="openMenu = !openMenu">
              <span>PRODUCT CATEGORY ▸</span>
            </a>
            <ul class="top__all-product-list" :class="{ 'show': openMenu }">
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Sofa">Sofa</router-link>
              </li>
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Chair">Chair</router-link>
              </li>
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Table">Table</router-link>
              </li>
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Cabinet">Cabinet</router-link>
              </li>
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Side Table">Side Table</router-link>
              </li>
              <li @click="openMainMenu = !openMainMenu, openMenu = false">
                <router-link to="/products/Lighting">Lighting</router-link>
              </li>
            </ul>
          </li>
          <li @click="openMainMenu = !openMainMenu, openMenu = false">
            <router-link to="/products/Sale">
              <span>SALE</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu, openMenu = false">
            <router-link to="/guide">
              <span>SHIPPING GUIDE</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu, openMenu = false">
            <router-link to="/contact">
              <span>CONTACT</span>
            </router-link>
          </li>
        </ul>
      <div class="top__search" :class="{ 'show': opensearch }">
        <div class="close-btn" @click="opensearch = false"><i class="fas fa-times"></i></div>
        <input type="search" placeholder="search">
        <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="logo-wrap">
      <div class="logo-frame"></div>
      <h1>
        <router-link to="/" class="logo">Hurley Furniture</router-link>
      </h1>
    </div>
    <div class="mask" :class="{ 'open': shoppingCartOpen }" @click.prevent="shoppingCartOpen = !shoppingCartOpen"></div>
  </div>
</template>

<script>
import Shoppingcart from '@/components/Shoppingcart.vue'

export default {
  props: ['router'],
  components: {
    Shoppingcart
  },
  data () {
    return {
      products: [],
      showProducts: [],
      openMainMenu: false,
      openMenu: false,
      opensearch: false,
      totalPrice: 0,
      shoppingCartOpen: false,
      cart: [],
      isLoading: false
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  methods: {
    getProducts () {
      this.$emit('getproducts')
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(response => {
          this.cart = response.data.data
          this.totalPrice = 0
          this.cart.forEach(item => {
            this.totalPrice += (item.product.price * item.quantity)
          })
          this.isLoading = false
        })
    },
    deleteCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http
        .delete(url)
        .then(() => {
          this.getCart()
          this.isLoading = false
        })
    },
    qtyUpdate (id, num) {
      this.isLoading = true
      const data = {
        product: id,
        quantity: num
      }
      if (num === 0) {
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
        this.$http
          .delete(url)
          .then(() => {
            this.getCart()
            this.isLoading = false
          })
      } else {
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        this.$http
          .patch(url, data)
          .then(() => {
            this.getCart()
            this.isLoading = false
          })
      }
    },
    shoppingCartClose () {
      this.shoppingCartOpen = false
    }
  }
}
</script>
