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
          @deleteProduct="deleteCartItem"
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
            <li>
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
                <li @click="openMainMenu = !openMainMenu">
                  <router-link to="/products/Sofa">Sofa</router-link>
                </li>
                <li @click="openMainMenu = !openMainMenu">
                  <router-link to="/products/Chair">Chair</router-link>
                </li>
                <li @click="openMainMenu = !openMainMenu">
                  <router-link to="/products/Table">Table</router-link>
                </li>
                <li @click="openMainMenu = !openMainMenu">
                  <router-link to="/products/Cabinet">Cabinet</router-link>
                </li>
                <li @click="openMainMenu = !openMainMenu">
                  <router-link to="/products/Side Table">Side Table</router-link>
                </li>
                <li @click="openMainMenu = !openMainMenu">
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
        <a href="#" class="logo">Hurley Furniture</a>
        </h1>
    </div>
    <div class="header">
        <ul class="header__main-menu main-menu-nobanner">
            <li>
                <router-link to="/">
                  <span>HOME</span>
                  <span>首頁</span>
                </router-link>
            </li>
            <li>
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
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Sofa">
                    <img src="../assets/img/sofa-04.png" alt />
                    <p>Sofa</p>
                    </router-link>
                </li>
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Chair">
                    <img src="../assets/img/chair-04.png" alt />
                    <p>Chair</p>
                    </router-link>
                </li>
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Table">
                    <img src="../assets/img/table-04.png" alt />
                    <p>Table</p>
                    </router-link>
                </li>
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Cabinet">
                    <img src="../assets/img/cabinet-04.png" alt />
                    <p>Cabinet</p>
                    </router-link>
                </li>
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Side Table">
                    <img src="../assets/img/sidetable-04.png" alt />
                    <p>Side Table</p>
                    </router-link>
                </li>
                <li @click="openMenu = !openMenu">
                    <router-link to="/products/Lighting">
                    <img src="../assets/img/lamp-04.png" alt />
                    <p>Lighting</p>
                    </router-link>
                </li>
              </ul>
            </li>
            <li>
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
    <div class="content content-guide">
        <h2 style="font-size:25px; text-align:center">這裡是 Shopping Guide</h2>
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

export default {
  components: {
    shopping,
    search,
    gotop
  },
  data () {
    return {
      openMainMenu: false,
      openMenu: false,
      opensearch: false,
      isLoading: false,
      shoppingCartOpen: false,
      cart: []
    }
  },
  created () {
    this.getCart()
    // const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
    // this.$http.delete(url)
    //   .then(response => {
    //     console.log(response)
    //     this.cart = ''
    //   })
    //   .catch(error => {
    //     this.isLoading = false
    //     console.log(error)
    //   })
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.cart = response.data.data
          this.getTotalPrice()
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    getTotalPrice () {
      this.totalPrice = 0
      this.cart.forEach((item) => {
        this.totalPrice += (item.product.price * item.quantity)
      })
      if (this.totalPrice > 3000) {
        this.deliveryFee = 0
      } else {
        this.deliveryFee = 350
      }
    },
    deleteCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
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
        this.$http.delete(url)
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
        this.$http.patch(url, data)
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
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      const editOrder = Object.assign({}, this.form)
      this.$http.post(url, editOrder)
        .then(response => {
          if (response.data.data.id) {
            this.isLoading = false
            this.getCart()
          }
        })
        .catch(error => {
          this.isLoading = false
          console.log(error.response.data.errors)
        })
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
