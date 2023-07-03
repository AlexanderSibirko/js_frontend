Vue.component('blog-article', {
    props: ['rawHtml', 'blogTags'],
    data() {
        return {
        }
    },

    template: `
    <div class="blogs-detailed__article">
        <span v-if="$parent.tagsFilter(blogTags)" v-html="rawHtml"></span>
    </div>
    `
})