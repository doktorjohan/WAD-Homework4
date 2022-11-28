<template>
  <Header/>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1dedeff;
}
</style>


<script>
import Header from "@/components/Header";
export default {
  components: {Header}
}

</script>