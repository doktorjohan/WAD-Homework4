<template>
  <div class="editPost">
    <div>
      <form>
        <div>
          <p class="lable">Contact us!</p>
        </div>
        <div>
          <p>GROUP: AL</p>
        </div>
        <div><p>ARTISTS: JOHAN HOLLAK, ARTUR KREEGIPUU, CARL-CHRISTJAN BOGOSLOVSKI</p></div>
        <img src="@/assets/yahyo2wjhnk61.jpg"/>
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "ContactView",
  components: {Footer}
}
</script>

<style scoped>
.editPost {
  position: center;
  border-radius: 100px;
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
  font-size: 100px;
  margin: auto;
  color: ivory;
  font-family: "Comic Sans MS",serif;
}




div form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}



p {
  font-size: revert;
  margin: auto;
  color: ivory;
  font-family: "Comic Sans MS",serif;
}
footer {
  position: relative;
  background-color: #69a2b0ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
  margin-top: auto;
  margin-bottom: 0px;

}
img {
  border-radius: 100px;
}
</style>