
<template>
  <div id="app" class="jumbotron">
    <b-navbar toggleable="lg" type="dark" variant="danger" v-if="!$root.store.username">
      <b-navbar-brand :to="{ name: 'main' }">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>Hello guest</b-nav-item>
          <b-navbar-nav right>
            <template v-slot:button-content>
              <em>Welcome</em>
            </template>
            <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
            <b-avatar variant="danger" size="36px"></b-avatar>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar toggleable="lg" type="dark" variant="danger" v-else>
      <b-navbar-brand :to="{ name: 'main' }">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item><img :src= "$root.store.image" /></b-nav-item> -->
          <b-navbar-brand>Hello {{ $root.store.username}}</b-navbar-brand>
          <b-navbar-nav right>
            <button @click="Logout">Logout</button>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Profile</em>
            </template>
            <b-dropdown-item :to="{ name: 'myFamily' }">My Family Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myFavorites' }">My Favorites</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: "Comic Sans MS", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  min-height: 100vh;
}

#nav {
  color: white;
  padding: 30px;
  min-height: 32px;
  padding-top: 5px;
  padding-bottom: 5px;
}

#nav a {
  font-weight: bold;
  color: white;
}

.jumbotron {
  background-image: url(https://jetfuelcatering.com/wp-content/uploads/2018/08/food-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  // max-width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: fixed;
}
#nav a.router-link-exact-active {
  color: white;
}

.hello {
  color: white;
  font-weight: bold;
}

.personal_drop_down {
  background-color: rgba(116, 108, 58, 0.733);
}

#navbar {
  color: white;
  background-color: rgba(224, 217, 169, 0.801);
}

.bg-info {
  background-color: white;
}
</style>
