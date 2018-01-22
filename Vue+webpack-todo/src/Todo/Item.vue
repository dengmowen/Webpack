<template>
  <div :class="['todo-item',todo.completed ? 'completed' : '']">
     <input id="chek" type="checkbox" class="toggle" v-model="todo.completed">
     <label for="chek">{{todo.content}}</label>
     <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    data () {
      return {}
    },
    methods: {
      deleteTodo () {
        this.$emit('del', this.todo.id);
      }
    }
  }
</script>

 <style lang="stylus">
   .todo-item 
     position: relative;
     background-color: #fff;
     font-size: 24px;
     border-bottom: 1px solid rgba(0,0,0,0.06);
     &:hover
       .destory:after 
         content: 'X'
     label 
       white-space: pre-line;
       word-wrap: break-word;
       padding: 15px 60px 15px 15px;
       margin-left: 45px;
       display: block;
       height: 1.2rem;
       line-height: 1.2rem;
       transition: color 0.4s;
     &.completed
       color: #d9d9d9;
       text-decoration: line-through;
     .toggle 
       text-align: center;
       width: 40px;
       position: absolute;
       top: 0;
       bottom: 0;
       margin: auto 0;
       border: none;
       outline: none;
      //  appearance: none;     
      //  &:after
      //    content: url('../assets/style/unchecked.png');
      //  &:checked:after
      //    content: url('&#xe66d;');
     .destory
       position: absolute;
       right: 0;
       top: 40%;
       border: none;
       outline: none;
       padding:0;
       margin-right: 20px;
       font-size: 20px;
       background: none;
 </style>
 