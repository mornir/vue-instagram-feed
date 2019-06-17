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
      areMorePages: false,
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
        if (!window.fetch) {
          throw new Error(
            'This browser does not support the Fetch API natively. A polyfill is needed.'
          )
        }

        const res = await fetch(url)
        if (!res.ok) {
          throw res
        }
        const parsed = await res.json()

        // check for pagination
        if (Object.entries(parsed.pagination).length === 0) {
          this.areMorePages = false
        } else {
          this.areMorePages = true
          this.nextURL = parsed.pagination.next_url
        }

        console.log(parsed)
        this.nextURL = parsed.pagination.next_url
        this.posts.push(...parsed.data)
      } catch (err) {
        if (err.json) {
          const {
            meta: { code, error_type, error_message },
          } = await err.json()
          this.errorMsg = `Error ${code} (${error_type}) : ${error_message}`
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
      areMorePages: this.areMorePages,
    })
  },
}
