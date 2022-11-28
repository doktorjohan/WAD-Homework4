<template>
  <div class="addPost">
    <form action="index.html" method="POST">
      <table>
        <tr>
          <td>Post body</td> <!-- Should be required -->
          <td><textarea placeholder="textarea" rows="5" cols="13" required></textarea></td>
        </tr>
        <tr>
          <td>Select file</td>
          <td>
            <input type="file" id="myFile" name="filename">
          </td>
        </tr>
      </table>
      <!-- <button><a href="index.html">Create post</a></button> -->
      <input class="loginButton" type="submit" value="Create post">
    </form>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: 'AddPostView',
  components: {Footer}
}
</script>

<style scoped>
.addPost {
  position: center;
  border-radius: 10px;
  padding: 2%;
  margin: 5% auto;
  width: fit-content;
  background-color: #9699A1FF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

textarea {
  margin-left: 5%;
  resize: none;
}

#myFile { /* ID selector */
  margin-left: 5%;
  border-color: grey;
  border-width: thin;
  width: 100px;
  height: 20px;
  color: transparent;
  background: transparent;
}

table td { /*Descendant Selector*/
  vertical-align: top;
  text-align: left;
}

table > tr { /* Child Selector */
  border-spacing: 5px;
}

table + input { /*  Adjacent Sibling Selector */
  display: flex;
  background-color: #4267B2;
  color: white;
  border-color: white;
  border-width: thin;
  width: 100px;
  height: 20px;
  margin: 10px auto;
  justify-content: center;

}

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