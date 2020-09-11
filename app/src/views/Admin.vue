<template>
  <div class="test">
    <UsersGrid></UsersGrid>
  </div>
</template>

<script>
import UsersGrid from '../components/AdminUsersGrid.vue';
export default {
  name: 'AdminPage',
  components: {
    UsersGrid: UsersGrid
  }
}
</script>
