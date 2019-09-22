<template>
  <div class="wsw">
    <div class="sidebar" />
    <Main class="main" />
  </div>
</template>

<script>
import Main from "@/components/Main"
export default {
  name: 'Wsw',
  components: {
    Main
  },
}
</script>

<style scoped>
.wsw {
  display: flex;
  max-width: 100%;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background-color: rgb(36, 41, 46);
  flex-grow: 0;
  flex-shrink: 0;
}

.main {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
