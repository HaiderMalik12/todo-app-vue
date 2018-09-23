<template>
    <input type="text" class="form-control add-todo" placeholder="Add todo" v-model="title" @keyup.enter="saveTodo(title)">
</template>

<script>
export default {
 name: 'AddTodo',
 data(){
     return {
         title: ''
     }
 },
 methods:{
     saveTodo(title){
      this.$store.dispatch('addTodo',{id: Date.now().toString(), completed:false, title})
     }
 }
}
</script>
