<template>
  <header class="header">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Log in</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
    </ul>
    <div class="dropdown">
      <img src="@/assets/logo.png" class="dropbtn" width="50"
             height="50"/>
<!--      <div id="drop" class="dropdown-content">-->
<!--        <router-link to="/login">Log in</router-link>-->
<!--        <a href="https://www.youtube.com/watch?v=rzLIUgnKY40">DeezLouize@hot.ee</a>-->
<!--        <a href="https://www.youtube.com/watch?v=d5xPnWNVr1c">logout</a>-->
<!--      </div>-->
    </div>
  </header>

</template>

<script>
import HomeView from "@/views/HomeView";
import SignUp from "@/components/SignUp";
export default {
  name: "Header",
  components: {HomeView, SignUp},
  methods:{
    dropDownFunction:function(){
      document.getElementById("drop").classList.toggle("show")
      console.log("Button pressed")
    },

  },
  mounted() {
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }

        }
      }
    }
  }

}
</script>

<style scoped>
.header {
  padding-top: .5em;
  padding-bottom: .5em;
  background-color: #69a2b0ff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav {
  margin-top: 5px;
  display: flex;
}

a {
  color: #C2F8CB;
  text-decoration: none;
}

.nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #34495e;
  font-size: .99em;
}

.nav a:hover {
  background-color: #957186;
  border-radius: 10px;
}

#logo {
  margin: 5px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  right: 0px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Button */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* Dropdown button on hover & focus */
/*.dropbtn:hover, .dropbtn:focus {*/
/*  background-color: #2980B9;*/
/*}*/

.show {
  display: block;
}

</style>