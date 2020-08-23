<template>
  <div class="table-wrap" :class="{ 'show': shoppingcartopen }">
    <div>
      <table class="shopping-table" v-if="totalprice !== 0">
        <tr class="table-title">
          <th class="pic"></th>
          <th width="30%">品名</th>
          <th width="20%">售價</th>
          <th width="28%">數量</th>
          <th width="5%"></th>
        </tr>
        <tr v-for="item in shoppingcart" :key="item.product.id + 'shopping'">
          <td class="pic">
            <img :src="item.product.imageUrl[0]" alt />
          </td>
          <td>{{ item.product.title }}</td>
          <td>NT$ {{ item.product.price | thousands }}</td>
          <td>
            <form class="select_qty">
              <div class="input-group">
                <button
                  type="button"
                  class="decrease-btn"
                  @click="quantityUpdate(item.product.id, item.quantity - 1)"
                  :disabled="item.quantity === 0"
                >
                  <i class="fa fa-minus"></i>
                </button>
                <input
                  type="number"
                  class="product-number"
                  :value="item.quantity"
                  @keyup.enter="quantityUpdate(item.product.id, $event.target.value)"
                  onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                />
                <button
                  type="button"
                  class="add-btn"
                  @click="quantityUpdate(item.product.id, item.quantity + 1)"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </form>
          </td>
          <td class="delete" @click="deleteProduct(item.product.id)">
            <i class="fas fa-times"></i>
          </td>
        </tr>
      </table>
      <div class="shopping-table-small">
        <div class="title" v-if="totalprice !== 0">購物車商品</div>
        <div class="products" v-for="item in shoppingcart" :key="item.product.id + 'shopping-small'">
          <img :src="item.product.imageUrl[0]" alt />
          <div class="info">
            <div class="item-title">
              <p>{{ item.product.title }}</p>
              <div class="delete" @click="deleteProduct(item.product.id)">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="item-price">
              <p>NT$ {{ item.product.price | thousands }}</p>
              <form class="select_qty">
                <div class="input-group">
                  <button
                    type="button"
                    class="decrease-btn"
                    @click="quantityUpdate(item.product.id, item.quantity - 1)"
                    :disabled="item.quantity === 0"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    class="product-number"
                    :value="item.quantity"
                    @keyup.enter="quantityUpdate(item.product.id, $event.target.value)"
                    onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
                  />
                  <button
                    type="button"
                    class="add-btn"
                    @click="quantityUpdate(item.product.id, item.quantity + 1)"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p class="no-product" v-if="totalprice == 0">您的購物車是空的</p>
      <div class="totalprice" v-if="totalprice !== 0"><span>總價</span> NT$ {{ totalprice | thousands }}</div>
      <div @click="shoppingCartClose()">
        <router-link v-if="shoppingcart.length" to="/cart" class="btn">訂單結帳</router-link>
        <router-link v-else to="/products/All-Products" class="btn">繼續購物</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shoppingcart', 'shoppingcartopen', 'totalprice'],
  methods: {
    deleteProduct (id) {
      this.$emit('deleteproduct', id)
    },
    quantityUpdate (id, num) {
      this.$emit('qtyupdate', id, num)
    },
    shoppingCartClose () {
      this.$emit('shoppingcartclose')
    }
  }
}
</script>
