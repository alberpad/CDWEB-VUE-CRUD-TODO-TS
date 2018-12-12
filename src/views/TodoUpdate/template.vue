<template>
  <div v-if="selectedTodo">
    <todo-form 
      :todo="selectedTodo" 
      @processTodo="updateTodo"
      todoSubmit="Actualizar todo"
    ></todo-form>
  </div>
</template>
