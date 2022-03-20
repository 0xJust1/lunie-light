<template>

</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['notifications']),
  },
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
}
</style>
