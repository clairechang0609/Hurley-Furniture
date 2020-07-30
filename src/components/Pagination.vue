<template>
    <ul class="pagination">
        <li :class="{'disabled': pages.current_page === 1}">
            <a href="#" @click.prevent="changePage(pages.current_page - 1)"> ← </a>
        </li>
        <li v-for="(page, index) in pages.total_pages" :key="index + page" :class="{'active': page === pages.current_page}">
            <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li :class="{'disabled': pages.current_page === pages.total_pages}">
            <a href="#" @click.prevent="changePage(pages.current_page + 1)"> → </a>
        </li>
    </ul>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage (page) {
      this.$emit('changepage', page)
    }
  }
}
</script>
