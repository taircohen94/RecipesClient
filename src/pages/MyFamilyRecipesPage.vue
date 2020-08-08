<template  class="container">
  <div>
    <br/>
    <RecipePreviewList title="My Family Recipes Page" :recipes="recipes" :privateRecipes="true" />
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
          this.$root.store.BASE_URL + "/users/my_family_recipes"
        );
        var recipes_array = response.data;
        for (let index = 0; index < recipes_array.length; index++) {
          var family_recipe = new Object();
          family_recipe.id = recipes_array[index][0].recipe_id;
          family_recipe.title = recipes_array[index][0].recipe_name;
          family_recipe.readyInMinutes =
            recipes_array[index][0].ready_in_minutes;
          family_recipe.aggregateLikes = recipes_array[index][0].likes;
          family_recipe.vegan = recipes_array[index][0].vegan;
          family_recipe.vegetarian = recipes_array[index][0].vegetarian;
          family_recipe.glutenFree = recipes_array[index][0].gluten_free;
          family_recipe.image = recipes_array[index][0].image;
          family_recipe.instructions = recipes_array[index][0].instructions;
          family_recipe.servings = recipes_array[index][0].amount_of_servings;
          family_recipe.ingredients = recipes_array[index][0].ingredients;
          family_recipe.author_username =
            recipes_array[index][0].author_username;
          family_recipe.occasion = recipes_array[index][0].occasion;
          family_recipe.recipe_owner = recipes_array[index][0].recipe_owner;
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

