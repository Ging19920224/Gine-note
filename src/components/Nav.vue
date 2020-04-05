<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <!-- Navbar content -->
      <a class="navbar-brand text-light ml-5 mr-5" href="#">
        <img class="rounded-circle" src="./../assets/images/images.jpg">
        Ging'Note
      </a>
      <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-light"></span>
      </button>
      <div class="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
          class="nav-item nav-link text-light link"
          to="/Github">
            Github
          </router-link>
          <router-link
          class="nav-item nav-link text-light link"
          to="/html">
            Html&CSS
          </router-link>
          <router-link
          class="nav-item nav-link text-light link"
          to="/">
            Javascript
          </router-link>
          <router-link
          class="nav-item nav-link text-light link"
          to="/Vue">
            Vue
          </router-link>
          <!-- <router-link
          class="nav-item nav-link text-light link"
          to="/PHP">
            PHP
          </router-link> -->
          <router-link
          class="nav-item nav-link text-light link"
          to="/Tool">
            套件＆工具
          </router-link>
          <router-link
          class="nav-item nav-link text-light link"
          to="/Web">
            教學平台
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
  .navbar img {
    width: 30px;
    height: 30px;
  }
  .link {
    &:hover{
      border-bottom: 1px solid #fff;
    }
  }
</style>