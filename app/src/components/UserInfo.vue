<template>
  <div class="test">
    <p>Name {{ User.UserName }}</p>
    <p>Email {{ User.Email }}</p>
    <p>Login {{ User.Login }}</p>
    <p>Password {{ User.Password }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'userInfoComponent',
    data: () => {
      return {
        User: {}
      }
    },
    mounted() {
        let id = this.$route.params.id;
        axios.get('http://localhost:3000/user/' + id, {
        'Access-Control-Allow-Origin': '*'
      }).then(response => {
        console.log(response.data);
        this.User = response.data;
      });
    }
  }
</script>
