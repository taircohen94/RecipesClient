
 
<template>
  <div class="main-preview">
    <h5
      style="text-align: center; font-weight: bold; font-size: 24px;"
      :title="recipe.title"
      class="recipe-title"
    >{{ recipe.title }}</h5>
    <!-- family recipes -->
    <router-link
      v-if="privateRecipes"
      :to="{ name: 'recipe', params: { recipeId: recipe.id,
    privateRecipes: true
     } }"
      class="recipe-body"
    >
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" id="image" />
      </div>
    </router-link>
    <!-- family recipes -->

    <!-- My recipes -->
    <router-link
      v-else-if="myRecipes"
      :to="{ name: 'recipe', params: { recipeId: recipe.id,
    myRecipes: true
     } }"
      class="recipe-body"
    >
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" id="image" />
      </div>
    </router-link>
    <!-- My recipes -->

    <!-- API recipes -->
    <router-link
      v-else
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-body"
    >
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" id="image" />
      </div>
    </router-link>
    <!-- API recipes -->

    <div>
      <div class="recipe-preview">
        <a href="https://icons8.com/icon/43628/facebook-like"></a>
        <table class="center">
          <tr>
            <td>
              {{ recipe.readyInMinutes }} minutes
              <img class="center" src="../assets/clock.png" />
            </td>
            <td></td>
            <td></td>
            <td id="ppp">,,,</td>
            <td>
              {{ recipe.aggregateLikes }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g fill="#ffffff">
                    <path
                      d="M79.12,10.32c-1.89469,0 -3.44,1.54531 -3.44,3.44v26.66l-17.2,34.4v-6.02c0,-1.89469 -1.54531,-3.44 -3.44,-3.44h-44.72c-0.98094,0 -1.92156,0.44344 -2.58,1.1825c-0.65844,0.73906 -0.98094,1.70656 -0.86,2.6875l10.32,82.56c0.215,1.72 1.70656,3.01 3.44,3.01h34.4c1.89469,0 3.44,-1.53187 3.44,-3.44v-3.44h3.9775c1.42438,4.00438 5.29438,6.88 9.7825,6.88h65.36c7.59219,0 13.76,-6.16781 13.76,-13.76c0,-2.83531 -0.90031,-5.44219 -2.365,-7.6325c5.36156,-1.88125 9.245,-7.01437 9.245,-13.0075c0,-3.37281 -1.20937,-6.42312 -3.225,-8.815c3.99094,-2.40531 6.665,-6.82625 6.665,-11.825c0,-3.37281 -1.20937,-6.42312 -3.225,-8.815c3.99094,-2.40531 6.665,-6.82625 6.665,-11.825c0,-7.59219 -6.16781,-13.76 -13.76,-13.76h-50.31c2.09625,-6.63812 5.59,-18.51687 5.59,-24.08c0,-12.95375 -9.48687,-30.96 -18.8125,-30.96zM82.56,17.2h5.2675c3.15781,0 11.9325,11.97281 11.9325,24.08c0,5.38844 -4.81062,20.92219 -6.665,26.445c-0.36281,1.04813 -0.215,2.21719 0.43,3.1175c0.645,0.90031 1.69313,1.3975 2.795,1.3975h55.04c3.78938,0 6.88,3.09063 6.88,6.88c0,3.78938 -3.09062,6.88 -6.88,6.88h-3.44c-1.90812,0 -3.44,1.53188 -3.44,3.44c0,1.90813 1.53188,3.44 3.44,3.44c3.78938,0 6.88,3.09063 6.88,6.88c0,3.78938 -3.09062,6.88 -6.88,6.88h-3.44c-1.90812,0 -3.44,1.53188 -3.44,3.44c0,1.90813 1.53188,3.44 3.44,3.44c3.78938,0 6.88,3.09063 6.88,6.88c0,3.78938 -3.09062,6.88 -6.88,6.88h-6.88c-1.90812,0 -3.44,1.53188 -3.44,3.44c0,1.90813 1.53188,3.44 3.44,3.44c3.78938,0 6.88,3.09063 6.88,6.88c0,3.78938 -3.09062,6.88 -6.88,6.88h-65.36c-1.89469,0 -3.44,-1.54531 -3.44,-3.44c0,-1.90812 -1.54531,-3.44 -3.44,-3.44h-6.88v-58.48h1.72c1.30344,0 2.52625,-0.76594 3.1175,-1.935l18.92,-37.84c0.24188,-0.47031 0.3225,-0.9675 0.3225,-1.505zM14.19,72.24h37.41v75.68h-27.95zM39.56,130.72c-2.84875,0 -5.16,2.31125 -5.16,5.16c0,2.84875 2.31125,5.16 5.16,5.16c2.84875,0 5.16,-2.31125 5.16,-5.16c0,-2.84875 -2.31125,-5.16 -5.16,-5.16z"
                    />
                  </g>
                </g>
              </svg>
            </td>
          </tr>
          <tr style="text-align:center;">
            <div
              style="text-align:center;"
              v-if="this.$root.store.username != undefined && !privateRecipes && !myRecipes"
            >
              <td v-if=" saveTheRecipe == true || saved == true">
                <b-icon-heart-fill variant="danger"></b-icon-heart-fill>
              </td>

              <td v-else>
                <b-icon-heart @click="heart"></b-icon-heart>
              </td>

              <td v-if="watched">
                <img class="center" src="../assets/visible.png" />
              </td>
              <td v-if="recipe.glutenFree">
                <img class="center" src="../assets/no-gluten.png" />
              </td>
              <td v-if="recipe.vegan">
                <img class="center" src="../assets/vegan-food.png" />
              </td>
              <td v-if="recipe.vegetarian">
                <img class="center" src="../assets/vegetarian-food-symbol.png" />
              </td>
            </div>
            <div v-else>
              <td v-if="recipe.glutenFree">
                <img class="center" src="../assets/no-gluten.png" />
              </td>
              <td v-if="recipe.vegan">
                <img class="center" src="../assets/vegan-food.png" />
              </td>
              <td v-if="recipe.vegetarian">
                <img class="center" src="../assets/vegetarian-food-symbol.png" />
              </td>
            </div>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      saveTheRecipe: false,
      watched: false,
      saved: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    privateRecipes: {
      type: Boolean,
      required: false,
      default: false
    },
    myRecipes: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    async update() {
      if (this.$root.store.username != undefined) {
        try {
          const watch_and_save_response = await this.axios.get(
            this.$root.store.BASE_URL +
              "/users/recipeInfo/" +
              "[" +
              this.recipe.id +
              "]"
          );

          this.watched = watch_and_save_response.data[this.recipe.id].watched;
          this.saved = watch_and_save_response.data[this.recipe.id].saved;
        } catch (error) {
          console.log(error);
          return;
        }
      }
    },

    async heart() {
      this.saveTheRecipe = true;
      try {
        if (this.$root.store.username != undefined) {
          await this.axios.put(
            this.$root.store.BASE_URL +
              "/users/add_to_favorites/recipeId/" +
              this.recipe.id
          );
        }
      } catch (error) {
        console.log("error.response.status", error.response.status);
        return;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.main-preview {
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  /* box-shadow: 0px 0px 10px 10px #d1d1e9; */
}
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
  font-weight: bold;
  text-align: center;
}
.recipe-preview > .recipe-body {
  width: 100px;
  height: 100px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  /* margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto; */
  display: block;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 20px;
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.recipe-image:hover {
  -moz-box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px rgb(255, 255, 255);
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
  font-size: 28pt;
  font-weight: bold;
  font-family: "calibri";
  color: white;
  font-weight: bold;
}

.recipe-preview .recipe-footer .recipe-title {
  font-weight: bold;
  padding: 15px 15px;
  width: 100%;
  font-size: 30pt;
  font-family: "calibri";
  color: white;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  margin-top: 60px;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
  font-weight: bold;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
  font-weight: bold;
}

.col {
  border-style: solid;
  border-width: 0.5px;
  color: white;
  width: 50%;
  font-weight: bold;

  padding: 20px 30px;
}
.center {
  margin-left: auto;
  margin-right: auto;
  /* position: fixed; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
}

#image {
  height: 250px;
  width: 320px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  /* align-content: center; */
}

#ppp {
  opacity: 0;
}

#td {
  /* align-content: center; */
  /* margin-left: auto;
  margin-right: auto; */

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* #logo {
   margin-left: auto;
  margin-right: auto;
    align-content: center;
} */

#image_div {
  /* width: 100%;
  height: 100%; */
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-repeat: no-repeat;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
