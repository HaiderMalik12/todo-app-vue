<template>
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li>Some item
                <button class="remove-item btn btn-default btn-xs pull-right">
                    <i class="fa fa-trash"></i>
                </button>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
 name: 'FinishedTodos'
}
</script>
