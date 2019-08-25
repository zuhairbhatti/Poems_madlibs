<template>
  <div id="app" class="container" >
    <div id = "upper" style="margin-right:0px">
    <nav id = "top" class="navbar navbar-expand-sm">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link" id = "firsthref">Add Poem</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link" id = "secondhref">All Poems</router-link>
        </li>
      </ul>
    </nav>
    </div>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
      
    </transition>
      <li class="nav-item" id = "bottom_link">
        <router-link :to="{ name: 'Index' }" id="bottomhref" class="nav-link">All Poems</router-link>
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
    #nav-link{
      color: white;


    }

    #firsthref{
      color: blue;
      font-size: 30px;
    }
    #secondhref{
      color: blue;
      font-size: 30px;
    }
    #top{
      background-image: linear-gradient(to bottom, rgb(255, 0, 183), #F700B9);
      /* width: 100vh; */
      
      
    }
    nav{
      width: 100vh;
            }
    .nav-item{
      font-weight: bold;

    }
    #upper{
            width: 100vh;

    }
    .container{
      width: 0%;
      background-image: linear-gradient(to bottom, rgb(255, 0, 183), blue);
      padding-left: 0%;
      padding-right: 0%;
      height: 100vh;

    }
    #bottom_link{
      color: blue;
      
    }
    #bottomhref{
      color:rgb(255, 0, 183);
      font-size: 30px;
      
    }
    body{
      background-image: linear-gradient(to bottom, rgb(255, 0, 183), blue);
      height: 100vh;
    }
</style>
