<template>
  <Login/>
  <Footer/>
</template>

<script>
import Header from "@/App";
import Login from "@/components/LogIn";
import Footer from "@/components/Footer";
export default {
  name: "LogInView.vue",
  components: {Footer, Login, Header}
}
</script>

<style scoped>
footer {
  background-color: #69a2b0ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
  margin-top: auto;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;


}
</style>