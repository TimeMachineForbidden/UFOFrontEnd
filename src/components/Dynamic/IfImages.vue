<template>
    <div class="center-container">
        <div class="number1" style="color:#00BFFF;">
            With photos:{{ number1 }}
        </div>
        <div class="number2" style="color:#7CFC00;">
            Without photos:{{ number2 }}
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            number1: 0,
            number2: 0
        };
    },
    mounted() {
        this.fetchData(); // Fetch initial data
        this.interval = setInterval(this.fetchData, 1000); // Fetch data every 1 second
    },
    beforeDestroy() {
        clearInterval(this.interval); // Clear the interval when the component is destroyed
    },
    methods: {
        fetchData() {
            axios.get('http://49.232.241.171:8080/api/ufo/hasImageCount')
                .then(response => {
                    this.number1 = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            axios.get('http://49.232.241.171:8080/api/ufo/noImageCount')
                .then(response => {
                    this.number2 = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
};
</script>
  
<style>
.center-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.number1 {
    font-size: 35px;
}

.number2 {
    font-size: 35px;
}
</style>