<template>
  <div is="swiper" ref="mySwiper" class="sale__content swiper-container" :options="swiperOption">
    <div class="swiper-slide" is="swiper-slide">
      <router-link :to="`/product/4QY1nmbEf3w4b7MUuMS0ywA2ukuAn7U8iZGJjODEk6B54DJDpmDXNi5mYyuI4VQe`">
        <div class="sale-pic pic-01"></div>
        <div class="product-name">
            <h5>夜巡桌燈 by MENU</h5>
            <p>NT$8,500<span class="sale-icon">sale</span></p>
            <div class="orign">NT$10,000</div>
        </div>
      </router-link>
    </div>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-02"></div>
        <div class="product-name">
            <h5>花生鋼腳單椅 by normann</h5>
            <p>NT$23,800<span class="sale-icon">sale</span></p>
            <div class="orign">NT$29,800</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-03"></div>
        <div class="product-name">
            <h5>包圍咖啡桌(大) by Muuto</h5>
            <p>NT$31,800<span class="sale-icon">sale</span></p>
            <div class="orign">NT$35,800</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-04"></div>
        <div class="product-name">
            <h5>原型沙發-兩人座 by Muuto</h5>
            <p>NT$140,100<span class="sale-icon">sale</span></p>
            <div class="orign">NT$150,900</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-05"></div>
        <div class="product-name">
            <h5>浮光吊燈 by Muuto</h5>
            <p>NT$15,500 up<span class="sale-icon">sale</span></p>
            <div class="orign">NT$16,900 up</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-06"></div>
        <div class="product-name">
            <h5>木纖木腳休閒椅 by Muuto</h5>
            <p>NT$31,800<span class="sale-icon">sale</span></p>
            <div class="orign">NT$33,800</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-07"></div>
        <div class="product-name">
            <h5>速寫椅凳 by FRAMA</h5>
            <p>NT$24,800<span class="sale-icon">sale</span></p>
            <div class="orign">NT$28,800</div>
        </div>
    </a><a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-08"></div>
        <div class="product-name">
            <h5>層列咖啡桌 by Umbra Shift</h5>
            <p>NT$21,500<span class="sale-icon">sale</span></p>
            <div class="orign">NT$22,900</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-09"></div>
        <div class="product-name">
            <h5>層列邊桌 by Umbra Shift</h5>
            <p>NT$15,000<span class="sale-icon">sale</span></p>
            <div class="orign">NT$16,800</div>
        </div>
    </a>
    <a href="#" class="swiper-slide" is="swiper-slide">
        <div class="sale-pic pic-10"></div>
        <div class="product-name">
            <h5>Pacha 波恰休閒椅 by Gubi</h5>
            <p>NT$98,800<span class="sale-icon">sale</span></p>
            <div class="orign">NT$101,800</div>
        </div>
    </a>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        speed: 2000,
        loop: true,
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
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(1, 2000, true)
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/sass/all.sass'
</style>
