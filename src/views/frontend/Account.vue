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
    <div class="content content-account">
      <div class="form-wrap">
        <ul>
          <li>
            <a href="#" class="signup-btn" :class="{ 'show': showSignup }" @click.prevent="showSignup = true">註冊會員</a>
          </li>
          <li>
            <a href="#" class="login-btn" :class="{ 'show': !showSignup }" @click.prevent="showSignup = false">會員登入</a>
          </li>
        </ul>
        <validation-observer v-slot="{ invalid }">
          <form class="signup" :class="{ 'show': showSignup }">
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors }">
                <label for="name">
                  姓名
                  <span>*</span>
                </label>
                <input type="text" id="name" name="姓名" v-model="form.name" />
                <p>{{ errors[0] }}</p>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required|email" v-slot="{ errors }">
                <label for="email">
                  電子信箱
                  <span>*</span>
                </label>
                <input type="email" id="email" name="電子信箱" v-model="form.email" />
                <p>{{ errors[0] }}</p>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required|min:8" v-slot="{ errors }">
                <label for="password">
                  密碼
                  <span>*</span>
                </label>
                <input type="password" id="password" name="密碼" v-model="form.password" />
                <p>{{ errors[0] }}</p>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="payment">性別</label>
              <select name="gender" id>
                <option value selected disabled>請選擇</option>
                <option value="male">男</option>
                <option value="female">女</option>
                <option value="other">不透露</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date">生日</label>
              <input
                type="text"
                onfocus="(this.type='date')"
                id="date"
                name="生日"
                v-model="form.birth"
              />
            </div>
            <div class="agree-check">
              <validation-provider :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
                <label class="container" for="agree">
                  <input type="checkbox" id="agree" v-model="form.check" name="同意條款" />
                  <span class="checkmark"></span>
                  <p>
                    我同意
                    <a href="#">服務條款及隱私政策</a>
                  </p>
                  <p class="error">{{ errors[0] }}</p>
                </label>
              </validation-provider>
            </div>
            <button type="submit" class="submit-btn" :disabled="invalid" :class="{ 'disabled': invalid }">加入會員</button>
          </form>
        </validation-observer>
        <form class="login" :class="{ 'show': !showSignup }">
          <div class="form-group">
            <label for="email-login">帳號（電子信箱）</label>
            <input type="email" id="email-login" />
          </div>
          <div class="form-group">
            <label for="password-login">密碼</label>
            <input type="password" id="password-login" />
            <a href="#">忘記密碼</a>
          </div>
          <button type="button">登入</button>
        </form>
      </div>
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
      showSignup: true,
      form: {
        name: '',
        email: '',
        password: '',
        birth: '',
        check: false
      },
      router: ''
    }
  },
  created () {
    this.router = this.$router.history.current.name
  }
}
</script>
