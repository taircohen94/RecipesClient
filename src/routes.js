import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [{
        path: "/",
        name: "main",
        component: Main,
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("./pages/RegisterPage"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("./pages/LoginPage"),
    },
    {
        path: "/search",
        name: "search",
        // meta: {
        //     requiresAuth: true,
        // },
        component: () =>
            import ("./pages/SearchPage"),

    },
    {
        path: "/recipe/:recipeId",
        name: "recipe",
        component: () =>
            import ("./pages/RecipeViewPage"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ("./pages/AboutPage"),
    },
    {
        path: "/myFamily",
        name: "myFamily",
        component: () =>
            import ("./pages/MyFamilyRecipesPage"),
    },
    {
        path: "/myFavorites",
        name: "myFavorites",
        component: () =>
            import ("./pages/MyFavoritesPage"),
    },
    {
        path: "/myRecipes",
        name: "myRecipes",
        component: () =>
            import ("./pages/MyRecipesPage"),
    },
    {
        path: "*",
        name: "notFound",
        component: NotFound,
    },
];


export default routes;