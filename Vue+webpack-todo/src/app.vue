<template>
     <div id="#app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
     </div>
</template>

<script>
  import Header from './Todo/Header.vue';
  import Footer from './Todo/footer.jsx';
  import Todo from './Todo/Todo.vue';
  export default {
     components: {
       Header,
       Footer,
       Todo
     },
     data () {
       return {
         text: "Hello webpack"
       }
     }
   }
</script>

<style lang="stylus">
   #app 
     position: absolute;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     #cover
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #999;
        opacity: .9;
        z-index: -1;
</style>