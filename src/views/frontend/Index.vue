<template>
  <div class="index">
    <loading :active.sync="isLoading"></loading>
    <div is="navbar" :router='router'></div>
    <div class="header">
      <div class="header__banner-home"></div>
      <ul class="header__main-menu">
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
    <div class="content contents-home">
      <div class="new">
        <div class="hp-title new__title">
            <div class="text">
              <h4>NEW IN<span>2020 夏季限量系列</span></h4>
              <p>夏日來臨，該如何迎接熱情洋溢的季節？<br>除了走出戶外，享受美好陽光浴，家裡也該來轉換風格囉！<br>挑選色彩繽紛傢俱，打造屬於自己的夏季氛圍。</p>
            </div>
            <router-link to="/products/All-Products" class="more-btn">
              <span></span>
              <p>view more</p>
            </router-link>
            <img class="new-item-01"
                src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UejXkVTo79C3PFOi9JQi1jWXnmn7pY5J8lCTspNKduzdXZ5LC3FYZB8gvWvUxkxfspdOuvVU95s0C22uXcFQWUB6KyT18NG6YW8UzW66CdSCwnNUrHMiQ7L0FkkE7yZf.png" alt="">
            <img class="new-item-02"
                src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/V50w1zjWVDHth5tKdxSHoyb5WOZpW5m7Km2UseJQwHVAo13ItIlpWBsegTrI9BRGfTBAT6lMjxjvArgoc1H3TIt5vNsSFVMPjMTDsuEq5UFjXRRQMVpviVdUlYVrQElB.png" alt="">
        </div>
        <ul class="new__content">
            <li>
              <div class="newin">
                <router-link to="/product/3mdy7DjoHSYa2ETWreT5g6sCPKw6qrhAB40sts9Qo2ujEwbdtXa4kpwYydTdiGJt" class="pic01" target="_blank"></router-link>
                <p class="text01">Mags Soft 雙人沙發</p>
              </div>
              <div class="newin">
                <router-link to="/product/EM4RxcnhK6WPbchacRoY9LN38pG6YNUDVrwtfvITZc6seRUKzHGGn66TyRdp9lEj" class="pic02" target="_blank"></router-link>
                <p class="text02">Bonbon 絲光燈罩</p>
              </div>
            </li>
            <li>
              <div class="newin-single">
                <router-link to="/product/BetOTcHKb3YGzlSLxccZdbSuolPylzdgYpJdMZz8dS6dbdiKAUo0NNYDrAKGD079" class="pic03" target="_blank"></router-link>
                <p class="text03">新秩序置物架</p>
              </div>
            </li>
            <li>
              <div class="newin">
                <router-link to="/product/iNX94kXaQ7Sn46rI54ZgWPZKT7eU9PbRGMaFDTMmgBHR7ipx9wS4WIViopNAoc48" class="pic04" target="_blank"></router-link>
                <p class="text04">全包覆高背鋼腳扶手椅</p>
              </div>
              <div class="newin">
                <router-link to="/product/jV8w3CF5ZZPHQOqN69VRfyp0UdCdLvTzcSOWEkksYeI7P4nGyIYGSqHyDg4r0cBp" class="pic05" target="_blank"></router-link>
                <p class="text05">C Line Basic 邊几</p>
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
            <router-link to="/products/Sale" class="more-btn">
              <span></span>
              <p>view more</p>
            </router-link>
            <img class="new-item-03"
              src="https://shoplineimg.com/5cd8dc7015c0710001011ee2/5d5bea50e9b3ee0038a9d219/800x.webp?source_format=jpg"
              alt="">
            <img class="new-item-04"
              src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/d6ipCgdbf5rCfnTNWkN80Efv0DgcB8TGpP9hbBbK67S8xN7AVqSVHtZztneJntWRP8oqd7BqvX7MHjq1OHJk8NAjmP5XltgVtNiAmtkaNGElH3UcvLEfCrRmre8ZNaYX.png"
              alt="">
        </div>
        <div is="swiper"></div>
      </div>
      <div class="selection">
        <div class="hp-title selection__title">
            <div class="text">
              <h4>SELECTION<span>本週精選</span></h4>
              <p>健康的工作和生活平衡就格外重要，<br>趁著美好的夏天踏出戶外，享受不被待辦清單打擾的片刻，<br>你也可以打造自己專屬的愜意小天地。</p>
            </div>
            <router-link to="/products/Chair" class="more-btn">
              <span></span>
              <p>view more</p>
            </router-link>
        </div>
        <div class="selection__content">
            <div class="select-pic"></div>
            <div class="select-product">
              <p>Balcony Inspiration<span>享受戶外美好時光</span></p>
              <ul>
                <li v-for="(selection, key) in selections" :key="'selection' + key">
                  <router-link :to="`/product/${selection.id}`">
                  <img :src="`${selection.pic}`" alt="">
                  <p>{{ selection.name }}<span>{{ selection.brand }}</span></p>
                </router-link></li>
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
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    Navbar,
    Swiper
  },
  data () {
    return {
      openMenu: false,
      isLoading: false,
      selections: [
        {
          id: '245gs6DQBUCDJnwqMGFj7xzCTFxHlILMBj76zL8UqqtITuVBGqKzPnC7CDywdMHL',
          name: '梯形椅凳',
          brand: 'Esaila',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/pTOmv0OnIOtQzwxBGKz5FHtmdwQTEAvZFhxNbykUhxagOeLhb3nKCwfsr1UMqwIdyqBGzqTmFa4I1wmpWosX8Ql3n1jdUfexdUY6gP5KcZZQcTlBBu2NOJh0ie7I4DDE.png'
        },
        {
          id: 'eQoKOCkszCMIRhRN3YAqpBnpMinvTAfzGgSQiKrZCMyhLlk3UR5QSipucPuXboDa',
          name: '速寫椅凳',
          brand: 'FRAMA',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/8uBdWbM2DC0dl3iK31lSxWylWytDqW2n4H9xF1WdqtPlLcLBUKf3GLbpaATgQRSGB7H8ASsTdGevsEGPAV12BnUikQ6DqCx8mgQup2IFLpp8K6IuK2WTrLayAMoCvVqr.png'
        },
        {
          id: '1wilj863g1saV5DbIc6EArqZU1xGfp5i2UF4MqCDF4ezhdIQGW4EkT1U5OOz9mdJ',
          name: '包覆單椅',
          brand: 'Muuto',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/0NlSOW7JUSBHCLtTjhvCnmQpa0J5WtvM06m9qcBaptX1b0XHU6N24Q5HamnTgIHqj0IcwAN3TkdNATrIHQl8ePA4FIZ8RVm25TvjR6qUzWTkO9j8GQiBlxVTZYhW6JTD.png'
        },
        {
          id: '4WkmzLjWMgfQs45FTAQ3ovFFU3kW3j5y45Fu7GbBKJWJZ0CSbVm3mOe1c92yaXan',
          name: '花生全包覆鋼腳單椅',
          brand: 'Normann Copenhagen',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/e6pvWhnqJG7J2MOudnFAOMZDWSQ32L8F1aQHWL6rsH0xOFskZDEXT2HlH5lssTtUtzqVYGS7DnqfjKp5jINUamMfMSOhme2P9VF1cHc8Ujr0VC6XV90vei8QUPWFLYFR.png'
        },
        {
          id: 'eQoKOCkszCMIRhRN3YAqpBnpMinvTAfzGgSQiKrZCMyhLlk3UR5QSipucPuXboDa',
          name: '甲蟲塑面單椅',
          brand: 'GUBI',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NAiPCgIQ0WPd5Xd6NzboH1n89VeVyBU1hb8MixIOXlxbosct2AVV0OfQ8GG3FGw3OAcGgoxZR0DdYAQLpkyJvQB3NvL3ovqyCOKiP6UZwPPPdsXYnYXVHK2BxCoANi2q.png'
        },
        {
          id: 'zciMzn7p64mMcDuYr67b6f2d91tGcaBloYz4L4Uy3szUFBLFDvHoUuG12WCvunoL',
          name: '條理戶外扶手椅',
          brand: 'HAY',
          pic: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/2CTcOBVjyi4VLiKr6xhzytirbFbon29z0P3jn0jdn7JiJ1kwYCT7z5jhMD3JXrVfBt8jfUMeWEZfhzy8W0KXJAkkIMHvRzTRUZ8kXE9wZjqpJH5InlFwxxoIlUeUjxpF.png'
        }
      ],
      router: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.showTitle, true)
    this.router = this.$router.history.current.name
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
    }
  }
}
</script>
