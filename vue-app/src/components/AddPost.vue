<template>
  <div class="editPost">
    <div>
      <form>
        <div>
          <p class="lable">Add Post</p>
        </div>
        <div>
          <label>Body</label>
          <input type="text" required v-model="postBody" placeholder="Post body">
        </div>
        <div class="buttons">
          <input class="button" type="submit" @click="submitPost()" value="Add">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {addNewPost} from "@/apiWrappers";

export default {
  name: "AddPost",

  data() {
    return {
      postBody: ""
    }
  },
  methods: {

    submitPost() {
      addNewPost({post: this.postBody})
    }

  }
}
</script>

<style scoped>
.editPost {
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
  margin-right: 15px;
}
.lable {
  margin: auto;
}


.button {
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

.button:hover {
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
form input {
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>