import axios from 'axios'

export function home() {
  return axios({
    methods: 'get',
    url: `${process.env.VUE_APP_BASE_URL}/book/home`
  })
}
