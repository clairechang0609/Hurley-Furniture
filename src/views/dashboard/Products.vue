<template>
  <div>
    <div class="product">
      <button type="button" class="add-product" @click="openModal('new')">新增產品</button>
        <table>
          <tr class="table-title">
            <th width="10%">類別</th>
            <th width="13%">圖片</th>
            <th width="20%">品名</th>
            <th width="10%">品牌</th>
            <th width="11%">原價</th>
            <th width="11%">售價</th>
            <th width="10%">上架</th>
            <th width="15%">編輯 / 刪除</th>
          </tr>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td><img :src="item.imageUrl[0]" alt=""></td>
            <td>{{ item.title }}</td>
            <td>{{ item.options.brand }}</td>
            <td>NT$ {{ item.origin_price | thousands }}</td>
            <td>NT$ {{ item.price | thousands }}</td>
            <td>
              <label class="container">
                <input type="checkbox" v-model="item.enabled" @click="openModal('enabled', item), updateProduct()" id="showIt">
                <span class="checkmark"></span>
                <p>上架</p>
              </label>
            </td>
            <td class="btn-wrap">
              <button class="btn-margin" type="button" @click="openModal('edit', item)">編輯</button>
              <button class="btn-margin" type="button" @click="openModal('delete', item)">刪除</button>
            </td>
          </tr>
        </table>
        <div class="form-wrap" :class="{ 'show': formShow }">
          <div class="title-bar">
            <h5>{{ newProduct?"新增產品":"編輯產品" }}</h5>
            <button type="button" class="close" @click="closeForm()"><i class="fas fa-times"></i></button>
          </div>
          <div class="form">
            <div class="pic">
              <div class="input-group" v-for="i in 5" :key="'img_' + i">
                <label :for="'img' + i">產品圖片</label>
                <input type="text" :id="'img' + i" v-model="editProduct.imageUrl[i - 1]" placeholder="請輸入圖片連結">
              </div>
              <div class="input-group">
                <label for="customPic">上傳圖片</label>
                <input type="file" id="customPic" @change="uploadPic()">
              </div>
              <img :src="editProduct.imageUrl[0]" alt="">
            </div>
            <div class="content">
              <div class="input-group">
                <label for="title">品名</label>
                <input type="text" id="title" v-model="editProduct.title" placeholder="請輸入品名">
              </div>
              <div class="input-group">
                <label for="brand">品牌</label>
                <input type="text" id="brand" v-model="editProduct.options.brand" placeholder="請輸入品牌">
              </div>
              <div class="input-group half">
                <label for="category">分類</label>
                <input type="text" id="category" v-model="editProduct.category" placeholder="請輸入類別">
              </div>
              <div class="input-group half">
                <label for="unit">單位</label>
                <input type="text" id="unit" v-model="editProduct.unit" placeholder="請輸入單位">
              </div>
              <div class="input-group half">
                <label for="origin_price">原價</label>
                <input type="text" id="origin_price" v-model="editProduct.origin_price" placeholder="請輸入原價">
              </div>
              <div class="input-group half">
                <label for="price">售價</label>
                <input type="text" id="price" v-model="editProduct.price" placeholder="請輸入售價">
              </div>
              <div class="input-group">
                <label for="description">產品描述</label>
                <textarea type="text" id="description" v-model="editProduct.description"
                  placeholder="請輸入產品描述"></textarea>
              </div>
              <div class="input-group">
                <label for="content">說明內容</label>
                <div is="vue-editor" id="content" v-model="editProduct.content" placeholder="請輸入說明內容"></div>
              </div>
              <div class="checkbox-group">
                <label for="enabled">是否上架</label>
                <input type="checkbox" id="enabled" v-model="editProduct.enabled">
              </div>
            </div>
            <div class="submit-btns">
              <button class="btn-margin" type="button" @click="closeForm()">取消</button>
              <button class="btn-margin" type="button" @click="updateProduct()">確認</button>
            </div>
          </div>
        </div>
        <div class="delete-alert" :class="{ 'show': deleteShow }">
          <h5>刪除產品</h5>
          <p>是否刪除 <span>{{ editProduct.title }}</span> (刪除後將無法恢復)。</p>
          <div class="cancel-btns">
            <button class="btn-margin" type="button" @click="cancelDelete()">取消</button>
            <button class="btn-margin" type="button" @click="deleteProduct()">確認</button>
          </div>
        </div>
    </div>
    <loading :active.sync="isLoading"></loading>
    <div class="mask" :class="{ 'open': shadowOpen }"></div>
    <div is="pagination" :pages="pagination" @changepage="getProducts"></div>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core.js'

export default {
  components: {
    pagination,
    VueEditor
  },
  data () {
    return {
      products: [],
      editProduct: {
        options: {},
        imageUrl: []
      },
      pagination: {},
      newProduct: true,
      token: '',
      shadowOpen: false,
      formShow: false,
      deleteShow: false,
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.products = response.data.data
          this.pagination = response.data.meta.pagination
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    openModal (mode, item) {
      switch (mode) {
        case 'new':
          this.newProduct = true
          this.editProduct = {
            options: {
              brand: ''
            },
            imageUrl: []
          }
          this.formShow = true
          this.shadowOpen = true
          break
        case 'edit':
          this.newProduct = false
          this.editProduct = JSON.parse(JSON.stringify(item))
          this.getSingleProduct(this.editProduct.id)
          this.formShow = true
          this.shadowOpen = true
          break
        case 'enabled':
          this.newProduct = false
          this.editProduct = Object.assign({}, item)
          this.editProduct.enabled = !this.editProduct.enabled
          break
        case 'delete':
          this.editProduct = Object.assign({}, item)
          this.deleteShow = true
          this.shadowOpen = true
      }
    },
    getSingleProduct (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http.get(url)
        .then(response => {
          this.isLoading = false
          this.editProduct = response.data.data
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    updateProduct () {
      this.isLoading = true
      let url = ''
      let method = ''

      if (this.newProduct) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
        method = 'post'
      } else {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.editProduct.id}`
        method = 'patch'
      }

      this.$http[method](url, this.editProduct)
        .then(() => {
          this.isLoading = false
          this.getProducts()
        })
        .catch((error) => {
          this.isLoading = false
          console.log(error)
        })

      this.editProduct = { options: {}, imageUrl: [] }
      this.formShow = false
      this.shadowOpen = false
    },
    deleteProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.editProduct.id}`

      this.$http.delete(url)
        .then(response => {
          this.isLoading = false
          this.getProducts()
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })

      this.editProduct = { options: {}, imageUrl: [] }
      this.deleteShow = false
      this.shadowOpen = false
    },
    closeForm () {
      this.formShow = false
      this.shadowOpen = false
      this.editProduct = { options: {}, imageUrl: [] }
    },
    cancelDelete () {
      this.deleteShow = false
      this.shadowOpen = false
      this.editProduct = { options: {}, imageUrl: [] }
    },
    uploadPic () {
      this.isLoading = true
      const uploadfile = document.querySelector('#customPic').files[0]

      const formData = new FormData()
      formData.append('file', uploadfile)

      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.$http.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          this.isLoading = false
          this.editProduct.imageUrl.push(response.data.data.path)
          document.querySelector('#customPic').value = ''
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
  @import "~vue2-editor/dist/vue2-editor.css";
  /* Import the Quill styles you want */
  @import '~quill/dist/quill.core.css';
  @import '~quill/dist/quill.bubble.css';
  @import '~quill/dist/quill.snow.css';
</style>
