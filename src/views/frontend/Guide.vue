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
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/">
              <span>HOME</span>
              <span>首頁</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu">
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
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/products/Sale">
              <span>SALE</span>
              <span>限時特價</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/guide">
              <span>SHIPPING GUIDE</span>
              <span>運送須知</span>
            </router-link>
          </li>
          <li @click="openMainMenu = !openMainMenu">
            <router-link to="/contact">
              <span>CONTACT</span>
              <span>聯絡我們</span>
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
          <router-link to="/contact">
            <span>CONTACT</span>
            <span>聯絡我們</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content content-guide">
      <h3>SHIPPING GUIDE</h3>
      <ul class="guide-wrap">
        <li class="faq-list">
          <div class="faq-title" @click="showAnswer()">
            <h4>商品到貨日期 / 時間</h4>
            <i class="icon fas fa-angle-down"></i>
          </div>
          <div class="faq-answer">
            <p>出貨後約 3-4 個工作天可送達指定地址。</p>
            <p>如需指定出貨日期，請在備註上註明或<router-link to="/contact" target="_blank">來電通知</router-link>。實際到貨時間依照物流公司安排車趟為主，恕無法指定到貨時段。</p>
          </div>
        </li>
        <li class="faq-list">
          <div class="faq-title" @click="showAnswer()">
            <h4>保固期限 / 服務</h4>
            <i class="icon fas fa-angle-down"></i>
          </div>
          <div class="faq-answer">
            <p>根據原廠銷售及服務條款之規定，以購買日期算起提供標準原廠兩年保固期限。消費者須保存出貨簽收單及發票，始得享有保固服務。</p>
            <p>若商品在符合正常使用狀況，且符合保固範圍及條件，本公司將提供商品維修或更換。待消費者將物品送回本公司後，將依循原廠保固原則進行修繕服務事宜。</p>
          </div>
        </li>
        <li class="faq-list">
          <div class="faq-title" @click="showAnswer()">
            <h4>退換貨說明</h4>
            <i class="icon fas fa-angle-down"></i>
          </div>
          <div class="faq-answer">
            <p>收到商品後七天內，請確認商品是否為「瑕疵、損壞、誤寄商品」任一情況，並<router-link to="/contact" target="_blank">來電或來信</router-link>詢問。</p>
            <p>完成退換貨申請後，請將商品連同完整外盒、配件、說明書、發票備妥，由客服人員與您安排商品取回時間，待我們收到商品確認商品完整且無使用痕跡，即可安排後續換貨／退款事宜。</p>
          </div>
        </li>
        <li class="faq-list">
          <div class="faq-title" @click="showAnswer()">
            <h4>使用折扣代碼退換貨須知</h4>
            <i class="icon fas fa-angle-down"></i>
          </div>
          <div class="faq-answer">
            <p>部份退貨時，退款金額將依據使用折扣代碼的比例進行攤提。</p>
            <p>舉例說明：</p>
            <p>原訂單兩件商品，A商品金額 NT$1,000、B商品金額 NT$500，使用九折優惠碼後實際付款 NT1,350</p>
            <ol>
              <li>若欲辦理A商品退貨，實際退款金額為 NT$1,000 X 0.9 = NT$900</li>
              <li>若欲辦理B商品退貨，實際退款金額為 NT$500 X 0.9 = NT$450</li>
            </ol>
          </div>
        </li>
        <li class="faq-list">
          <div class="faq-title" @click="showAnswer()">
            <h4>組裝服務說明</h4>
            <i class="icon fas fa-angle-down"></i>
          </div>
          <div class="faq-answer">
            <p>商品包裝內均提供完整組裝說明，按步驟組裝即可。</p>
            <p>若有組裝服務需求，我們亦提供專業組裝服務，歡迎<router-link to="/contact" target="_blank">來電詢問</router-link>組裝服務的相關資訊與費用。</p>
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
    showAnswer () {
      if (event.target.className === 'faq-title') {
        event.target.parentNode.classList.toggle('show')
      } else if (event.target.nodeName === 'I' || event.target.nodeName === 'H4') {
        event.target.parentNode.parentNode.classList.toggle('show')
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
