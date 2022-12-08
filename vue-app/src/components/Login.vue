<template>
  <div class="signup">
    <div>
      <form @submit.prevent="login()">
        <div>
          <label>Email</label>
          <input type="email" id="email" required v-model="user.email" placeholder="Email">
        </div>
        <div>
          <label>Password</label>
          <input type="Password" id="password" required v-model="user.password" placeholder="Password">
        </div>
        <div class="buttons">
          <input class="loginButton" type="submit" @click.stop.prevent="login()" value="Log in">
          <p>or</p>
          <button class="loginButton" @click='this.$router.push("/signup")'>Signup</button>
        </div>
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
        email: "",
        password: ""
      }
    }
  },

  methods: {
    login() {
      const successLogin = loginUser({"email": this.user.email, "password": this.user.password})
      if (!successLogin){
        alert("Incorrect email or password")
      } else {
        console.log("successful login")
        //this.$router.push("/");
        location.assign("/");
      }
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
  border-radius: 10px;


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

.buttons {
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 5px;
}
</style>