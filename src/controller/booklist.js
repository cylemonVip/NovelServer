import axios from 'axios'
import { bookList } from '../api'

export default {
  async getLists (ctx) {
    const lists = await axios.get(bookList.lists, { params: ctx.query })
    ctx.body = lists.data
  },

  async getListDetail (ctx) {
    const detail = await axios.get(bookList.detail + `/${ctx.params.id}`)
    ctx.body = detail.data
  },

  async getListDetailByTagType (ctx) {
  	console.log("getListDetailByTagType ===== getListDetailByTagType == 1");
    const detail = await axios.get(bookList.tagDetail);
    console.log("getListDetailByTagType ===== getListDetailByTagType == 2");
    ctx.body = detail.data
  }
}