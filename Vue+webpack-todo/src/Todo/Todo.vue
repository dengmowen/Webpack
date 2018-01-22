<template>
   <section class="real-app">
      <input type="text" class="add-input" autofocus="auto" placeholder="接下去要做什么" @keyup.enter="addTodo">
      <Item 
      v-for="todo in filteredTodos" :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
      >
      </Item>
      <Tabs @toggle='toggleFilter' :filter="filter" :todos="todos" @clearAllCompleted="clearAllCompleted"></Tabs>
   </section>
</template>

<script>
import Item from './Item.vue';
import Tabs from './Tabs.vue';
let id = 0;
export default {
  components: {
    Item,
    Tabs
  },
  data () {
    return {
       todos: [],
       filter: 'all'
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1);
    },
    toggleFilter (state) {
      this.filter = state;
    },
    clearAllCompleted () {
      this.todos= this.todos.filter(todo => !todo.completed);
    }
  },
  computed: {
    filteredTodos () {
      if(this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed);
    }
  }
}
</script>


<style lang="stylus">
  .real-app
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
    .add-input
       position: relative;
       margin: 0;
       width: 601px;
       height: 60px;
       padding-left: 10px;
       box-sizing: border-box;
</style>
