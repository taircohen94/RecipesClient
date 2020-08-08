<template>
  <div class="container">
    <br />
    <h1 style="text-align:centerl; color:white;">Login</h1>
    <br />
    <br />
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>Username is required</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>Password is required</b-form-invalid-feedback>
      </b-form-group>
      <br />
      <br />
      <b-button
        type="submit"
        variant="danger"
        style="width:100px; display:block; font-weight: 700;  border: 2px solid white;"
        class="mx-auto w-100"
      >Login</b-button>
      <br />
      <br />
      <div class="mt-2">
        Do not have an account yet ?
        <router-link to="register" id="texttt" variant="danger">Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >Login failed: {{ form.submitError }}</b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          this.$root.store.BASE_URL + "/Login",
          {
            username: this.form.username,
            password: this.form.password
          }
        );
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");
      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: space-evenly;
}
#h1 {
}
#texttt {
  color: rgba(240, 90, 90, 0.911);
  font-weight: 700;
}
</style>