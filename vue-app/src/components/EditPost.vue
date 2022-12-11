<template>
  <div class="editPost">
    <div>
      <form>
        <div>
          <p class="lable">A Post</p>
        </div>
        <div>
          <label>Body</label>
          <input type="text" required v-model="post.post" placeholder="Post body">
        </div>
        <div class="buttons">
          <button class="button" @click="updatePost">Update</button>
<!--          <input class="button" type="submit" value="Update">-->
          <button class="button" @click="deletePost">Delete</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  data() {
    return {
      post: {

        id: "",
        post: "",
        created_at: "",
        likes: "",
        user_id: "",
        image_link: "",
      }
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data[0]))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      console.log(this.post.id)
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },

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