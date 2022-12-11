<template>
  <div class="gridContainer">
    <div class="side"></div>
    <div id="feed">
      <button class="logout" @click="Logout">Logout</button>
      <template v-for="post in postsList" :key="post.postId">
        <Post v-on:click.native="editPost(post.postId)" ref="p" v-bind:content="post"/>
<!--        <Post ref="p" v-bind:content="post"/>-->
      </template>
      <router-view/>
      <button class="resetLikes" v-on:click="this.$router.push('/addPost')">Add post</button>
    </div>
    <div class="side"></div>
  </div>
  <Footer/>
</template>

<script>

import Post from "@/components/Post";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {Footer, Post},
  data() {
    return {
      postsList: []
    };
  },
  computed: {
    postsList() {
      return this.$store.state.postsList
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts")
  },
  methods: {
    editPost(id) {
      console.log(id)
      this.$router.push('/posts/' + id)
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
    },

}
</script>

<style>
/* Feed of posts */
.gridContainer {
  display: grid;
  grid-template-columns: auto 50% auto;
}

#feed {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
}
.logout{
  position: center;
  border-radius: 10px;
  background-color: #4267B2;
  padding: 5px;
  margin: auto;
  width: auto;
  cursor: pointer;
}
.side {
  background-color: #c2f8cbff;
  border-radius: 10px;
  margin: 10px;
  width: auto;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
}

p ~ span {
  color: red;
}
.postHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.postBody {
  padding: 5px;
}

.postFooter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: transparent;
}

.post {
  background-color: #9699a1;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;

}
.post:hover{
  cursor: pointer;
}
.profilePic {
  width: 25px;
  height: 25px;

}

.like {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.like:hover {
  opacity: 30%;
}
.likes {
  margin-right: 0px;
}
.postPic {
  margin: auto;
  width: 100%;
  height: 100%;
}

.resetLikes {
  position: center;
  border-radius: 10px;
  background-color: #4267B2;
  padding: 5px;
  margin: auto;
  width: auto;
  cursor: pointer;
}
.resetLikes:hover{
  opacity: 70%;
}

footer {
  position: absolute;
  background-color: #69a2b0ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
  margin-top: auto;
  margin-bottom: 0px;
}
</style>
