<template>
    <div>
        <Header />
        <div class="container">
            <h1>Welcome to the Add Restaurant Page</h1>
            <form class="add">
                <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" class="input-field"/>
                <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" class="input-field"/>
                <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" class="input-field"/>
                <button type="button" v-on:click="addRestaurant" class="submit-button">Add New Restaurant</button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from './HeaderPage.vue'
import axios from 'axios';

export default {
    name: 'AddPage',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/resturant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 201) {
                this.$router.push({ name: 'HomePage' });
            }
            console.warn("result", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin: 0 auto;
    width: 80%;
}

h1 {
    color: deepskyblue;
    margin-bottom: 20px;
}

.add {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-field {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid deepskyblue;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.submit-button {
    background-color: deepskyblue;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: skyblue;
}
</style>
