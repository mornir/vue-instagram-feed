<template>
  <div id="app">
    <h1>Instagram Feed</h1>

    <vue-instagram :token="token"
                   :count="count">
      <template v-slot="{ posts, errorMsg, fetchMorePosts, areMorePages}">

        <section>
          <div id="instagram-grid">

            <article v-for="post in posts"
                     :key="post.id">
              <a :href="post.link"
                 target="_blank"
                 rel="noopener">
                <img :src="post.images.low_resolution.url"
                     alt="instagram">
              </a>
              <h2 v-if="post.caption">{{ post.caption.text }}</h2>
              <ul class="tags-list">
                <li v-for="tag in post.tags"
                    :key="tag">#{{ tag }}</li>
              </ul>
            </article>

            <pre v-if="errorMsg">{{ errorMsg }}</pre>
          </div>
          <div class="text-center">
            <button class="text-xl border-b-4 border-primary leading-none"
                    @click="fetchMorePosts"
                    v-if="areMorePages">More</button>
          </div>
        </section>
      </template>
    </vue-instagram>

  </div>
</template>

<script>
import VueInstagram from '../../src/index.js'

export default {
  name: 'app',
  data() {
    return {
      token: '14685470797.1677ed0.86f3a5db081a4d24953f755ac97f30da',
      count: 1,
    }
  },
  components: {
    VueInstagram,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
