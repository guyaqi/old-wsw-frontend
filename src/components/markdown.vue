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
    
    // this.markdownPromise = fetch(`${config.serverUrl}blog/article/${tag}/${name}`)
    //   .then(r=>r.json())

  },
  mounted: function() {
    // console.log(config.serverUrl)
    // this.markdownPromise
    //   .then(res=>{
    //     this.htmlArticle = marked(res['content'])
    //   })

    fetch(this.markdownUrl)
      .then(r=>r.json())
       .then(res=>{
        this.htmlArticle = marked(res['content'])
        })

  }
}
</script>

<style scoped>

</style>