<template>
  <div class="login">
    <div>
      <form @submit.prevent="registerMe">
        <div>
          <label>Email</label>
          <input type="email" id="email" required v-model="user.email" placeholder="Email">
        </div>
        <div>
          <label>Password</label>
          <input type="Password" id="password" required v-model="user.password" placeholder="Password">
        </div>
        <div class="buttons">
          <input class="signUpButton" type="submit" @click="LogIn()" value="Login">
          <p>or</p>
          <button @click='this.$router.push("/signup")' class="signUpButton">Signup</button>
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
        password: "",
        email: ""
      }
    }
  },

  methods: {
    LogIn() {
      const success = loginUser({"email": this.user.email,"password": this.user.password})
      if (!success) {
        alert("Incorrect email or password")
        return false
      } else {
        console.log("Successful login")
        //this.$router.push("/");
        location.assign("/")

      }
    },
  }
}
</script>

<style scoped>
.login {
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


.signUpButton {
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

.signUpButton:hover {
  opacity: 85%;
}

div form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

form div {
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
}
.buttons {
  display: flex;
  justify-content: center;

}
</style>