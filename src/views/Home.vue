<template>
  <div class="home">
    <div class="header">
      <div class="nav"></div>
      <div class="login"></div>
    </div>
    <div class="container">
      <div class="menus"></div>
      <div class="main">
        <div class="app" :key="index" v-for="(app, index) in 10">
          <div class="app-icon"></div>
          <div class="app-name">app name</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    padding: 10px;
    height: 160px;
    background: linear-gradient(to bottom, rgb(35, 180, 220), rgb(0, 110, 215));
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgb(0, 120, 190), rgb(10, 140, 205));
    .nav {
      width: 1400px;
      height: 125px;
      border-radius: 20px;
      border: 1px solid rgb(90, 170, 230);
    }
    .login {
      width: 400px;
      height: 125px;
    }
  }
  .container {
    height: calc(100% - 160px);
    display: flex;
    .menus {
      width: 350px;
      background-color: rgb(240, 240, 240);
      border-right: 1px solid rgb(204, 204, 204);
    }
    .main {
      padding: 50px;
      width: calc(100% - 350px);
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: flex-start;
      .app {
        margin: 10px 52px;
        height: 170px;
        width: 135px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;
        .app-icon {
          height: 130px;
          width: 130px;
          border-radius: 50%;
          background-color: rgb(236, 36, 36);
        }
        .app-name {
          height: 30px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
