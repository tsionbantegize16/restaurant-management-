<template>
  <img class="logo" src="../assets/photo.png" />
  <h1>Login</h1>
  <div class="Login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="Login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  data()
  {
    return{
      email:'',
      password:''
    }
  },
  methods:{
    async Login()
    {
     let result = await axios.get(
      `http://localhost:3000/user?email=${this.email}&password=${this.password}`
     )
     if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomePage'})
            }
     
      console.warn(result)
    }
  },
  mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
    {
        this.$router.push({name:'HomePage'})

    }

    }
};
</script>
