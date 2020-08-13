<template>
  <div>
    <div class="coupon">
      <button type="button" class="add-coupon" @click="openModal('new')">新增優惠券</button>
      <table>
        <tr class="table-title">
          <th width="20%">優惠券名稱</th>
          <th width="17%">折扣碼</th>
          <th width="13%">折扣百分比</th>
          <th width="20%">到期日</th>
          <th width="15%">是否啟用</th>
          <th width="20%">編輯 / 刪除</th>
        </tr>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ coupon.deadline.datetime }}</td>
          <td>
            <label class="container">
              <input type="checkbox" v-model="coupon.enabled" @click="openModal('enabled', coupon), updateCoupon()">
              <span class="checkmark"></span>
              <p>啟用</p>
            </label>
          </td>
          <td class="btn-wrap">
            <button class="btn-margin" type="button" @click="openModal('edit', coupon)">編輯</button>
            <button class="btn-margin" type="button" @click="openModal('delete', coupon)">刪除</button>
          </td>
        </tr>
      </table>
      <div class="form-wrap" :class="{ 'show': formShow }">
        <div class="title-bar">
          <h5>{{ newCoupon?"新增產品":"編輯產品" }}</h5>
          <button type="button" class="close" @click="closeForm()"><i class="fas fa-times"></i></button>
        </div>
        <div class="form">
          <div class="content">
            <div class="input-group">
              <label for="title">優惠券名稱</label>
              <input type="text" id="title" v-model="editCoupon.title" placeholder="請輸入優惠券名稱">
            </div>
            <div class="input-group">
              <label for="code">優惠碼</label>
              <input type="text" id="code" v-model="editCoupon.code" placeholder="請輸入優惠碼">
            </div>
            <div class="input-group">
              <label for="percent">折扣百分比</label>
              <input type="number" id="percent" v-model="editCoupon.percent" placeholder="請輸入折扣百分比">
            </div>
            <div class="input-group">
              <label for="due-date">到期日</label>
              <input type="date" id="due-date" v-model="due_date" placeholder="請輸入單位">
            </div>
            <div class="input-group">
              <label for="due-time">到期時間</label>
              <input type="time" id="due-time" v-model="due_time" step="1" placeholder="請輸入原價">
            </div>
            <div class="checkbox-group">
              <label for="enabled">是否啟用</label>
              <input type="checkbox" id="enabled" v-model="editCoupon.enabled">
            </div>
          </div>
          <div class="submit-btns">
            <button class="btn-margin" type="button" @click="closeForm()">取消</button>
            <button class="btn-margin" type="button" @click="updateCoupon()">確認</button>
          </div>
        </div>
      </div>
      <div class="delete-alert" :class="{ 'show': deleteShow }">
        <h5>刪除優惠券</h5>
        <p>是否刪除 <span>{{ editCoupon.title }}優惠券</span> (刪除後將無法恢復)。</p>
        <div class="cancel-btns">
          <button class="btn-margin" type="button" @click="cancelDelete()">取消</button>
          <button class="btn-margin" type="button" @click="deleteCoupon()">確認</button>
        </div>
      </div>
    </div>
    <loading :active.sync="isLoading"></loading>
    <div class="mask" :class="{ 'open': shadowOpen }"></div>
    <div is="pagination" :pages="pagination" @changepage="getCoupons"></div>
  </div>
</template>

<script>
import pagination from '../../../components/Pagination.vue'

export default {
  components: {
    pagination
  },
  data () {
    return {
      coupons: [],
      editCoupon: {
        deadline_at: ''
      },
      pagination: {},
      newCoupon: true,
      token: '',
      shadowOpen: false,
      formShow: false,
      deleteShow: false,
      isLoading: false,
      due_date: '',
      due_time: ''
    }
  },
  created () {
    this.getCoupons()
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.coupons = response.data.data
          this.pagination = response.data.meta.pagination
        })
        .catch(() => {})
    },
    openModal (mode, item) {
      this.due_date = ''
      this.due_time = ''
      switch (mode) {
        case 'new':
          this.newCoupon = true
          this.editCoupon = { deadline_at: '' }
          this.formShow = true
          this.shadowOpen = true
          break
        case 'edit': {
          this.newCoupon = false
          this.editCoupon = Object.assign({}, item)
          this.formShow = true
          this.shadowOpen = true

          const deadline = this.editCoupon.deadline.datetime.split(' ')
          this.due_date = deadline[0]
          this.due_time = deadline[1]
          break
        }
        case 'enabled':
          this.newCoupon = false
          this.editCoupon = Object.assign({}, item)
          this.editCoupon.enabled = !this.editCoupon.enabled
          break
        case 'delete':
          this.editCoupon = Object.assign({}, item)
          this.deleteShow = true
          this.shadowOpen = true
      }
    },
    updateCoupon () {
      this.isLoading = true
      let url = ''
      let method = ''

      if (this.newCoupon) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`
        method = 'post'
      } else {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.editCoupon.id}`
        method = 'patch'
      }

      this.editCoupon.deadline_at = `${this.due_date} ${this.due_time}`

      this.$http[method](url, this.editCoupon)
        .then(() => {
          this.isLoading = false
          this.getCoupons()
        })
        .catch(() => {})

      this.formShow = false
      this.shadowOpen = false
    },
    deleteCoupon () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.editProduct.id}`
      this.$http.delete(url)
        .then(response => {
          this.isLoading = false
          this.getCoupons()
        })
        .catch(() => {})

      this.deleteShow = false
      this.shadowOpen = false
    },
    closeForm () {
      this.formShow = false
      this.shadowOpen = false
    },
    cancelDelete () {
      this.deleteShow = false
      this.shadowOpen = false
    }
  }
}
</script>
