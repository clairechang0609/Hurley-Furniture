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
          <router-link to="/" class="logo">Hurley Furniture</router-link>
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
        <h3>SHIPPING GUIDE</h3>
        <ul class="guide-wrap">
            <li class="faq-list">
                <div class="faq-title" @click="showAnswer()">
                    <h4>如果我無法自己運送家具怎麼辦?</h4>
                    <div class="icon"><i class="fas fa-angle-down"></i></div>
                </div>
                <div class="faq-answer">
                    <p>IKEA 大部份的商品都是平整包裝，你可以在商品頁面找到包裝的尺寸大小、重量等相關資訊，方便你在購買後自己搬回家，同時省下更多費用。</p>
                    <p>如果你購買的是大型家具且需要運送到府的服務，我們也有提供專業的運送服務。歡迎點選這裡查詢運送服務的相關詳情。</p>
                </div>
            </li>
            <li class="faq-list">
                <div class="faq-title" @click="showAnswer()">
                    <h4>我購買的商品需要退換貨，該怎麼做呢?</h4>
                    <div class="icon"><i class="fas fa-angle-down"></i></div>
                </div>
                <div class="faq-answer">
                    <p>在 IKEA，如果你對於購買的產品不滿意，你可在 365 天內，攜帶完好的商品、原始包裝、統一發票及明細（刷卡購買者需信用卡與簽單）到 IKEA 分店退換貨。完整退換貨資訊請<a href="#">點選這裡</a>。
                    或是你也可以與IKEA客服連繫確認，請<a href="#">點選這裡</a>確認各分店連絡方式。</p>
                </div>
            </li>
            <li class="faq-list">
                <div class="faq-title" @click="showAnswer()">
                    <h4>如何知道我想購買的商品在 IKEA 店內有沒有貨?</h4>
                    <div class="icon"><i class="fas fa-angle-down"></i></div>
                </div>
                <div class="faq-answer">
                    <p>IKEA官網除了有數千種不同設計和價格的 IKEA 家具家飾商品供你瀏覽。在點入商品的詳細介紹頁面後，你可以使用查詢貨況功能確認想購買商品之貨況。</p>
                    <p>不過因為貨況可能隨時變動，建議你來店之前，來電做最後確認。歡迎<a href="#">點選這裡</a>確認各分店連絡方式。</p>
                </div>
            </li>
            <li class="faq-list">
                <div class="faq-title" @click="showAnswer()">
                    <h4>我購買 IKEA 家具後，IKEA 可以提供組裝服務嗎?</h4>
                    <div class="icon"><i class="fas fa-angle-down"></i></div>
                </div>
                <div class="faq-answer">
                    <p>我們的商品除了包裝平整，方便你購買後直接帶走，還有完整的組裝說明，讓你按步驟組裝。 當然，你也可以選擇我們專業的組裝服務，為你節省時間。組裝費用為產品售價的 6.5%，其費用未達 $400 者，最低以 $400 計算(廚具、洗手台及窗簾訂製施工費另計)。歡迎<a href="#">點選這裡</a>查詢組裝服務的相關詳情。</p>
                </div>
            </li>
            <li class="faq-list">
                <div class="faq-title" @click="showAnswer()">
                    <h4>如何建立我的購物清單?</h4>
                    <div class="icon"><i class="fas fa-angle-down"></i></div>
                </div>
                <div class="faq-answer">
                    <p>只要四步驟，就能輕鬆建立專屬購物清單：</p>
                    <ol>
                        <li>將欲購買商品【加入購物車】</li>
                        <li>點選【前往結帳】進入「我的購物車」頁面</li>
                        <li>於「選擇運送方式」選項中點選【儲存購物清單】</li>
                        <li>
                            輸入電子郵件寄送購物清單或登入/註冊官網會員，將購物清單儲存至你的帳戶
                            <br><span>特別提醒：以電子郵件方式寄送購物清單為一次性使用；如有未來查詢的需求，請選擇登入/註冊，將購物清單儲存至你的帳戶。</span>
                        </li>
                    </ol>
                </div>
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
    showAnswer () {
      event.target.parentNode.classList.toggle('show')
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
