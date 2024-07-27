<template>
    <img class="logo" src="../assets/photo.png" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="signup">Sign Up</button>
        <p>
            <router-link to="LoginPage">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from  'axios'
export default{
    name :'SignUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
         async signup()
        {
            let result = await axios.post("http://localhost:3000/user",{
                email:this.email,
                password:this.password,
                name:this.name
            });
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
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
}
</script>
<style scoped>
.logo {
    width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for hover/focus */
}
/* Add a subtle hover effect */
.register input:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
/* Add a focus effect for better accessibility */
.register input:focus {
  outline: none;
  border-color: deepskyblue;
  box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
}
.register button {
  width: 320px; /* Slightly wider than the input fields */
  height: 50px;
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: none;
  border-radius: 25px; /* Rounded corners */
  background: linear-gradient(45deg, skyblue, deepskyblue); /* Gradient background */
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for hover/focus */
}

/* Add a hover effect */
.register button:hover {
  background: linear-gradient(45deg, deepskyblue, skyblue); /* Reverse gradient */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Add a focus effect for better accessibility */
.register button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
}

</style>