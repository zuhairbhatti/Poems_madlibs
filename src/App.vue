<template>
  <div id="app" class="container">
    <div id = "upper">
    <nav id = "top" class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link">Add Poem</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">All Poems</router-link>
        </li>
      </ul>
    </nav>
    </div>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
      
    </transition>
      <li class="nav-item">
        <router-link :to="{ name: 'Index' }" class="nav-link">All Poems</router-link>
      </li>
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .9s
    }
    .fade-enter, .fade-leave-active {
      opacity: 50%;
    }
    .gap {
      margin-top: 50px;
      margin-left: 0px;
    }
    #app{
    }
    #top{
      background-color: black;
      
    }
    .nav-item{
      font-weight: bold;
    }
    #upper{
      background-color: black;
    }
    .container{
      width: 100vh;
      background-image: linear-gradient(to bottom, rgb(255, 0, 183), blue);

    }
</style>
