function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var index = {
  name: 'VueInstagram',
  props: {
    count: {
      type: Number,
      default: 2
    },
    token: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      posts: [],
      nextURL: '',
      errorMsg: ''
    };
  },

  created() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      var _this = this;

      return _asyncToGenerator(function* () {
        const url = _this.nextURL ? _this.nextURL : "https://api.instagram.com/v1/users/self/media/recent/?access_token=".concat(_this.token, "&count=").concat(_this.count);

        try {
          const res = yield fetch(url);

          if (!res.ok) {
            throw res;
          }

          const parsed = yield res.json();
          _this.nextURL = parsed.pagination.next_url;

          _this.posts.push(...parsed.data);
        } catch (err) {
          if (err.json) {
            const parsed = yield err.json();
            _this.errorMsg = "Error ".concat(400, ": ", parsed.meta.error_message);
          } else {
            _this.errorMsg = err.message;
          }

          console.error(err);
        }
      })();
    }

  },

  render() {
    return this.$scopedSlots.default({
      posts: this.posts,
      errorMsg: this.errorMsg,
      fetchMorePosts: this.fetchPosts
    });
  }

};

export default index;
