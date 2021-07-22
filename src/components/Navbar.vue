<template>
  <div class="header">
    <div class="containers">
      <div class="nav">
        <router-link class="nav-brand" to="/">Product Manager</router-link>
      </div>
      <div class="collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scope>
.header {
  width: 100%;
  background-color: #f8f9fa;
  height: 55px;
}
.containers {
  display: flex;
  padding: 0 400px;
  align-items: center;
  justify-content: flex-start;
}
.nav-brand {
  line-height: 50px;
  font-size: 20px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
}
li {
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}
a:hover {
  font-weight: bold;
}
</style>