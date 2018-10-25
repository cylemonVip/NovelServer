import axios from 'axios'
import { comment } from '../api'

export default {
  async getBookComments (ctx) {
    const comments = await axios.get(comment.discussions, { params: ctx.query })
    ctx.body = comments.data
  },

  async getBookShortReviews (ctx) {
    const discussions = await axios.get(comment.shortReviews, { params: ctx.query })
    ctx.body = discussions.data
  },

  async getBookReviews (ctx) {
    const reviews = await axios.get(comment.bookReviews, { params: ctx.query })
    ctx.body = reviews.data
  },

  async getBookBestReviews (ctx) {
    const reviews = await axios.get(comment.bestReviews, { params: ctx.query })
    ctx.body = reviews.data
  },

  async getBlockComments (ctx) {
    const comments = await axios.get(comment.blockReviews, { params: ctx.query })
    ctx.body = comments.data
  },

  async getABlockComments (ctx) {
    const comments = await axios.get(comment.aBlockComment + `/${ctx.params.id}`)
    ctx.body = comments.data
  },

  async getABestBlockComments (ctx) {
    const comments = await axios.get(comment.aBestBlockComment + `/${ctx.params.id}` + '/comment/best')
    ctx.body = comments.data
  },

  async getBlockHelpComments (ctx) {
    const comments = await axios.get(comment.helpComment, { params: ctx.query })
    ctx.body = comments.data
  },

  async getABlockHelpComments (ctx) {
    const comments = await axios.get(comment.aHelpComment + `/${ctx.params.id}`)
    ctx.body = comments.data
  },

  async getBookAreaReviews (ctx) {
    const comments = await axios.get(comment.bookAreaReviews, { params: ctx.query })
    ctx.body = comments.data
  }
}