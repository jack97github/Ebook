<template>
  <div class="shelf-item">
    <component :is="item"></component>
  </div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin'
import ShelfBook from './ShelfItemBook'
import ShelfCategory from './ShelfItemCategory'
import ShelfAdd from './ShelfItemAdd'
export default {
  mixins: [storeShelfMixin],
  props: {
    data: Object
  },
  computed: {
    item() {
      return this.data.type === 1
        ? this.book
        : this.data.type === 2
        ? category
        : add
    }
  },
  data() {
    return {
      book: ShelfBook,
      category: ShelfCategory,
      add: ShelfAdd
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
</style>
