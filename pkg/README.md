[![Vue Instagram Feed Version Badge](https://img.shields.io/npm/v/vue-instagram-feed.svg?style=for-the-badge&color=#41b883)](https://www.npmjs.com/package/vue-flip-toolkit)

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
import Vue from "https://unpkg.com/vue/dist/vue.esm.browser.js";
import VueInstagram from "https://unpkg.com/vue-instagram-feed@2.0.0/dist-src/index.js";
</script>
```

## Example (with CSS Grid)
Edit the `instagram-feed` id to rezise the images and the gaps:

```css
#instagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1.5rem;
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="mornir0" data-slug-hash="MMabbw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vue Instagram Feed">
  <span>See the Pen <a href="https://codepen.io/mornir0/pen/MMabbw/">
  Vue Instagram Feed</a> by Jérôme Pott (<a href="https://codepen.io/mornir0">@mornir0</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

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

1. Open this URL in an incognito tab: https://instagram.pixelunion.net/
2. Click `Generate Access Token` to get the token

Note: The targeted Instagram account must be public and personal. (Business acounts use the Instagram Graph API)

### Security Notice
The generated access token only provides `read` access to the Instagram account.
Therefore, there is no need to keep it private. By the way, public Instragram feeds can also be easily scrapped.
Token can be revoked at any times in the Instagram account settings page.
