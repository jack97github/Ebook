<template>
  <div class="ebook" ref="ebook">
    <ebook-header></ebook-header>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
    <ebook-bookmark></ebook-bookmark>
    <ebook-footer></ebook-footer>
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookTitle from '../../components/ebook/EbookTitle'
import EbookMenu from '../../components/ebook/EbookMenu'
import EbookBookmark from '../../components/ebook/EbookBookmark'
import EbookHeader from '../../components/ebook/EbookHeader'
import EbookFooter from '../../components/ebook/EbookFooter'
import { ebookMixin } from '../../utils/mixin'
import { getReadTime, saveReadTime } from '../../utils/localstorage'
export default {
  mixins: [ebookMixin],
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu,
    EbookBookmark,
    EbookHeader,
    EbookFooter
  },
  watch: {
    offsetY(v) {
      if (!this.menuVisible && this.bookAvailable) {
        if (v > 0) {
          this.move(v)
        } else if (v === 0) {
          this.restore()
        }
      }
    }
  },
  methods: {
    // 下拉松开top重置
    restore () {
      this.$refs.ebook.style.top = 0
      this.$refs.ebook.style.transition = 'all .2s linear'
      setTimeout(() => {
        this.$refs.ebook.style.transition = ''
      }, 200)
    },
    // 下拉设置top值
    move (v) {
      this.$refs.ebook.style.top = v + 'px'
    },
    //  阅读时间记录功能
    startLoopReadTime () {
      let readTime = getReadTime(this.fileName)
      if (!readTime) {
        readTime = 0
      }
      this.task = setInterval(() => {
        readTime++
        if (readTime % 30 === 0) {
          saveReadTime(this.fileName, readTime)
        }
      }, 1000)
    }
  },
  mounted () {
    this.startLoopReadTime()
  },
  beforeDestroy () {
    if (this.task) {
      clearInterval(this.task)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global.scss";
.ebook {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
