<template>
  <div is="swiper" ref="mySwiper" class="sale__content swiper-container" :options="swiperOption">
    <div class="swiper-slide" is="swiper-slide" v-for="sale in sales" :key="'sale' + sale.id">
      <router-link :to="`/product/${sale.id}`" target="_blank">
        <div class="sale-pic">
          <img :src="`${sale.img[0]}`" alt="">
          <img :src="`${sale.img[1]}`" alt="">
        </div>
        <div class="product-name">
          <h5>{{ sale.title }}</h5>
          <p>NT${{ sale.price | thousands }}<span class="sale-icon">sale</span></p>
          <div class="orign">NT${{ sale.origin_price | thousands }}</div>
        </div>
      </router-link>
    </div>
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
      },
      sales: [
        {
          id: '4QY1nmbEf3w4b7MUuMS0ywA2ukuAn7U8iZGJjODEk6B54DJDpmDXNi5mYyuI4VQe',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lKeLgLb5MIwauBtoV0O1fm3DVZuqg1iMf05XOZha3yUAIvg31zowboD4nmnIepZJz2sAfgD2PfhCrYcYkcHn2xmrRkx8ZeuX6L3VJq4a7kmD3JgpEaX6g0rhFran51NJ.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/0XrIsufyTK5bRa5tJm05V5lICieiGY1GNpQq5Msb9f5lkmqqSaIqpfI7O7IDIHZec1YOSkRh9A7Q9jaCmwRS1dVAsYM0jmLrXjtyhmJKv271Em6R4TybAdoyACeuvyIH.png'
          ],
          title: '夜巡桌燈',
          price: 8500,
          origin_price: 10000
        },
        {
          id: '4WkmzLjWMgfQs45FTAQ3ovFFU3kW3j5y45Fu7GbBKJWJZ0CSbVm3mOe1c92yaXan',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UDCGegfiTcwdGtGRbXbyEOR1x0QYYdyvyLTjJMwo5xo0HitvS6ddfzbeurI63XrRvS5EnDkTPFE6wLK9pSpei9BjLuoI7ZAQQcxLSehqHmeZsJwHOsD2CmiAmKBuZxU2.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/3kLxeiFbh7pWiVW15wdjFf5yXAQUsw6HUwx7jGQgEkJuO02GuidCtijOqXl0Uwk9xUT4Sr0UclFkvR04M9dr0v0U1giVXaI5Xndzgv3hZ41EQ9R8iVL5di6UUAa5AKbN.png'
          ],
          title: '花生全包覆鋼腳單椅',
          price: 23800,
          origin_price: 25800
        },
        {
          id: 'x5X1Rc53uVKdGdr1fMxaSrvhg6oSO0bbVeKmxpHDMpRlx8Gw62jkwxfbexTbbFtL',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/HZMcOk77L64q3ay2K2jj0ah77Nvg3crPiGuhwdfDQgmlJNDsUcNlMHbCqv9Ww2cHcAoqdvrIUuB34ZLmIAK57VQLjyKA1SLydNS6DGpuywGPRv3RvVDIvcsx8thdolCC.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XQafsQMfBDdwlXaDDBT7t73igdRSSaZX8XPgZLQOPGdifRx2SFSKZrsyTdveOjo68PVfjSA80xEaNAQvwBZKo5cuRrfBeuBilSYFI1u5pvvEQODYptuVgencYKCbCHsk.png'
          ],
          title: '包圍咖啡桌',
          price: 29800,
          origin_price: 31800
        },
        {
          id: 'VqUgrIQn2xduyroirqHVwbNEhArvZHFnyMwmdBLm2sgbSrIeJAGJNEIDrpJPHTov',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vykOZbS2HbsT7Rym9N3vyBEUEPYGYfF5ll7EMY4W6Bw4xhXYMIXJ1XDlVFeLzTMToEkTnLPzvI0vy5tqllkBit9AihNXuQzlvv9wmUdmiBKnXxYOdgQLyIXfOmKZ8Ck4.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Y5bRu7BEb8jEWPzInHbMDeYKwNa5deaQy19FMzgWG5yRb71K4ukFUBB0RTKFJC0fAZdV9av2BTMKwY1beWihMpbbymJ4hK1WNpmrAf6ZAD4r9CGCV0blQrbiFkbeHCTx.png'
          ],
          title: '原型雙人沙發',
          price: 140100,
          origin_price: 138000
        },
        {
          id: 'X7KIKvGlTsEY5AJewFJJIfriyEkMFCo5bDo2AO59UsifrJN0NQMe8Loc9W4eIgXQ',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/HXofHl5l7E742fXcXtHxmSt9jASUcjqK0l04TZsIudlO1t4svMJrqLRgq7p13DAdUh2xd0i8JuZsi7c6eO3u878wlUNONABbugFQ3qbLEYLcHpNxAyFv9tputKdZ4hE4.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/6TvWSjMadY6fObd9VdSPQBpwLEHVx3Q82RtUj6ocEAk9fj2gaYmYVJbUqRSOeM9zVx6kXTI78nQgsF71ZqNCeUAWLGQNI8BqAAJCEOd7lg2LSFiOLOLHj58V0Lel3t90.png'
          ],
          title: '封光吊燈',
          price: 10000,
          origin_price: 11900
        },
        {
          id: 'eQoKOCkszCMIRhRN3YAqpBnpMinvTAfzGgSQiKrZCMyhLlk3UR5QSipucPuXboDa',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/k7QLOd1LkjF1Znan5N7nuN9SqzbdrXtZaM11xvmuE8JjmZqHAzfD11yHYwqFtW5aew99cQhgUDtW1u2epfUwuoZzqlxJF4dXqWtau7eVisG6F8SmFLBHJ9d3uEa7lAtc.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4AHGLMmycAH0MxRGvcsEY5dxhKY6HI7b0Dqa3IdHJcaaAX7nDsP4RnXrO4jA91MSwj8iMJy5iQmNCrovUgNaeWDYajqqBB8Qh3uSgHv5P0Mg85RbsOOrySTdDQvJ83SC.png'
          ],
          title: '速寫椅凳',
          price: 24800,
          origin_price: 26800
        },
        {
          id: 'lqfnX0MnUC0f6O9YvSt1FxjgKhP71kU8nQxu0DvzD2WsqDtWTEIVayDM80FehXCm',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UJUDCt3z4gELMrjPd66J265q2gk11xWtorhDf0Ee6xb8dDO2cs3YbCujF75AWetr5zMz9CthAYW6ChVjGpb1yLJ8WDe37gQa7ajgySWSr3Cz0zQiJqJXBO8iA7ijHbgg.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/6Khh5S9lOOaUf57nOHQWIacfKMMQcNGmTA9bucy0m3NkBxwlm9pHWfa76jrnsPmGKcr5hlGfFVsvGAzWr2OwLFab607VVIF1dIHMfwj5Iy0aN7b8Enz6qV5g7n9Xi2q7.png'
          ],
          title: '層列邊桌',
          price: 15000,
          origin_price: 16800
        },
        {
          id: 'aIDl5f2PAskhksJP5n09HF0u0qRnyDpovqxrwjIKE3qf7ozn8QwWeuVI6NLArc8J',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PnEfRj3QrQODQSBxoeRcq37yhSBN9MkTZuDKmguqggQFadsk1tBD3Zj1XeUkS7MiCaw1enHibrHoW3qerIYOrHmt4saA8cUDX9sO5RjqoDaVpQoA22RJYY1bf7Kfp5BQ.png',
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XdIAQzWrYMPcJmovkLpp7Dt3zbCtezzpL9sRpzG4Hmi0N4fnmTAkv2nIHwJKwEo0comvJ58dqJxSFlpPC49fzK9VH8BWLsO2ibX6FjnUZxnBMv8k4scfZSo6KTMGuhfx.png'
          ],
          title: '層列咖啡桌',
          price: 21500,
          origin_price: 22900
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 2000, true)
  }
}
</script>
