<template>
<nav class="component-navbar navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <router-link to="/" class="navbar-brand">home</router-link>
    <router-link to="/todos" class="navbar-brand">items</router-link>
    <router-link to="/labels" class="navbar-brand">labels</router-link>
    <!-- <img src="../../assets/images/logo.png" alt="brand" class="img-responsive"> {{ "navbar-title" | format-message }} -->
    
    </div>
  </div>
</nav>
</template>
<style lang="scss" src="./navbar.scss" scoped></style>
