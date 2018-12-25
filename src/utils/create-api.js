import CreateAPI from 'vue-create-api'
import Vue from 'vue'
import Toast from '../components/common/Toast'
import Popup from '../components/common/Popup'
import GroupDoalog from '../components/shelf/ShelfGroupDialog'

Vue.use(CreateAPI)
Vue.createAPI(Toast, true)
Vue.createAPI(Popup, true)
Vue.createAPI(GroupDoalog, true)
Vue.mixin({
  methods: {
    toast(settings) {
      return this.$createToast({
        $props: settings
      })
    },
    popup(settings) {
      return this.$createPopup({
        $props: settings
      })
    },
    simpleToast(text) {
      const toast = this.toast({
        text: text
      })
      toast.show()
      toast.updateText(text)
    },
    dialog (settings) {
      return this.$createGroupDialog({
        $props: settings
      })
    }
  }
})
