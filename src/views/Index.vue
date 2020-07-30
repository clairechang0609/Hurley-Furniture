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
      <div class="header__banner-home"></div>
      <ul class="header__main-menu">
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
    <div class="content contents-home">
      <div class="new">
        <div class="hp-title new__title">
            <div class="text">
              <h4>NEW IN<span>2020 夏季限量系列</span></h4>
              <p>夏日來臨，該如何迎接熱情洋溢的季節？<br>除了走出戶外，享受美好陽光浴，家裡也該來轉換風格囉！<br>挑選色彩繽紛傢俱，打造屬於自己的夏季氛圍。</p>
            </div>
            <a class="more-btn" href="#">
              <span></span>
              <p>view more</p>
            </a>
            <img class="new-item-01"
                src="https://shoplineimg.com/5cd8dc7015c0710001011ee2/5da59c48f9754b002c475ffd/800x.webp?source_format=jpg" alt="">
            <img class="new-item-02"
                src="https://shoplineimg.com/5cd8dc7015c0710001011ee2/5ecb8c55bc187e363d31f67a/800x.webp?source_format=jpg" alt="">
        </div>
        <ul class="new__content">
            <li>
              <div class="select">
                <a class="pic-first" href="#"></a>
                <p class="text-first">Mags Soft 雙人沙發</p>
              </div>
              <div class="select">
                <a class="pic-second" href="#"></a>
                <p class="text-second">Bonbon 絲光燈罩</p>
              </div>
            </li>
            <li>
              <div class="select-single">
                <a class="pic-third" href="#"></a>
                <p class="text-third">新秩序置物架</p>
              </div>
            </li>
            <li>
              <div class="select">
                <a class="pic-fourth" href="#"></a>
                <p class="text-fourth">高背鋼腳扶手椅</p>
              </div>
              <div class="select">
                <a class="pic-fifth" href="#"></a>
                <p class="text-fifth">CPH20 圓桌</p>
              </div>
            </li>
        </ul>
      </div>
      <div class="sale">
        <div class="hp-title sale__title">
            <div class="text">
                <h4>ON SALE<span>限時特賣，再創低價</span></h4>
                <p>以物超所值的價格，輕鬆打造質感生活。<br>有時只需要小改變，就能讓空間煥然一新。<br>絕版商品限量釋出，快來搶購！</p>
            </div>
            <a class="more-btn" href="#">
                <span></span>
                <p>view more</p>
            </a>
            <img class="new-item-03"
                src="https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d5bea50e9b3ee0038a9d219/800x.webp?source_format=jpg"
                alt="">
            <img class="new-item-04"
                src="https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d5bc7beb19ace0014165345/800x.webp?source_format=jpg"
                alt="">
        </div>
        <div class="sale__content swiper-container" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-01"></div>
                    <div class="product-name">
                        <h5>夜巡桌燈 by MENU</h5>
                        <p>NT$8,500<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$10,000</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-02"></div>
                    <div class="product-name">
                        <h5>花生鋼腳單椅 by normann</h5>
                        <p>NT$23,800<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$29,800</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-03"></div>
                    <div class="product-name">
                        <h5>包圍咖啡桌(大) by Muuto</h5>
                        <p>NT$31,800<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$35,800</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-04"></div>
                    <div class="product-name">
                        <h5>原型沙發-兩人座 by Muuto</h5>
                        <p>NT$140,100<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$150,900</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-05"></div>
                    <div class="product-name">
                        <h5>浮光吊燈 by Muuto</h5>
                        <p>NT$15,500 up<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$16,900 up</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-06"></div>
                    <div class="product-name">
                        <h5>木纖木腳休閒椅 by Muuto</h5>
                        <p>NT$31,800<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$33,800</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-07"></div>
                    <div class="product-name">
                        <h5>速寫椅凳 by FRAMA</h5>
                        <p>NT$24,800<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$28,800</div>
                    </div>
                </a><a href="#" class="swiper-slide">
                    <div class="sale-pic pic-08"></div>
                    <div class="product-name">
                        <h5>層列咖啡桌 by Umbra Shift</h5>
                        <p>NT$21,500<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$22,900</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-09"></div>
                    <div class="product-name">
                        <h5>層列邊桌 by Umbra Shift</h5>
                        <p>NT$15,000<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$16,800</div>
                    </div>
                </a>
                <a href="#" class="swiper-slide">
                    <div class="sale-pic pic-10"></div>
                    <div class="product-name">
                        <h5>Pacha 波恰休閒椅 by Gubi</h5>
                        <p>NT$98,800<span class="sale-icon">sale</span></p>
                        <div class="orign">NT$101,800</div>
                    </div>
                </a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="selection">
        <div class="hp-title selection__title">
            <div class="text">
                <h4>SELECTION<span>本週精選</span></h4>
                <p>健康的工作和生活平衡就格外重要，<br>趁著美好的夏天踏出戶外，享受不被待辦清單打擾的片刻，<br>你也可以打造自己專屬的愜意小天地。</p>
            </div>
            <a class="more-btn" href="#">
                <span></span>
                <p>view more</p>
            </a>
        </div>
        <div class="selection__content">
            <div class="select-pic"></div>
            <div class="select-product">
                <p>Balcony Inspiration<span>享受戶外美好時光</span></p>
                <ul>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-3.59.59.jpg" alt="">
                        <p>條理戶外單椅<span>by HAY</span></p>
                    </a></li>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-5.23.32.jpg" alt="">
                        <p>甲蟲塑面橡木單椅<span>by GUBI</span></p>
                    </a></li>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-5.28.31.jpg" alt="">
                        <p>純木包覆單椅<span>by Muuto</span></p>
                    </a></li>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-5.31.42.jpg" alt="">
                        <p>午憩PLUS坐墊單椅<span>by MENU</span></p>
                    </a></li>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-5.43.44.jpg" alt="">
                        <p>有型鋼腳扶手椅<span>by Normann</span></p>
                    </a></li>
                    <li><a href="#">
                        <img src="../assets/img/2020-06-23-5.42.55.jpg" alt="">
                        <p>條理戶外扶手餐椅<span>by HAY</span></p>
                    </a></li>
                </ul>
            </div>
        </div>
      </div>
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
      cart: [],
      swiperOption: {
        direction: 'horizontal',
        speed: 2000,
        loop: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is >= 896px
          897: {
            slidesPerView: 4
          },
          // when window width is >= 668px
          668: {
            slidesPerView: 3
          },
          // when window width is >= 569px
          569: {
            slidesPerView: 2
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  created () {
    this.getCart()
    window.addEventListener('scroll', this.showTitle, true)
  },
  mounted () {
    this.mySwiper.slideTo(1, 1000, true)
  },
  methods: {
    showTitle () {
      const hpTitle = document.querySelectorAll('.hp-title')
      hpTitle.forEach(item => {
        if ((item.parentNode.offsetTop + 50) < (window.scrollY + window.innerHeight)) {
          item.style.opacity = 1
          item.style.transform = 'translateY(0)'
          item.classList.add('show')
        }
      })
    },
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
