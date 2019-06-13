export default {
  name: 'VueInstagram',
  props: {
    count: {
      type: Number,
      default: 2,
    },
    token: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      posts: [],
      nextURL: '',
      errorMsg: '',
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      const url = this.nextURL
        ? this.nextURL
        : `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
            this.token
          }&count=${this.count}`

      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw res
        }
        const parsed = await res.json()
        this.nextURL = parsed.pagination.next_url
        this.posts.push(...parsed.data)
      } catch (err) {
        if (err.json) {
          const parsed = await err.json()
          this.errorMsg = `Error ${400}: ${parsed.meta.error_message}`
        } else {
          this.errorMsg = err.message
        }
        console.error(err)
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
      errorMsg: this.errorMsg,
      fetchMorePosts: this.fetchPosts,
    })
  },
}
