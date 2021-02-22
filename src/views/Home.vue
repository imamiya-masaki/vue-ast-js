<template>
  <div class="home">
    <textarea v-model="text" class="textSize"/>
    <button @click="onClick()">実行</button>
  </div>
</template>

<script>
// @ is an alias to /src
import perseFunc from '@/process/vue-ast-js/index'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onClick: function () {  
      // let exec = require('exec-engine-js')
      const get = perseFunc(this.text)
      // const get = exec.rawRun(this.text)
      const str2 = JSON.stringify(get, null, 2)
      console.log('get', str2, typeof get)
    }
  }
}
</script>
