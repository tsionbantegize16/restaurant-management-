<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 100px;
}
.register input , .Login input , .add input{
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
.register button , .Login button ,.add button{
  width: 320px; /* Slightly wider than the input fields */
  height: 50px;
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: none;
  border-radius: 25px; /* Rounded corners */
  background: linear-gradient(
    45deg,
    skyblue,
    deepskyblue
  ); /* Gradient background */
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for hover/focus */
}

/* Add a hover effect */
.register button:hover {
  background: linear-gradient(
    45deg,
    deepskyblue,
    skyblue
  ); /* Reverse gradient */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Add a focus effect for better accessibility */
.register button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
}
</style>


