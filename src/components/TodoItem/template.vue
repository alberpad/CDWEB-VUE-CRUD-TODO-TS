<template>
  <b-row class="mb-2">
    <b-col cols="2">{{todo.text}}</b-col>
    <b-col cols="1">{{todo.done}}</b-col>
    <b-col>
      <b-button variant="primary" @click="goToUpdateTodo">
        Editar
      </b-button>
      <b-button variant="warning" class="ml-2" @click="updateTodoStatus">
        Estado
      </b-button>
      <b-button variant="danger" class=ml-2 @click="removeTodo">
        Eliminar
      </b-button>
    </b-col>
  </b-row>
</template>
