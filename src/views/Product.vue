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
              <a href="#">
                <span>HOME</span>
                <span>首頁</span>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="getProducts('All'), openMainMenu = !openMainMenu">
                <span>ALL PRODUCTS</span>
                <span>所有商品</span>
              </a>
            </li>
            <li class="top__all-product">
              <a href="#" @click.prevent="openMenu = !openMenu">
                <span>PRODUCT CATEGORY ▸</span>
                <span>分類單品 ▸</span>
              </a>
              <ul class="top__all-product-list" :class="{ 'show': openMenu }">
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Sofa'), openMainMenu = !openMainMenu"
                  >Sofa</a>
                </li>
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Chair'), openMainMenu = !openMainMenu"
                  >Chair</a>
                </li>
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Table'), openMainMenu = !openMainMenu"
                  >Table</a>
                </li>
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Cabinet'), openMainMenu = !openMainMenu"
                  >Cabinet</a>
                </li>
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Side Table'), openMainMenu = !openMainMenu"
                  >Side Table</a>
                </li>
                <li>
                  <a
                    href="index.html"
                    @click.prevent="getProducts('Lighting'), openMainMenu = !openMainMenu"
                  >Lighting</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="index.html" @click.prevent="getProducts('Sale'), openMainMenu = !openMainMenu">
                <span>SALE</span>
                <span>限時特價</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>SHIPPING GUIDE</span>
                <span>運送須知</span>
              </a>
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
      <div class="content contents-product">
          <div class="product-main">
              <div class="pics">
                  <img class="show-pic" :src="selectPic" alt="">
                  <div class="other-pic">
                      <img v-for="(img, key) in showProduct.imageUrl" :key="showProduct.id + key" :src="img" @click="selectPic = img">
                  </div>
              </div>
              <div class="discription">
                  <h3 class="title">{{ showProduct.title }} <span>design by {{ brand }}</span></h3>
                  <p class="sale-price">NT${{ price | thousands }}<span class="sale-icon"
                          v-if="showProduct.price !== showProduct.origin_price">sale</span></p>
                  <p class="origin-price" v-if="showProduct.price !== showProduct.origin_price">NT${{ showProduct.origin_price | thousands }}</p>
                  <p class="delivery-sale"><span></span> 全店購物滿 NT$10,000 全台免運</p>
                  <form class="select_qty">
                      <div class="input-group">
                          <button type="button" class="decrease-btn" @click="productQty = (productQty - 1)"
                              :disabled="productQty === 0">
                              <i class="fa fa-minus"></i>
                          </button>
                          <input type="number" class="product-number" :value="productQty"
                              @input="productQty = parseInt($event.target.value)">
                          <button type="button" class="add-btn" @click="productQty = (productQty + 1)">
                              <i class="fa fa-plus"></i>
                          </button>
                      </div>
                  </form>
                  <button class="add-cart" type="button" @click.prevent="addToCart(showProduct.id, productQty)">加入購物車</button>
              </div>
          </div>
          <div class="product-detail">
              <div class="description">
                  <h5><span>產品描述</span></h5>
                  <p>{{ showProduct.description }}</p>
              </div>
              <div class="content">
                  <h5><span>規格說明</span></h5>
                  <p>{{ showProduct.content }}</p>
              </div>
          </div>
          <div class="related">
              <h5><span>相關產品</span></h5>
              <ul class="items">
                  <li class="item" v-for="product in relatedProducts" :key="product.id" @click="getSingleProduct(), getRelatedProducts()">
                      <router-link :to="`/product/${product.id}`">
                          <div class="card-img" :style="`background-image: url(${product.imageUrl[0]})`">
                              <button type="button" class="add-btn" @click.prevent="addToCart(product.id, 1)">Add to Cart</button>
                          </div>
                          <div class="card-text">
                              <h5 class="card-title">{{ product.title }}</h5>
                              <p class="sale-price">NT${{ product.price | thousands }}<span class="sale-icon"
                                      v-if="product.price !== product.origin_price">sale</span></p>
                              <p class="origin-price" v-if="product.price !== product.origin_price">NT${{ product.origin_price | thousands }}</p>
                          </div>
                      </router-link>
                  </li>
              </ul>
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
      products: [],
      showProduct: [],
      brand: '',
      price: 0,
      selectPic: '',
      relatedProducts: [],
      category: '',
      openMainMenu: false,
      openMenu: false,
      opensearch: false,
      isLoading: false,
      shoppingCartOpen: false,
      cart: {},
      productQty: 1
    }
  },
  created () {
    this.getCart()
    this.getSingleProduct()
    this.getRelatedProducts()

    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then(response => {
        this.isLoading = false
        this.products = response.data.data
      })
      .catch(error => {
        this.isLoading = false
        console.log(error)
      })
  },
  methods: {
    getRelatedProducts () {
      this.relatedProducts = []
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.isLoading = true
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.products.forEach(product => {
            if (product.category === response.data.data.category && product.id !== id) {
              this.relatedProducts.push(product)
            }
          })
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    getSingleProduct () {
      const id = this.$route.params.id
      this.showProduct = []
      this.brand = ''
      this.price = 0
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.isLoading = true
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.showProduct = response.data.data
          this.selectPic = this.showProduct.imageUrl[4]
          this.brand = this.showProduct.options.brand
          this.price = this.showProduct.price
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.cart = response.data.data
          console.log(this.cart)
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
    addToCart (id, num) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: num
      }
      const judgment = this.cart.some(item => {
        if (item.product.id === id) {
          this.qtyUpdate(id, item.quantity + num)
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
