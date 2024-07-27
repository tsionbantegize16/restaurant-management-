<template>
    <div>
        <Header />
        <div class="container">
            <h1>Hello {{ name }}, Welcome to the Home Page</h1>
            <input type="text" v-model="search" placeholder="Search Restaurants" class="search-bar"/>
            <table class="restaurant-table">
                <thead>
                    <tr>
                        <th @click="sortTable('id')">ID</th>
                        <th @click="sortTable('name')">Name</th>
                        <th @click="sortTable('contact')">Contact</th>
                        <th @click="sortTable('address')">Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filteredRestaurants" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.contact }}</td>
                        <td>{{ item.address }}</td>
                        <td>
                            <router-link :to="'/UpdatePage/'+item.id" class="action-link">Update</router-link>
                            <button @click="deleteRestaurant(item.id)" class="action-button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './HeaderPage.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: [],
            search: '',
            currentPage: 1,
            itemsPerPage: 5,
            sortKey: '',
            sortOrder: 1,
        }
    },
    components: {
        Header
    },
    computed: {
        filteredRestaurants() {
            let filtered = this.restaurants.filter(item => 
                item.name.toLowerCase().includes(this.search.toLowerCase()) ||
                item.contact.toLowerCase().includes(this.search.toLowerCase()) ||
                item.address.toLowerCase().includes(this.search.toLowerCase())
            );
            
            if (this.sortKey) {
                filtered = filtered.sort((a, b) => {
                    let result = (a[this.sortKey] > b[this.sortKey]) ? 1 : (a[this.sortKey] < b[this.sortKey]) ? -1 : 0;
                    return result * this.sortOrder;
                });
            }
            
            return filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.restaurants.length / this.itemsPerPage);
        }
    },
    methods: {
        sortTable(key) {
            this.sortKey = key;
            this.sortOrder *= -1;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/resturant/"+id);
            console.warn(result)
            if(result.status==200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if (user) {
                this.name = JSON.parse(user).name;
            } else {
                this.$router.push({ name: 'SignUp' });
            }

            let result = await axios.get("http://localhost:3000/resturant");
            this.restaurants = result.data;
        }
    },
    async mounted() {
        this.loadData(); 
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

.search-bar {
    width: 80%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid deepskyblue;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.restaurant-table {
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid deepskyblue;
}

.restaurant-table thead {
    background-color: deepskyblue;
    color: white;
}

.restaurant-table th, .restaurant-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
}

.restaurant-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

.restaurant-table tbody tr:hover {
    background-color: skyblue;
}

.pagination {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination button {
    background-color: deepskyblue;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination button:disabled {
    background-color: grey;
    cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
    background-color: skyblue;
}

.action-link {
    background-color: deepskyblue;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.action-link:hover {
    background-color: skyblue;
}

.action-button {
    background-color: deepskyblue;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 5px;
}

.action-button:hover {
    background-color: skyblue;
}
</style>
