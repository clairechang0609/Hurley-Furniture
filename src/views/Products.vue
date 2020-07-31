<template>
  <div class="wrap">
    <div class="top-menu">
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
              <span>({{cart.length}})</span>
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
          is="shopping"
          :shoppingcart="cart"
          :shoppingcartopen="shoppingCartOpen"
          @deleteproduct="deleteCartItem"
          @qtyupdate="qtyUpdate"
          @shoppingcartclose ="shoppingCartClose"
        ></div>
        <ul class="top__main-menu">
          <li>
            <router-link to="/">
              <span>HOME</span>
              <span>首頁</span>
            </router-link>
          </li>
          <li @click="getProducts()">
            <router-link to="/products/All-Products">
              <span>ALL PRODUCTS</span>
              <span>所有商品</span>
            </router-link>
          </li>
          <li class="top__all-product">
            <a href="#" @click.prevent="openMenu = !openMenu">
              <span>PRODUCT CATEGORY ▸</span>
              <span>分類單品 ▸</span>
            </a>
            <ul class="top__all-product-list" :class="{ 'show': openMenu }">
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Sofa">Sofa</router-link>
              </li>
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Chair">Chair</router-link>
              </li>
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Table">Table</router-link>
              </li>
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Cabinet">Cabinet</router-link>
              </li>
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Side Table">Side Table</router-link>
              </li>
              <li @click="getProducts(), openMainMenu = !openMainMenu">
                <router-link to="/products/Lighting">Lighting</router-link>
              </li>
            </ul>
          </li>
          <li @click="getProducts()">
            <router-link to="/products/Sale">
              <span>SALE</span>
              <span>限時特價</span>
            </router-link>
          </li>
          <li>
            <router-link to="/guide">
              <span>SHIPPING GUIDE</span>
              <span>運送須知</span>
            </router-link>
          </li>
          <li>
            <a href="#">
              <span>CONTACT</span>
              <span>聯絡我們</span>
            </a>
          </li>
        </ul>
        <div is="search" :search="opensearch" @changesearch="changeSearch"></div>
      </div>
    </div>
    <div class="logo-wrap">
        <div class="logo-frame"></div>
        <h1>
          <router-link to="/" class="logo">Hurley Furniture</router-link>
        </h1>
    </div>
    <div class="header">
      <div
        class="header__banner-products"
        v-if="category === 'All Products'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d567834662a0611dc105759/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sofa'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d567bcdd423dd01667248d2/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Chair'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d6bea70b6574a7416f2001c/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Table'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5dc6ca47979b2900174c997d/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Cabinet'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5dbcdc42350d2e00232e256f/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Side Table'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d647934f7aa34003e57f243/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Lighting'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5ddb90e29044fe001b6c198b/1400x.webp?source_format=jpg)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sale'"
        :style="`background-image: url(https://shoplineimg.com/5cd8dc7015c0710001011ee2/5cf8fdd4e33efe001a669719/1400x.webp?source_format=jpg)`"
      ></div>
      <ul class="header__main-menu">
        <li>
          <router-link to="/">
            <span>HOME</span>
            <span>首頁</span>
          </router-link>
        </li>
        <li @click="getProducts()">
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
                <img src="../assets/img/sofa-04.png" alt />
                <p>Sofa</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Chair">
                <img src="../assets/img/chair-04.png" alt />
                <p>Chair</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Table">
                <img src="../assets/img/table-04.png" alt />
                <p>Table</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Cabinet">
                <img src="../assets/img/cabinet-04.png" alt />
                <p>Cabinet</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Side Table">
                <img src="../assets/img/sidetable-04.png" alt />
                <p>Side Table</p>
              </router-link>
            </li>
            <li @click="getProducts(), openMenu = !openMenu">
              <router-link to="/products/Lighting">
                <img src="../assets/img/lamp-04.png" alt />
                <p>Lighting</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="getProducts()">
          <router-link to="/products/Sale">
            <span>SALE</span>
            <span>限時特價</span>
          </router-link>
        </li>
        <li>
          <router-link to="/guide">
            <span>SHIPPING GUIDE</span>
            <span>運送須知</span>
          </router-link>
        </li>
        <li>
          <a href="#">
            <span>CONTACT</span>
            <span>聯絡我們</span>
          </a>
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
              <p class="origin-price" v-if="product.price !== product.origin_price">NT${{ product.origin_price | thousands}}</p>
            </div>
          </router-link>
        </li>
      </ul>
      <div is="pagination" :pages="pagination" @changepage="getProducts"></div>
    </div>
    <div class="footer">
      <div class="text">
        <p>© Hurley Furniture 2020 All Rights Reserved.</p>
        <p>圖片為練習使用，無商業用途。</p>
      </div>
    </div>
    <div is="gotop"></div>
    <loading :active.sync="isLoading"></loading>
    <div class="mask" :class="{ 'open': shoppingCartOpen }" @click.prevent="shoppingCartOpen = !shoppingCartOpen"></div>
  </div>
</template>

<script>
import shopping from '../components/Shoppingcart.vue'
import search from '../components/Searchbox.vue'
import gotop from '../components/Gotop.vue'
import pagination from '../components/Pagination.vue'

export default {
  components: {
    shopping,
    search,
    gotop,
    pagination
  },
  data () {
    return {
      products: [],
      showProducts: [],
      category: '',
      openMainMenu: false,
      openMenu: false,
      opensearch: false,
      isLoading: false,
      shoppingCartOpen: false,
      cart: {},
      totalPrice: 0,
      pagination: {}
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  methods: {
    getProducts (page = 1) {
      console.log(this.$route.params.category)
      const category = this.$route.params.category
      this.showProducts = []
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then(response => {
          this.isLoading = false
          this.products = response.data.data
          console.log(response.data)
          this.pagination = response.data.meta.pagination

          this.products.forEach(product => {
            if (category === product.category) {
              this.showProducts.push(product)
              this.category = category
            } else if (category === 'All-Products') {
              this.showProducts = this.products
              this.category = 'All Products'
              console.log(this.showProducts.length)
            } else if (category === 'Sale') {
              if (product.price < product.origin_price) {
                this.showProducts.push(product)
                this.category = category
              }
            }
          })
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http
        .get(url)
        .then(response => {
          this.isLoading = false
          this.cart = response.data.data
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    deleteCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http
        .delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    addToCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: 1
      }
      const judgment = this.cart.some(item => {
        if (item.product.id === id) {
          this.qtyUpdate(id, item.quantity + 1)
          return true
        }
      })
      if (!judgment) {
        this.$http
          .post(url, cart)
          .then(() => {
            this.isLoading = false
            this.getCart()
          })
          .catch(error => {
            this.isLoading = false
            console.log(error.response.data.errors)
          })
      }
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
            this.isLoading = false
            this.getCart()
          })
          .catch(error => {
            this.isLoading = false
            console.log(error)
          })
      } else {
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        this.$http
          .patch(url, data)
          .then(() => {
            this.isLoading = false
            this.getCart()
          })
          .catch(error => {
            this.isLoading = false
            console.log(error)
          })
      }
    },
    changeSearch () {
      this.opensearch = false
    },
    shoppingCartClose () {
      this.shoppingCartOpen = false
    }
  }
}
</script>
