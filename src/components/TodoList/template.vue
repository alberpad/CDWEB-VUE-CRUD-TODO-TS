<template>
  <div v-if="todos.length">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
  </div>
  <b-alert show variant="info" v-else>No hay todos</b-alert>
</template>
