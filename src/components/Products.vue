<template>
  <div class="products">
    <h3 class="products-title">Products</h3>
    <div class="card">
      <div class="card-header">Add a new product</div>
      <div class="card-body">
        <form @submit="onSubmit" class="form">
          <div class="form-group">
            <label>ID</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" required />
          </div>
          <div class="btl">
            <button type="submit" class="btl-primary">Add</button>
          </div>
        </form>

        <div class="card">
          <div class="card-header">Products List</div>
          <div class="card-body">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "./ProductList.vue";

export default {
  name: "Products",
  components: {
    ProductList,
  },

  computed: {
    ...mapGetters(["products", "value"]),
  },
};
</script>

<style scope>
.products {
  padding: 30px 400px;
}
.products-title {
  text-align: center;
}
h3 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}
.card {
}
.card-header {
  padding: 20px 20px;
  background-color: #f8f9fa;
}
.form {
  padding: 20px 0;
  display: flex;
}
.form-group {
  padding: 20px;
}
label {
  padding-right: 10px;
}
input {
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgb(14, 12, 12);
}

.btl {
  padding: 18px;
  margin-left: auto;
}

.btl-primary {
  width: 80px;
  height: 32px;
  background-color: #005cbf;
  color: #fff;
}

.btl-primary:hover {
  cursor: pointer;
}

input,
select,
textarea {
  border-style: solid !important;
}
</style>