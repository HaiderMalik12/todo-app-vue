<template>
    <ul id="sortable" class="list-unstyled">
        <li class="ui-state-default">
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="" />Take out the trash</label>
            </div>
        </li>
        <li class="ui-state-default">
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="" />Buy bread</label>
            </div>
        </li>
        <li class="ui-state-default">
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="" />Teach penguins to fly</label>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'TodoListView'
}
</script>
