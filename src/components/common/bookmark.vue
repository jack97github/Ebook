<template>
  <div class="bookmark" ref="bookmark" :style="style"></div>
</template>

<script>
import { px2rem } from '../../utils/utils'
export default {
  props: {
    width: Number,
    height: Number,
    color: String
  },
  computed: {
    style () {
      if (this.color) {
        return {
          borderColor: `${this.color} ${this.color} transparent ${this.color}`
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    refresh () {
      if (this.height && this.width) {
        this.$refs.bookmark.style.borderWidth = `${px2rem(this.height - 5)}rem ${px2rem(this.width / 2)}rem ${px2rem(5)}rem ${px2rem(this.width / 2)}rem`
      }
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .bookmark {
    width: 0;
    height: 0;
    border-width: px2rem(36) px2rem(10) px2rem(10) px2rem(10);
    border-style: solid;
    border-color: white white transparent white;
  }
</style>
