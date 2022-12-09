<template>
  <div class="post">
    <div class="postHeader">
      <img class="profilePic" src="@/assets/logo.png" alt="logo">
      <p>{{content.createTime}}</p>
    </div>
    <div class="postBody">
      <template v-if="content.image != null">
        <img class="postPic" v-bind:src="content.image" alt="Post's image" />
      </template>
      <p>{{content.post}}</p>
    </div>
    <div class="postFooter">
      <img class="like" v-on:click="IncreaseLikes" src="@/assets/like.png" alt="like"/>
      <p class="likes" v-if="content.likes >= 0 && content.likes !== 1">{{content.likes}} likes</p>
      <p class="likes" v-if="content.likes === 1">{{content.likes}} like</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props:{
    content: Object,
  },
  methods: {
    IncreaseLikes: function (){
      this.$store.commit("increaseLike", this.$.vnode.key)
    }
  }
}

</script>

<style scoped>

</style>