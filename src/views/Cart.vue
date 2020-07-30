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
        <div class="content content-cart">
            <h3>CHECK OUT</h3>
            <ul class="step">
                <li>
                    <span>1</span>
                    <p>購物車</p>
                    <div class="bar bar-one" :class="{ 'focus': page === 1 }"></div>
                </li>
                <li>
                    <span>2</span>
                    <p>填寫資料</p>
                    <div class="bar bar-two" :class="{ 'focus': page === 2 }"></div>
                </li>
                <li>
                    <span>3</span>
                    <p>訂單確認</p>
                    <div class="bar bar-three" :class="{ 'focus': page === 3 }"></div>
                </li>
            </ul>
            <div class="step-one" :class="{ 'show': page === 1 }">
                <table class="checkout-table">
                    <tr class="table-title">
                        <th width="13%"></th>
                        <th width="20%">品名</th>
                        <th width="10%">單位</th>
                        <th width="15%">售價</th>
                        <th width="19%">數量</th>
                        <th width="15%">小計</th>
                        <th width="8%"></th>
                    </tr>
                    <tr v-for="item in cart" :key="item.product.id + 'cart'">
                        <td><img :src="item.product.imageUrl[0]" alt=""></td>
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.product.unit }}</td>
                        <td>NT${{ item.product.price | thousands }}</td>
                        <td>
                            <form class="select_qty">
                                <div class="input-group">
                                    <button type="button" class="decrease-btn" @click="qtyUpdate(item.product.id, item.quantity - 1)"
                                        :disabled="item.quantity === 0">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <input type="number" class="product-number" :value="item.quantity"
                                        @input="qtyUpdate(item.product.id, $event.target.value)">
                                    <button type="button" class="add-btn" @click="qtyUpdate(item.product.id, item.quantity + 1)">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </form>
                        </td>
                        <td>NT${{ item.product.price * item.quantity | thousands }}</td>
                        <td class="delete" @click="deleteCartItem(item.product.id)"><i class="fas fa-times"></i></td>
                    </tr>
                </table>
                <div class="cart-select-wrap">
                    <div class="cart-select">
                        <h4>選擇送貨及付款方式</h4>
                        <div class="input-wrap">
                                <label for="delivery-place">送貨地點</label>
                                <select id="delivery-place" ref="pay">
                                    <option value="" selected disabled>台灣</option>
                                </select>
                                <label for="delivery-method">送貨方式</label>
                                <select id="delivery-method">
                                    <option value="" selected disabled>宅配到府</option>
                                </select>
                                <span>1. 預購商品會因不同品牌有不同的等待期，請您耐心等候。</span>
                                <span>2. 提交訂單後，我們會寄送一封確認訂單的 E-mail 到您指定的電子郵件信箱中，再次確認本次訂購內容、金額、付款方式等項目。</span>
                        </div>
                    </div>
                    <div class="sum-check">
                        <h4>訂單資訊</h4>
                        <div class="sum-wrap">
                            <div class="product-sum">
                                <p>小計：</p>
                                <p>NT$ {{ totalPrice | thousands }}</p>
                            </div>
                            <div class="deliver-sum">
                                <p>運費：</p>
                                <p>NT$ 350</p>
                            </div>
                            <div class="sale-price" :class="{ 'delete': totalPrice < 10000 }">
                                <p>優惠促銷：滿一萬免運</p>
                                <p v-if="totalPrice >= 10000">-NT$ 350</p>
                            </div>
                            <div class="all-sum">
                                <p>總金額</p>
                                <p>NT$ {{ totalPrice + deliveryFee | thousands }}</p>
                            </div>
                            <button type="button" class="checkout" @click="page = 2">前往結帳</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step-two" :class="{ 'show': page === 2 }">
                <div class="form-wrap">
                    <h4>顧客資料</h4>
                    <validation-observer v-slot="{ invalid }">
                        <form @submit.prevent="createOrder()">
                            <div class="input-wrap">
                                <div class="form-group">
                                    <validation-provider rules="required" v-slot="{ errors }">
                                        <label for="reciever-name">收件人姓名 <span>*</span></label>
                                        <input type="text" id="reciever-name" name="收件人姓名" v-model="form.name">
                                        <p>{{ errors[0] }}</p>
                                    </validation-provider>
                                </div>
                                <div class="form-group">
                                    <validation-provider rules="required|email" v-slot="{ errors }">
                                        <label for="email">電子信箱 <span>*</span></label>
                                        <input type="email" id="email" name="電子信箱" v-model="form.email">
                                        <p>{{ errors[0] }}</p>
                                    </validation-provider>
                                </div>
                                <div class="form-group">
                                    <validation-provider rules="required|min:8" v-slot="{ errors }">
                                        <label for="reciever-tel">收件人電話 <span>*</span></label>
                                        <input type="tel" id="reciever-tel" name="收件人電話" v-model="form.tel">
                                        <p>{{ errors[0] }}</p>
                                    </validation-provider>
                                </div>
                                <div class="form-group">
                                    <validation-provider rules="required" v-slot="{ errors }">
                                        <label for="address">地址 <span>*</span></label>
                                        <input type="text" id="address" name="地址" v-model="form.address">
                                        <p>{{ errors[0] }}</p>
                                    </validation-provider>
                                </div>
                            </div>
                            <div class="input-wrap">
                                <div class="form-group">
                                    <label for="payment">付款方式</label>
                                    <select id="payment" v-model="form.payment">
                                        <option value="" selected disabled>請選擇</option>
                                        <option value="WebATM">WebATM</option>
                                        <option value="ATM">ATM</option>
                                        <option value="Barcode">Barcode</option>
                                        <option value="Credit">Credit</option>
                                        <option value="ApplePay">ApplePay</option>
                                        <option value="GooglePay">GooglePay</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="remark">訂單備註</label>
                                    <textarea id="remark" placeholder="有什麼想告訴我們的嗎？"></textarea>
                                </div>
                                <button type="submit" class="submit-btn" @click="page = 3" :disabled="invalid">提交訂單</button>
                            </div>
                        </form>
                    </validation-observer>
                </div>
                <div class="btns">
                    <a href="cart.html" class="back-btn" @click.prevent="page = 1">← 返回購物車</a>
                </div>
            </div>
            <div class="step-three" :class="{ 'show': page === 3 }">
                <h4>謝謝您的訂單</h4>
                <a href="#">訂單查詢 →</a>
            </div>
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
      cart: [],
      totalPrice: 0,
      deliveryFee: 350,
      email: '',
      page: 1,
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: ''
      }
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
