[![Vue Instagram Feed Version Badge](https://img.shields.io/npm/v/vue-instagram-feed.svg?style=for-the-badge&color=#41b883)](https://www.npmjs.com/package/vue-instagram-feed)

# Vue Instagram Feed

## Getting Started

### Prerequisites
- A polyfill for the Fetch API if you have to support old browsers:
https://caniuse.com/#search=fetch
- Vue 2.6 or greater

### Install

#### In a project created with vue-cli

``` bash
# npm
npm i vue-instagram-feed
```

``` bash
# yarn
yarn add vue-instagram-feed
```

#### Without using build tools

```html
<script>
import Vue from "https://unpkg.com/vue/dist/vue.esm.browser.min.js";
import VueInstagram from "https://unpkg.com/vue-instagram-feed/dist-src/index.min.js";
</script>
```

## Example
See it on codepen: https://codepen.io/mornir0/pen/MMabbw

```html
  <vue-instagram :token="token" :count="9">
    <template v-slot="{ posts, errorMsg, fetchMorePosts }">
        <section>
          <div>
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
                  <li v-for="tag in post.tags">#{{ tag }}</li>
                </ul>
              </article>
            <pre v-if="errorMsg">{{ errorMsg }}</pre>
          </div>
          <div class="text-center">
            <button class="text-xl border-b-4 border-primary leading-none"
                    @click="fetchMorePosts">More
            </button>
          </div>
        </section>
      </template>
  </vue-instagram>
```

## API

### Props
| Prop     	| Description                                          	| Default Value   	|
|----------	|------------------------------------------------------	|-----------------	|
| token     | A string code (see below)                             | none            	|
| count   	| Number of posts to load per request               	  | `2`             	|

### Slot Props

| Prop     	| Description                                          	
|----------	|------------------------------------------------------	
| posts     | The object response from the Instagram API
| fetchMorePosts  | A method to fetch more posts      	  
| errorMsg  | An error message

## Access Token

### How to get the token

1. Open this URL in an **incognito** tab: https://instagram.pixelunion.net/
2. Click `Generate Access Token` to get the token

Note: The targeted Instagram account must be public and personal. (Business acounts use the Instagram Graph API)

### Security Notice
The generated access token only provides `read` access to the Instagram account.
Therefore, there is no need to keep it private. By the way, public Instragram feeds can also be easily scrapped.
Token can be revoked at any times in the Instagram account settings page.
