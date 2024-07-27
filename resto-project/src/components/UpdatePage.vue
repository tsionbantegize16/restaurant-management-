<template>
    <div>
        <Header />
        <div class="container">
            <h1> Welcome to the Update Restaurant Page</h1>
            <form class="add">
                <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" class="input-field"/>
                <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" class="input-field"/>
                <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" class="input-field"/>
                <button type="button" v-on:click="updateRestaurant" class="submit-button">Update Restaurant</button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from './HeaderPage.vue';
import axios from 'axios';

export default {
    name: 'UpdatePage',
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
        async updateRestaurant() {
            console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/resturant/" + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 200) {
                this.$router.push({ name: 'HomePage' });
            }
            console.warn("result", result)
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        const result = await axios.get('http://localhost:3000/resturant/' + this.$route.params.id);
        console.warn(result.data);
        this.restaurant = result.data;
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
