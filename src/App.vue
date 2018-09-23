<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="todolist not-done">
                    <h1>Todos</h1>
                    <AddTodo/>
                    <hr>
                    <TodoListView :todos="unFinishedTodos" />
                    <div class="todo-footer">
                        <strong>
                            <span class="count-todos">{{unFinishedTodos.length}}</span>
                        </strong> Items Left
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <FinishedTodos :todos="finishedTodos" />
            </div>
        </div>
    </div>
</template>

<script>

import TodoListView from './components/TodoListView.vue';
import AddTodo from './components/AddTodo.vue';
import FinishedTodos from './components/FinishedTodos';

export default {
    name: 'app',
    components:{
        TodoListView,
        AddTodo,
        FinishedTodos
    },
    computed:{
     finishedTodos(){
      return this.$store.getters.findTodos.filter(todo => todo.completed === true)
     },
     unFinishedTodos(){
      return this.$store.getters.findTodos.filter(todo => todo.completed === false)
     }
 }
};
</script>

<style>
body {
	background-color: #eeeeee;
}
.todolist {
	background-color: #fff;
	padding: 20px 20px 10px 20px;
	margin-top: 30px;
}
.todolist h1 {
	margin: 0;
	padding-bottom: 20px;
	text-align: center;
}
.form-control {
	border-radius: 0;
}
li.ui-state-default {
	background: #fff;
	border: none;
	border-bottom: 1px solid #ddd;
}

li.ui-state-default:last-child {
	border-bottom: none;
}

.todo-footer {
	background-color: #f4fce8;
	margin: 0 -20px -10px -20px;
	padding: 10px 20px;
}
#done-items li {
	padding: 10px 0;
	border-bottom: 1px solid #ddd;
	text-decoration: line-through;
}
#done-items li:last-child {
	border-bottom: none;
}
#checkAll {
	margin-top: 10px;
}
</style>
