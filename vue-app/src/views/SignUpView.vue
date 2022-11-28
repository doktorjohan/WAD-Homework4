<template>
  <SignUp/>
  <Footer/>
</template>
<script>
import Footer from "@/components/Footer";
import SignUp from "@/components/SignUp";
export default {
  name: 'SignUpView',
  components: {SignUp, Footer}
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