<template>
  <div clas="mt-5">
    <b-row>
      <b-col cols="6">
        <h2>Todos pendientes</h2>
        <todo-list :todos="pending"></todo-list>
      </b-col>
      <b-col cols="6">
        <h2>Todos finalizados</h2>
        <todo-list :todos="done"></todo-list>
      </b-col>
    </b-row>
  </div>
</template>
