export const category = {
  // 带书籍数量的父分类
  categoryWithBookCount: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
  // 带子分类的父分类
  categoryWithSubCategories: 'http://api.zhuishushenqi.com/cats/lv2',
  // 分类详情: 带着书籍
  categoryInfo: 'http://api.zhuishushenqi.com/book/by-categories'
}

export const book = {
  // 书籍详情
  bookInfo: 'http://api.zhuishushenqi.com/book', // id 书籍id
  // 相关推荐
  relatedRecommendedBooks: 'http://api.zhuishushenqi.com/book', // http://api.zhuishushenqi.com/book/56d0b60dfb51235c3a7a2739/recommend
  // 作者名下的书籍
  authorBooks: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
  // 书籍章节内容
  bookChapters: 'http://api.zhuishushenqi.com/atoc',
  // 书源
  bookSources: 'http://api.zhuishushenqi.com/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
  // 章节内容:id 单章id
  chapterContent: 'http://chapter2.zhuishushenqi.com/chapter', //link: chapter id
  // 书籍搜索 可以搜索作者但是不精确
  bookSearch: 'http://api.zhuishushenqi.com/book/fuzzy-search', //query ?keyword=关键字
  //通过tag找列表
  bookSearchByTag: 'http://api.zhuishushenqi.com/book/by-tags', //query ?{tags, start, limit}
  //通过热词找列表
  bookSearchByHotWord: 'http://api.zhuishushenqi.com/book/hot-word',
  //关键字补全
  bookSearchAutoComplement: 'http://api.zhuishushenqi.com/book/auto-complete' //query ?keyword=关键字
}
export const rank = {
  // 排名分类
  rankCategory: 'http://api.zhuishushenqi.com/ranking/gender',
  // 排名详情
  rankInfo: 'http://api.zhuishushenqi.com/ranking' // id: rank id
}

export const comment = {
  // 讨论
  discussions: 'http://api.zhuishushenqi.com/post/by-book',
  // 短评
  shortReviews: 'http://api.zhuishushenqi.com/post/short-review',
  //长评
  bookReviews: 'http://api.zhuishushenqi.com/post/review/by-book',
  //热门评论
  bestReviews: 'http://api.zhuishushenqi.com/post/review/best-by-book',
  //获取综合讨论区帖子列表
  blockReviews: 'http://api.zhuishushenqi.com/post/by-block',
  //获取综合讨论区帖子详情
  aBlockComment: 'http://api.zhuishushenqi.com/post',
  //获取综合讨论区帖子详情内的评论列表
  aBlockDetaiComment: 'http://api.zhuishushenqi.com/post',
  //获取精品帖子详情
  aBestBlockComment: 'http://api.zhuishushenqi.com/post',
  //获取书荒区帖子列表
  helpComment: 'http://api.zhuishushenqi.com/post/help',
  //获取书荒区帖子详情
  aHelpComment: 'http://api.zhuishushenqi.com/post/help',
  //获取书评区帖子列表
  bookAreaReviews: 'http://api.zhuishushenqi.com/post/review',
  //获取书评区帖子详情
  bookAreaDetailReviews: 'http://api.zhuishushenqi.com/post/review',
  //获取书评区、书荒区帖子详情内的评论列表
  bookDetailReviews: 'http://api.zhuishushenqi.com/post/review'
}

export const bookList = {
  lists: 'http://api.zhuishushenqi.com/book-list',
  detail: 'http://api.zhuishushenqi.com/book-list', // bookId
  //获取主题书单标签列表
  tagDetail: 'http://api.zhuishushenqi.com/book-list/tagType'
}