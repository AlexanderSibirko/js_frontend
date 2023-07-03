Vue.component('tag-button', {
    props: ['tagName', 'checkStatus'],
    data() {
        return {
        }
    },
    computed: {
        tagId() {
            return "radio-" + this.tagName
        },
        checked() {
            return this.checkStatus
        }
    },
    template: `
        <div  class="tags__button">
            <input
              :id="tagId"
              type="radio"
              name="radio"
              :value="tagName"
              :checked="checked"
            />
            <label @click="$parent.currentTag = tagName" :for="tagId">{{tagName}}</label>
        </div>
    `
})
