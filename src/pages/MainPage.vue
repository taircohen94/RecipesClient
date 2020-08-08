<template >
  <b-container fluid class="jumbotron">
    <b-row>
      <b-col class="col">
        <RandomRecipePreviewList class="RandomRecipes center" />
        <br />
        <br />
        <br />
        <div class="vertical-center">
          <b-button id="rand_button" @click="NewRandomRecipes">Watch 3 new recipes !</b-button>
        </div>
        <br />
        <br />
      </b-col>

      <b-col class="col">
        <!-- if the user is not logged in: -->
        <div v-if="!$root.store.username">
          <Login />
        </div>
        <div v-else>
          <LastWatchedRecipePreviewList
            title="Your last watched recipes"
            :class="{
              RandomRecipes: true,
              blur: !$root.store.username,
              center: true,
            }"
            disabled
          ></LastWatchedRecipePreviewList>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import RandomRecipePreviewList from "../components/RandomRecipePreviewList";
import LastWatchedRecipePreviewList from "../components/LastWatchedRecipePreviewList";
import Login from "./LoginPage";

export default {
  components: {
    RandomRecipePreviewList,
    LastWatchedRecipePreviewList,
    Login
  },

  methods: {
    NewRandomRecipes() {
      this.$emit("updateRecipes");
    },
    updateLastWatched() {
      this.update_key = this.update_key + 1;
    }
  }
};
</script>


<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.col {
  border-style: solid;
  border-width: 0.5px;
  color: white;
  width: 50%;
}

#rand_button {
  background-color: rgba(240, 90, 90, 0.911);
  //background-position: center;
  border: 2px solid white;
  font-weight: 700;
  //margin: -20px -50px;
  position: relative;
  //top:100%;
  left: 115%;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 96%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.jumbotron {
  background-image: url(https://jetfuelcatering.com/wp-content/uploads/2018/08/food-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  // max-width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
</style>
