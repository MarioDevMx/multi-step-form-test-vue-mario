<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "App",
    components: {  },
  };
</script>

<style lang="scss">
@import "./styles/base/styles.scss";
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $magnolia;
  font-family: $font-family;
  font-size: 16px;
}

.next-step{
  outline: 0 !important;
  border: 0 !important;
  height: 49px !important;
  min-width: 125px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: $marine-blue !important;
  border-radius: 8px !important;
  padding: 0 20px 2px !important;
  transition: .2s !important;
  cursor: pointer !important;
  font-size: 16px !important;
  color: $magnolia !important;
  font-weight: $medium !important;
  letter-spacing: 0.02em !important;
  font-family: $font-family !important;
  text-transform: unset !important;
}
.back {
  outline: 0 !important;
  border: 0 !important;
  display: inline-flex !important;
  background-color: transparent !important;
  color: $color-gray !important;
  font-size: 16px !important;
  font-weight: $medium !important;
  font-family: $font-family !important;
  cursor: pointer !important;
  text-transform: unset !important;
  &:hover {
  color: $marine-blue !important;
  }
}
@media(max-width: 991px) {
  #app {
    align-items: flex-start;
  }
  .btn {
    height: 40px !important;
    min-width: 95px !important;
    font-size: 14px !important;
    padding: 0 5px !important;
    border-radius: 4px !important;
  }
  .btn-back {
    font-size: 15px !important;
   }
}
</style>
