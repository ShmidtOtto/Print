<template>
  <div class="test">
    <b-table striped hover :items="Users"></b-table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'testComponent',
    data: () => {
      return {
        Users: []
      }
    },
    mounted() {
      console.log("test");
      axios.get('http://localhost:3000/users', {
        'Access-Control-Allow-Origin': '*'
      }).then(response => {
        console.log(response.data);
        for(let i = 0, length = response.data.length; i < length; i++){
            this.Users.push(response.data[i]);
        }
      });
    }
  }
</script>
