<template>
  <article class="step">
    <div class="step_mobile">
      <img
        src="../assets/images/icon-thank-you.svg"
        alt=""
        width="80"
        height="80"
      />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at support@mail.com
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "FifthStep",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../styles/base/styles.scss";

.step_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 125px;
}
img {
  margin-bottom: 33px;
}
h2 {
  color: $marine-blue;
  font-size: 32px;
  margin-bottom: 12px;
}
p {
  color: $color-gray;
  font-size: 16px;
  line-height: 25px;
  font-weight: $medium;
  text-align: center;
}
@media (max-width: 977px) {
  .step_mobile {
    padding: 80px 30px 75px;
  }
  img {
    width: 55px;
    height: 55px;
    margin-bottom: 23px;
  }
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 15px;
  }
}
</style>
