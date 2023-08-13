<template>
  <section>
    <AddToDoForm />
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
  </section>
</template>


<script >

export default {
  computed: {
    todoList() {
      return this.$store.state.todos.list
    }
  },
}
</script>