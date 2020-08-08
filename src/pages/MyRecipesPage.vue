<template  class="container">
  <div>
    <br/>
    <RecipePreviewList title="My Recipes Page" :recipes="recipes" :myRecipes="true" />
  </div>
</template>


<script>
import RecipePreviewList from "../components/RecipePreviewList";

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
      try {
        const response = await this.axios.get(
          this.$root.store.BASE_URL + "/users/preview/my_recipes"
        );
        var recipes_array = response.data;
        for (let index = 0; index < recipes_array.length; index++) {
          var family_recipe = new Object();
          const keys = Object.keys(recipes_array[index]);
          family_recipe.id = keys[0];
          family_recipe.title = recipes_array[index][keys[0]].recipe_name;
          family_recipe.readyInMinutes =
            recipes_array[index][[keys[0]]].ready_in_minutes;
          family_recipe.aggregateLikes = recipes_array[index][[keys[0]]].likes;
          family_recipe.vegan = recipes_array[index][[keys[0]]].vegan;
          family_recipe.vegetarian = recipes_array[index][[keys[0]]].vegetarian;
          family_recipe.glutenFree =
            recipes_array[index][[keys[0]]].gluten_free;
          family_recipe.image = recipes_array[index][[keys[0]]].image;
          // family_recipe.instructions = recipes_array[index][0].instructions;
          // family_recipe.servings = recipes_array[index][0].amount_of_servings;
          // family_recipe.ingredients = recipes_array[index][0].ingredients;
          this.recipes.push(family_recipe);
        }
      } catch (error) {
        this.$router.push("/").catch(() => {
          this.$forceUpdate();
        });
      }
    }
  }
};
</script>

