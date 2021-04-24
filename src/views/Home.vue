<template>
  <div class="home">
    <textarea v-model="text" class="textSize"/>
    <button @click="onClick()">実行</button>
    <pre>
      {{ tsText}}
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
import perseFunc from '@/process/vue-ast-js/index'
// import perseFunc from 'vue-ast'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      text: '',
      tsText: ''
    }
  },
  methods: {
    onClick: function () {  
      // let exec = require('exec-engine-js')
      const text = `<div class="CodeView" v-if="isCode">
      <div>
      <li>aaaa
      <li>ccc
      <li>cdcd
      </li>
      </div>
      <img class="aa">
      <tiger class="aa" />
    <b-tabs>
     <b-tab 
      :disabled="!template"
      title="template"
      >
        <template-view :code="template"/>
      </b-tab>
      <b-tab :disabled="!javaScript" title="script">
        <java-script-view :code="javaScript"/>
      </b-tab>
    </b-tabs>
  </div>`
      this.tsText = text
      const get = perseFunc(text)
      // const get = exec.rawRun(this.text)
      const str2 = JSON.stringify(get, null, 2)
      // console.log('get', str2, typeof get)
      console.log('get:object', get)
    }
  }
}
</script>
