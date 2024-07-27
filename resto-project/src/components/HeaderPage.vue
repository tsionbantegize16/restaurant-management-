<template>
    <div class="header">
        <img class="logo" src="../assets/photo.png" alt="Logo" />
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/AddPage">Add Restaurant</router-link>
            <a v-on:click="logout" href="#">Logout</a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: deepskyblue;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: white;
}

.logo {
    width: 50px;
    border-radius: 50%;
}

nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: skyblue;
}
</style>
