<template>
  <RecipePreviewList title="Explore these recipes" :recipes="recipes" :homePage="true" />
</template>



<script>
import RecipePreviewList from "./RecipePreviewList";
export default {
  name: "RandomRecipePreviewList",
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
          this.$root.store.BASE_URL + "/recipes/RandomRecipes"
        );
        var recipes_resopnse = response.data;
        this.recipes = [];
        this.recipes.push(...recipes_resopnse);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created: function() {
    this.$parent.$on("updateRecipes", this.updateRecipes);
  }
};
</script>
