<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="todos"
      disable-pagination
      :hide-default-footer="true"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="item-icon" small @click="editProduct(item.id)"
          >mdi-pencil</v-icon
        >
        <v-icon class="item-icon" small @click="deleteTodo(item.id)"
          >mdi-delete</v-icon
        >
        <v-icon class="item-icon" small @click="seeProduct(item.id)"
          >mdi-eye</v-icon
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["products", "todos"]),
  },
  created() {
    this.getTodos();
  },

  methods: {
    ...mapMutations(["MARK_COMPLETE"]),
    ...mapActions(["deleteTodo", "getTodos"]),
  },

  data() {
    return {
      headers: [
        { text: "TodoId", align: "end", sortable: false, value: "id" },
        {
          text: "TodoName",
          align: "start",
          value: "title",
          sortable: false,
        },
        {
          text: "TodoStatus",
          align: "end",
          value: "completed",
          sortable: false,
        },
        {
          text: "Actions",
          align: "centter",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
};
</script>

<style scope>
button,
input,
select,
textarea {
  border-style: none !important;
}

td {
  text-align: center;
}

.item-icon {
  padding: 0 5px;
  color: #007bff !important;
}
</style>