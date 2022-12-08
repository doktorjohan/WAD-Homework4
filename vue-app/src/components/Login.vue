<template>
  <div class="signup">
    <div>
      <form @submit.prevent="login()">
        <div>
          <label>Email</label>
          <input type="email" id="email" v-model="user.email" placeholder="Email" required>
        </div>
        <div>
          <label>Password</label>
          <input type="Password" id="password" v-model="user.password" placeholder="Password" required>
        </div>
        <input class="loginButton" type="submit" @click.stop.prevent="login()" value="Log in">
      </form>
    </div>
  </div>

</template>

<script>
import loginUser from "@/loginUser";

export default {
  name: "Login",
  data() {
    return {
      user: {
        "email": "",
        "password": ""
      }
    }
  },

  methods: {
    login() {
      const successLogin = loginUser({"email": this.user.email, "password": this.user.password})
    }
  }
}

</script>

<style scoped>
.signup {
  position: center;
  border-radius: 10px;
  background-color: #9699a1;
  width: fit-content;
  margin: 5% auto;
  padding: 2%;
}

div div {
  position: relative;
  margin: 2% auto;
  display: flex;
  justify-content: center;
}

label {
  display: inline-block;
  align-content: baseline;
  width: 100px;
  text-align: right;
  margin: auto;
  margin-right: 5px;
}


.loginButton {
  background-color: #4267B2;
  color: white;
  border-color: #4267B2;
  border-width: thin;
  width: 100px;
  height: 20px;
  position: center;
  margin: auto;
  padding: 3px;
  cursor: pointer;

}

.loginButton:hover {
  opacity: 85%;
}

div form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

form input {
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>