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
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', {'Access-Control-Allow-Origin': '*'}).then(response => {
        let result = response.data.bpi;
        for(let el in result){
          this.Users.push(result[el]);
        }
      });
    }
  }
</script>
