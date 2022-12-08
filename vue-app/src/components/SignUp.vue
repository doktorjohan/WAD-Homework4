<template>
  <div class="login">
    <div>
      <form @submit.prevent="registerMe">
        <div>
          <label>Email</label>
          <input type="email" id="email" v-model="user.email" placeholder="Email" required>
        </div>
        <div>
          <label>Password</label>
          <input type="Password" id="password" v-model="user.password" placeholder="Password" required>
        </div>
        <input class="signUpButton" type="submit" @click.stop.prevent="registerMe()" value="Sign up">
      </form>
    </div>
  </div>
</template>

<script>
import signupUser from "@/signupUser";

export default {

  name: "SignUp",
  data() {
    return {
      user: {
        password: "",
        email: ""
      }
    }
  },

  methods: {
    submit() {
      const success = signupUser({"email": this.user.email,"password": this.user.password})
      if (!success) {
        alert("Something went wrong")
        return false
      } else {
        console.log("user created success")
        this.$router.push("/");
      }
    },

    validatePassword(value) {
      const containsUppercase = /[A-Z]/.test(value);
      const containsLowercase = /[a-z]/.test(value);
      const containsNumber = /[0-9]/.test(value);
      const containsSpecial = /_/.test(value);
      const startUpper = /^[A-Z]/.test(value);
      return containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial &&
          startUpper
    },

    registerMe() {

      if (!this.validatePassword(this.user.password)) {
        alert("Password not valid. Password must start with an uppercase letter, " +
            "contain at least two lowercase characters, include at least one " +
            "numeric value, include the character '_' and start with an uppercase letter")
        return false; // stop here if form is invalid
      } else {
        this.submit()
      }
    },
  },

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

form input {
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>