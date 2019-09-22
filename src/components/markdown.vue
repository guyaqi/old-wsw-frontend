<template>
  <div class="markdown" v-html="htmlArticle"></div>
</template>

<script>
import config from "@/config"
import "@/assets/css/markdown.css"
import marked from "marked"

export default {
  name: "Markdown",
  data: function() {
    return {
      markdownUrl: "",
      htmlArticle: "",
      markdownPromise: null,
    }
  },
  created: function() {
    let tag = "index", name = "home";
    if(this.$route.params.tag) {
      tag = this.$route.params.tag;
    }
    if(this.$route.params.name) {
      name = this.$route.params.name;
    }

    this.markdownUrl = `${config.serverUrl}blog/article/${tag}/${name}`
    console.log(this.markdownUrl)

  },
  mounted: function() {
    fetch(this.markdownUrl)
      .then(r=>r.json())
      .then(res=>{
        this.htmlArticle = marked(res['content'])
      })
      .then(()=>{
        this.hookLink()

      })

  },
  methods: {
    hookLink: function() {
      let linkReg = new RegExp("href=['\"]@([^'\"]+).md['\"]", "g");
      let imgReg = new RegExp("src=['\"]@([^'\"]+)['\"]", "g");
      let hooked = this.htmlArticle.replace(linkReg, "href=\"$1\"")
      // hooked = hooked.replace(imgReg, "href=\"$1\"")
      hooked = hooked.replace(imgReg, "src=\"https://m.baidu.com/static/index/plus/plus_logo_web.png\"")
      // 
      this.htmlArticle = hooked;
    }
  },
}
</script>

<style scoped>

</style>