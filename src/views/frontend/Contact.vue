<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div is="navbar" :router='router'></div>
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
      openMenu: false,
      isLoading: false,
      router: ''
    }
  },
  created () {
    this.router = this.$router.history.current.name
  }
}
</script>
