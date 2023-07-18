<template>
  <div class="main">
    <Drawer />
    <section class="steps">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import Drawer from "@/components/Drawer.vue";

  export default {
    name: "Home",
    components: {
      Drawer,
    },
    computed: {
      ...mapGetters(['activeStep'])
    }
  };
</script>

<style lang="scss">
 @import "../styles/base/styles.scss";

  .main {
    height: 600px;
    max-width: 940px;
    width: 100%;
    display: flex;
    background-color:$white;
    border-radius: 15px;
    padding: 16px;
  }

  .steps {
    position: relative;
    width: calc(100% - 275px);
    padding: 39px 9% 0 11%;
  }

  .step {
    height: 100%;
    display: flex;
    flex-direction: column;

    &_header {
      margin-bottom: 6px;

      h2 {
        color: $marine-blue;
        font-size: 32px;
        margin-bottom: 12px;
      }

      p {
        color: $color-gray;
        font-size: 17px;
        letter-spacing: -0.03em;
      }
    }
  }

.btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }


  @media(max-width: 977px) {
    .main {
      max-width: 100%;
      width: 100%;
      height: auto;
      flex-direction: column;
      padding: 0;
      background-color: transparent;
    }

    .steps {
      width: 100%;
      height: 100vh;
      margin: -173px auto 0;
      padding: 98px 0 0;
    }

    .step {
      &_mobile {
        width: calc(100% - 30px);
        background-color: $white;
        border-radius: 10px;
        margin: 0 auto 30px;
        padding: 33px 25px 20px;
      }

      &_header {
        margin-bottom: 22px;
        h2 {
          font-size: 24px;
        }

        p {
          line-height: 23px;
        }
      }
    }

    .btns {
      height: 80px;
      padding: 15px;
      background-color: $white;
    }
  }
</style>