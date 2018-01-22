<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
          <span :class="[state, filter ===state ? 'actived' : '']" v-for="(state,index) in states" :key="index"
           @click="toggleFilter(state)"
          >
              {{state}}
          </span>
        </span>
        <span class="clear" @click="clearAllCompleted()">clearAllCompleted</span>
    </div>
</template>

<script>
export default {
  props: {
   filter: {
     type: String,
     required: true
   },
   todos: {
     type: Array,
     required: true 
   }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  methods: {
    toggleFilter (state) {
      this.$emit('toggle', state);
    },
    clearAllCompleted () {
      this.$emit('clearAllCompleted');
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
}
</script>

<style lang="stylus" scoped>
   .helper
     height: 60px;
     line-height: 60px;
     padding-left: 40px;
     display: flex;
     justify-content: space-around;
     .tabs
       span 
         padding: 10px;
         margin-left: 10px;
         border-radius: 5px;
         background: #EAEAEA;
         font-size: 16px;
         font-weight: bold;
         &.actived
           color: blue;
</style>
