<template>
  <div class="post">
    <div class="postHeader">
      <img class="profilePic" src="@/assets/logo.png" alt="logo">
      <p>{{content.userName}}</p>
      <p>{{content.createTime}}</p>
    </div>
    <div class="postBody">
      <template v-if="content.image != null">
        <img class="postPic" v-bind:src="content.image" alt="Post's image" />
      </template>
      <p>{{content.post}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props:{
    content: Object,
  }
}

</script>

<style scoped>

</style>