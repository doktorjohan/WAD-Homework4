<template>
  <AddPost></AddPost>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import AddPost from "@/components/AddPost";
export default {
  name: 'AddPostView',
  components: {AddPost, Footer}
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