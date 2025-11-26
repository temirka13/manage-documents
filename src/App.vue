<template>
  <header>
    <h1>Manage documents</h1>
    <p>username</p>
  </header>
  <main>
    <DocumentsView />
  </main>
</template>

<script setup lang="ts">
import DocumentsView from './views/DocumentsView/index.vue';

</script>

<style lang="scss" scoped>
main {
  margin-top: 35px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }
}
</style>
