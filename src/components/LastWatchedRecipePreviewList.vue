<template>
  <RecipePreviewList title="Last watched recipes" :recipes="recipes" :homePage="true" />
</template>



<script>
import RecipePreviewList from "./RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      if (this.$root.store.username) {
        try {
          const response = await this.axios.get(
            this.$root.store.BASE_URL + "/users/my_last_watched"
          );
          var recipes_resopnse = response.data;
          this.recipes = [];
          var _recipes = [];
          _recipes.push(...recipes_resopnse);
          // const response2 = await this.axios.get(
          //   this.$root.store.BASE_URL +
          //     "/users/recipeInfo/[" +
          //     _recipes[0].id +
          //     "," +
          //     _recipes[1].id +
          //     "," +
          //     _recipes[2].id +
          //     "]"
          // );
          // for (let index = 0; index < _recipes.length; index++) {
          //   _recipes[index].watched =
          //     response2.data[_recipes[index].id].watched;
          //   _recipes[index].saved = response2.data[_recipes[index].id].saved;
          // }
          this.recipes = _recipes;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>