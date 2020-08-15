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
          @shoppingcartclose ="shoppingCartClose"
        ></div>
        <ul class="top__main-menu">
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/">
              <span>HOME</span>
            </router-link>
          </li>
          <li @click="getProducts(), openMainMenu = !openMainMenu">
            <router-link to="/products/All-Products">
              <span>ALL PRODUCTS</span>
            </router-link>
          </li>
          <li class="top__all-product">
            <a href="#" @click.prevent="openMenu = !openMenu">
              <span>PRODUCT CATEGORY ▸</span>
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
          <li @click="getProducts(), openMainMenu = !openMainMenu">
            <router-link to="/products/Sale">
              <span>SALE</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/guide">
              <span>SHIPPING GUIDE</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/contact">
              <span>CONTACT</span>
            </router-link>
          </li>
        </ul>
        <div is="searchbox" :search="opensearch" @changesearch="changeSearch"></div>
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
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/RicPuejiLodrHaduVFdQc5v78XYm6yFvsm1GxlPWhXqZsCFVwFP72PpC7om2awvVWdNelSoIXvDd2wUyyi6cL1mRukYFkDGUjUa6upf8AVuF3COH5scojPZclsoZSJ28.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sofa'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QX5PwspL4EOfN31jH6CaeBZw0z02SL2k6Xpz5sFL3slupCLC0MiLaQMv8GA4RGXDekdDLbkbYo3YWIi7gaQ4Z69iDGD7JJaVULahtozTK5mMJjcD7pu1Y7gZEtdfA7JA.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Chair'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WPmmZqeGhI9sc1miP8sZZl6ctmwk2BBElca8glts2IEYxJBWjtirGV88FIOrmjhepKrgbhtNToKOWWkd7IPIspciw10D1jXsJKqlBQXDML6bQUdivcjEjOlUHty1JoxJ.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Table'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4ZfMR8ZJlsFMzYRxtWYbvxH22wLSh3MwH1MAi80qOvaeguW8mESyG3YIhSj0GrvqmLmI2KYFRN7laJvauope71JoXkREPpPOfo8gwJVDBhwvoNf9lofADUSFC5gyAykQ.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Cabinet'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/yadCEP0C3ZuMPF71NAkDkrxGW0bpsAPUm1R8MsZ6EFoxql68vK0m5Z76PvqBjhRTxgxuNJbSd4QEpYBGXlzm7FrnuvoHZGb8PV9VqG4FFHciY7uRgY1DHaiMdM8jj24t.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Side Table'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BjER2FoqTXryiLcfFaxHykPBXmA04nW8ruVWzNKvwS5StQFQYDvQL5B95zJg8LqyZ5tlh3sZdMvNvh0cI6mJ4DKToAww2wATKiMXOYeeolClxdGdkXNQP3p2zdAQY8DJ.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Lighting'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qNxWrR8xT5oIazVQxFVaJjk7ZXVaTSXaipNRKpqznJpNZDKNhp9Lr5HFTvlCfUX1RdVKAtiW75sssLPy3nlWQZKA2xdxp5kVTEPe7x33EK4NCWp2Oj44jJUXN12I3FdB.png)`"
      ></div>
      <div
        class="header__banner-products"
        v-if="category === 'Sale'"
        :style="`background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Kh7FD1D2iVZTBZ8lbyse8nTU3TYjWvMGz3ETQ9UnDiT33BJarorP8LdfZ7IrvU7d90ghasCwWLvZqxmywbMtGi6oOHAko1ZCSiAJzn1iAbw5FZbPlrTpMfPwWdabPCbo.png)`"
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
    <div is="gotop"></div>
    <loading :active.sync="isLoading"></loading>
    <div class="mask" :class="{ 'open': shoppingCartOpen }" @click.prevent="shoppingCartOpen = !shoppingCartOpen"></div>
  </div>
</template>

<script>
import Shoppingcart from '../../components/Shoppingcart.vue'
import Searchbox from '../../components/Searchbox.vue'
import Gotop from '../../components/Gotop.vue'

export default {
  components: {
    Shoppingcart,
    Searchbox,
    Gotop
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
      cart: [],
      totalPrice: 0
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  methods: {
    getProducts () {
      const category = this.$route.params.category
      this.showProducts = []
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=40`
      this.isLoading = true
      this.$http
        .get(url)
        .then(response => {
          this.isLoading = false
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
        })
        .catch(() => {})
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http
        .get(url)
        .then(response => {
          this.isLoading = false
          this.cart = response.data.data
          this.totalPrice = 0
          this.cart.forEach((item) => {
            this.totalPrice += (item.product.price * item.quantity)
          })
        })
        .catch(() => {})
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
        .catch(() => {})
    },
    addToCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: 1
      }
      const judgment = this.cart.some(item => { // 檢查該商品是否已被加入購物車
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
          .catch(() => {})
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
          .catch(() => {})
      } else {
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        this.$http
          .patch(url, data)
          .then(() => {
            this.isLoading = false
            this.getCart()
          })
          .catch(() => {})
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
