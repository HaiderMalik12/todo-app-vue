<template>
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li v-for="todo in todos" :key="todo.id">{{todo.title}}
                <button class="remove-item btn btn-default btn-xs pull-right" @click="removeTodo(todo.id)">
                    <i class="fa fa-trash"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import EventBus from '../EventBus.js';
export default {
 name: 'FinishedTodos',
 props:{
     todos :{
         type: Array,
         required: true
     }
 },
 methods:{
     removeTodo(todoId){
         EventBus.$emit('delete-todo', {id: todoId})
     }
 }
}
</script>
