<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="order">
      <table>
        <tr class="table-title">
          <th width="20%">購買時間</th>
          <th width="25%">品項</th>
          <th width="18%">金額</th>
          <th width="17%">付款方式</th>
          <th width="20%">是否付款</th>
        </tr>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.created.datetime }}</td>
          <td class="title">
            <ul>
              <li v-for="(product, i) in order.products" :key="order.id + i">
                {{ product.product.title }} * {{ product.quantity }}
              </li>
            </ul>
          </td>
          <td>NT${{ order.amount | thousands }}</td>
          <td>{{ order.payment }}</td>
          <td>
            <label class="container">
              <input type="checkbox" v-model="order.paid" @click="editPaid(order)">
              <span class="checkmark"></span>
              <p>付款</p>
            </label>
          </td>
        </tr>
      </table>
    </div>
    <loading :active.sync="isLoading"></loading>
    <div is="pagination" :pages="pagination" @changepage="getOrders"></div>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'

export default {
  components: {
    pagination
  },
  data () {
    return {
      orders: {},
      editOrder: {},
      isLoading: false,
      pagination: {}
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http.get(url)
        .then(response => {
          this.orders = response.data.data
          this.pagination = response.data.meta.pagination
          this.isLoading = false
        })
    },
    editPaid (item) {
      this.editOrder = { ...item }
      this.editOrder.paid = !this.editOrder.paid
      this.updateOrder()
    },
    updateOrder () {
      this.isLoading = true
      let url = ''
      if (this.editOrder.paid) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${this.editOrder.id}/paid`
      } else {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${this.editOrder.id}/unpaid`
      }
      this.$http.patch(url)
        .then(() => {
          this.getOrders()
          this.isLoading = false
        })
      this.editOrder = {}
    }
  }
}
</script>
