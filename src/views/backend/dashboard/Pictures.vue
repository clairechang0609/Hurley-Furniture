<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="picture">
      <table>
        <tr class="table-title">
          <th width="50%">圖片縮圖</th>
          <th width="50%">刪除</th>
        </tr>
        <tr v-for="picture in pictures" :key="picture.id">
          <td>
            <img :src="picture.path" alt="">
          </td>
          <td>
            <button class="btn-margin" type="button" @click="openModal(picture)">刪除</button>
          </td>
        </tr>
      </table>
      <div class="delete-alert" :class="{ 'show': deleteShow }">
        <h5>刪除資料</h5>
        <p>是否刪除該筆資料 (刪除後將無法恢復)。</p>
        <div class="cancel-btns">
          <button class="btn-margin" type="button" @click="cancelDelete()">取消</button>
          <button class="btn-margin" type="button" @click="deletePic()">確認</button>
        </div>
      </div>
    </div>
    <div class="mask" :class="{ 'open': shadowOpen }"></div>
    <div is="pagination" :pages="pagination" @changepage="getPics"></div>
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
      pictures: {},
      editPicture: {},
      isLoading: false,
      pagination: {},
      shadowOpen: false,
      deleteShow: false
    }
  },
  created () {
    this.getPics()
  },
  methods: {
    getPics (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http.get(url)
        .then(response => {
          this.pictures = response.data.data
          this.pagination = response.data.meta.pagination
          this.isLoading = false
        })
    },
    openModal (item) {
      this.editPicture = { ...item }
      this.deleteShow = true
      this.shadowOpen = true
    },
    deletePic () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.editPicture.id}`
      this.$http.delete(url)
        .then(response => {
          this.getPics()
          this.isLoading = false
        })
      this.deleteShow = false
      this.shadowOpen = false
    },
    cancelDelete () {
      this.deleteShow = false
      this.shadowOpen = false
      this.editProduct = { options: {}, imageUrl: [] }
    }
  }
}
</script>
