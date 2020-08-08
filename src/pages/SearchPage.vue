<template>
  <div>
    <div class="container">
      <div :key="searchkey">
        <br />
        <h1 style="text-align:centerl; color:white;">Search Page</h1>
        <br />
        <br />
        <b-row>
          <b-col>
            <b-form-input placeholder="Search" v-model="search_query" style="width:250px;"></b-form-input>
          </b-col>number of results to display:
          <b-col>
            <b-form-select id="results" v-model="num_of_results" style="width:100px;">
              <b-form-select-option :value="5">5</b-form-select-option>
              <b-form-select-option :value="10">10</b-form-select-option>
              <b-form-select-option :value="15">15</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
        <br />
        <br />
        <br />
        <b-row>
          <b-col>
            <b-form-select style="width:185px;" v-model="cuisine_chosen" :options="cuisines"></b-form-select>
          </b-col>
          <b-col>
            <b-form-select style="width:185px;" v-model="diet_chosen" :options="diets"></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              style="width:185px;"
              v-model="intolerance_chosen"
              :options="intolerances"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-button @click="SendSearch" :disabled="search_query.length==0">Search</b-button>
          </b-col>
        </b-row>
        <br />
        <br />
        <br />
        <b-row>
          <b-dropdown text="Sort By:" :disabled="!recipes || !recipes.length">
            <b-dropdown-item @click="sortByPopularity()">Popularity</b-dropdown-item>
            <b-dropdown-item @click="sortByDuration()">Duration</b-dropdown-item>
          </b-dropdown>
        </b-row>
        <br />
        <br />
      </div>
    </div>
    <div>
      <div v-if="recipes.length">
        <RecipePreviewList title="Your Search Results " :recipes="recipes" />
        <br />
      </div>

      <!-- gets the last query, only if there is no current search -->
      <div v-if="last_search.length != 0 && !searched">
        <RecipePreviewList title="Your Last Search Results " :recipes="last_search" />
        <br />
      </div>

      <div
        v-if="!recipes.length && searched"
        style="text-align: center; margin-left: auto;
  margin-right: auto; background-position: center; font-size: 21px;"
      >
        <strong>No results to display. Try again.</strong>
      </div>
      <br />
      <br />
      <br />
      <b-row></b-row>
    </div>
  </div>
</template>

<script>
import cuisines from "../assets/cuisine";
import diets from "../assets/diet";
import intolerances from "../assets/intolerance";
import RecipePreviewList from "../components/RecipePreviewList.vue";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      cuisine_chosen: null,
      cuisines: [{ value: null, text: "-- Select Cuisine --", disabled: true }],

      diet_chosen: null,
      diets: [{ value: null, text: "-- Select Diet --", disabled: true }],

      intolerance_chosen: null,
      intolerances: [
        { value: null, text: "-- Select Intolerance --", disabled: true }
      ],

      recipes: [],
      num_of_results: 5,
      byPopularity: true,
      search_results: [],
      search_query: "",
      sortby_selected: null,
      searchkey: 0,
      last_search: [],
      //message: "",
      searched: false,
      search_history: []
    };
  },

  // async created() {
  //   //this.search_history = undefined;
  //   //this.last_search = this.$root.store.search_history;

  //   this.searched = false;

  //   if (this.$root.store.username) {
  //     if (this.$root.store.search_history.length == 0) {
  //       // no history
  //       this.$root.store.addSearchedRecipes([
  //         {
  //           username: this.$root.store.username,
  //           recipes: []
  //         }
  //       ]);
  //     } else {
  //       // user already has history
  //       let history_arr = JSON.parse(localStorage.getItem("search_history"));
  //       for (let i = 0; i < history_arr.length; i++) {
  //         // try to find the correct user.
  //         if (this.$root.store.username == history_arr[i].username) {
  //           // found
  //           this.last_search.push(...history_arr[i].recipes);
  //         }
  //       }
  //     }
  //   }
  // },
  mounted() {
    this.intolerances.push(...intolerances);
    this.diets.push(...diets);
    this.cuisines.push(...cuisines);
    this.update();
  },
  methods: {
    async SendSearch() {
      try {
        console.log(this.search_query);
        console.log("try send search");

        const response = await this.axios.get(
          this.$root.store.BASE_URL +
            "/recipes/search/query/" +
            this.search_query +
            "/amount/" +
            this.num_of_results,
          {
            params: this.search_params
            //withCredentials: true,
          }
        );

        //  if (response.data.length == 0) {
        //   console.log("no results");
        //   message = "No results to display. Please try again."
        //   //this.currentSearchQuery = "";
        // }

        //debugger;

        this.recipes = [];
        const results_dic = response.data;
        this.recipes.push(...results_dic);

        this.searched = true;

        console.log(this.recipes);
        //const recipe_ids = [];

        // saves user's history
        let userExists = false;
        if (this.$root.store.username) {
          let history_arr = JSON.parse(localStorage.getItem("search_history"));

          for (let i = 0; i < history_arr.length; i++) {
            if (
              this.$root.store.username == history_arr[i].username &&
              !userExists
            ) {
              history_arr[i].recipes = this.recipes;
              userExists = true;
              //this.$root.store.addSearchedRecipes(history_arr);
            }
          }

          if (!userExists) {
            //adds a new "key" (user) to the dic
            history_arr.push({
              username: this.$root.store.username,
              recipes: this.recipes
            });
          }

          this.$root.store.addSearchedRecipes(history_arr);
        }
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    },

    async sortByDuration() {
      console.log("sorting results by duration");
      this.recipes.sort(function(x, y) {
        return x.readyInMinutes - y.readyInMinutes;
      });
    },

    async sortByPopularity() {
      console.log("sorting results by popularity");
      this.recipes.sort(function(x, y) {
        return y.aggregateLikes - x.aggregateLikes;
      });
    },

    async update() {
      //this.search_history = undefined;
      //this.last_search = this.$root.store.search_history;

      this.searched = false;

      if (this.$root.store.username) {
        if (this.$root.store.search_history.length == 0) {
          // no history
          this.$root.store.addSearchedRecipes([
            {
              username: this.$root.store.username,
              recipes: []
            }
          ]);
        } else {
          // user already has history
          let history_arr = JSON.parse(localStorage.getItem("search_history"));
          for (let i = 0; i < history_arr.length; i++) {
            // try to find the correct user.
            if (this.$root.store.username == history_arr[i].username) {
              // found
              this.last_search.push(...history_arr[i].recipes);
            }
          }
        }
      }
    }
  },

  computed: {
    search_params() {
      const params = {};
      if (this.cuisine_chosen) {
        params["cuisine"] = this.cuisine_chosen;
      }
      if (this.diet_chosen) {
        params["diet"] = this.diet_chosen;
      }
      if (this.intolerance_chosen) {
        params["diet"] = this.intolerance_chosen;
      }
      console.log(params);
      return params;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // max-width: 1400px;
  display: grid;
  justify-content: space-evenly;
  // justify-content: space-around;
}

#results {
  // max-width: 20%;
}
</style>