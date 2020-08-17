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
          @shoppingcartclose="shoppingCartClose"
        ></div>
        <ul class="top__main-menu">
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
      <ul class="header__main-menu main-menu-nobanner">
        <li @click="openMenu = false">
          <router-link to="/">
            <span>HOME</span>
            <span>首頁</span>
          </router-link>
        </li>
        <li @click="openMenu = false">
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
                <img src="../../assets/img/sofa-04.png" alt />
                <p>Sofa</p>
              </router-link>
            </li>
            <li @click="openMenu = !openMenu">
              <router-link to="/products/Chair">
                <img src="../../assets/img/chair-04.png" alt />
                <p>Chair</p>
              </router-link>
            </li>
            <li @click="openMenu = !openMenu">
              <router-link to="/products/Table">
                <img src="../../assets/img/table-04.png" alt />
                <p>Table</p>
              </router-link>
            </li>
            <li @click="openMenu = !openMenu">
              <router-link to="/products/Cabinet">
                <img src="../../assets/img/cabinet-04.png" alt />
                <p>Cabinet</p>
              </router-link>
            </li>
            <li @click="openMenu = !openMenu">
              <router-link to="/products/Side Table">
                <img src="../../assets/img/sidetable-04.png" alt />
                <p>Side Table</p>
              </router-link>
            </li>
            <li @click="openMenu = !openMenu">
              <router-link to="/products/Lighting">
                <img src="../../assets/img/lamp-04.png" alt />
                <p>Lighting</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="openMenu = false">
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
    <div class="content content-contact">
      <h3>CONTACT US</h3>
      <p>關於商品及服務相關問題，<br>歡迎來電或來信詢問，我們將儘速提供協助。</p>
      <ul>
        <li>
          <h4><span>客服專線</span></h4>
          <a href="tel:+886-2-12345678">02-1234-5678</a>
          <p>服務時間：週一至週五 09:00—18:00</p>
        </li>
        <li>
          <h4><span>服務信箱</span></h4>
          <a href="mailto:service@hurley.com">service@hurley.com</a>
        </li>
        <li>
          <h4><span>常見問題</span></h4>
          <p>需要協助或有任何疑問，可以參考<router-link to="/guide">運送相關問題</router-link></p>
        </li>
      </ul>
    </div>
    <div class="footer footer-white">
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
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
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
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
        })
        .catch(() => {})
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
          .catch(() => {})
      } else {
        const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
        this.$http.patch(url, data)
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
