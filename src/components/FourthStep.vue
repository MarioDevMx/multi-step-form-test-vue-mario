<template>
  <div class="step">
    <div class="step_mobile">
      <header class="step_header">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </header>
      <form class="form">
        <div class="selected-plan" v-if="decodedObject.default == 1">
          <div class="_text">
            <div>
              {{ decodedObject.selectedPlan }}
              <span v-if="decodedObject.default == 0">(Monthly)</span>
              <span v-if="decodedObject.default == 1">(Yearly)</span>
            </div>
          </div>
          <div class="_price" v-if="decodedObject.default == 0">
            ${{ decodedObject.plan }}/mo
          </div>
          <div class="_price" v-if="decodedObject.default == 1">
            ${{ decodedObject.plan }}/yr
          </div>
        </div>
        <div class="selected-plan" v-if="decodedObject.default == 0">
          <div class="_text">
            <div>
              {{ decodedObject.selectedPlan }}
              <span v-if="decodedObject.default == 0">(Monthly)</span>
              <span v-if="decodedObject.default == 1">(Yearly)</span>
            </div>
          </div>
          <div class="_price" v-if="decodedObject.default == 0">
            ${{ decodedObject.plan }}/mo
          </div>
          <div class="_price" v-if="decodedObject.default == 1">
            ${{ decodedObject.plan }}/yr
          </div>
        </div>
        <div v-for="item in addPlan.addsPlan" :key="item">
          <div class="accessories-item" v-if="item.selection == 1">
            <div class="_text">
              {{ item.mainText }}
            </div>
            <div class="_price" v-if="decodedObject.default == 0">
              +${{ item.month }}/mo
            </div>
            <div class="_price" v-if="decodedObject.default == 1">
              +${{ item.year }}/yr
            </div>
          </div>
        </div>
      </form>
      <div class="total-price">
        <div class="total-text">
          Total
          <span v-if="decodedObject.default == 0">(per month)</span>
          <span v-if="decodedObject.default == 1">(per year)</span>
        </div>
        <div v-if="decodedObject.default == 0" class="total-general">
          +${{ plan2 }}/mo
        </div>
        <div v-if="decodedObject.default == 1" class="total-general">
          +${{ plan2 }}/yr
        </div>
      </div>
    </div>
    <div class="btns">
      <v-btn class="back" @click="back"> Go Back </v-btn>
      <v-btn class="next-step" @click="nextStep"> Next Step </v-btn>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FourthStep",
  data: function () {
    return {
      allAdd: [],
      errors: [],
      billing: "",
      sumGeneral: 0,
    };
  },
  methods: {
    nextStep() {
      this.$router.push("/fifth");
    },
    back() {
      this.$router.back();
      this.$store.commit("stepBackActive");
    },
  },

  computed: {
    ...mapGetters(["addPlan"]),
    decodedObject() {
      const encodedObject = this.$route.query.objeto;
      return JSON.parse(encodedObject);
    },
    plan2() {
      if (this.decodedObject.default == 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.billing = "Monthly";
        this.addPlan.addsPlan.forEach((pl) => {
          if (pl.selection == 1) {
            this.allAdd += pl.mainText;
            this.sumGeneral += pl.month;
          }
        });
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.billing = "Yearly";
        this.addPlan.addsPlan.forEach((pl) => {
          if (pl.selection == 1) {
            this.allAdd += pl.mainText;
            this.sumGeneral += pl.year;
          }
        });
      }
      return this.sumGeneral + this.decodedObject.plan;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/base/styles.scss";

.step {
  padding-bottom: 17px;
}
.form {
  background: $alabaster;
  border-radius: 8px;
  padding: 20px 25px 13px 20px;
  margin-bottom: 25px;
}
.selected-plan {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid $light-gray;
  margin-bottom: 5px;
}
._text {
  display: flex;
  flex-direction: column;
}
div {
  color: $marine-blue;
  font-weight: $bold;
  padding-bottom: 5px;
}
a {
  font-size: 14px;
  color: $color-gray;
  font-weight: $medium;
  text-decoration: underline;
  &:hover {
    color: hsl(244, 52%, 64%);
  }
}
._price {
  color: $marine-blue;
  font-weight: $bold;
}
.accessories-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
._text {
  font-size: 14px;
  color: $color-gray;
  font-weight: $medium;
}
._price {
  font-size: 15px;
  color: $marine-blue;
  font-weight: $regular;
}
.total-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px 0 20px;
}
.total-text {
  font-size: 14px;
  color: $color-gray;
  font-weight: $medium;
}
.total-general {
  color: hsl(244, 52%, 64%);
  font-size: 20px;
  font-weight: $bold;
}
.btn {
  background-color: $purplish-blue;
  &:hover {
    background-color: rgba(107, 100, 206, 0.7);
  }
}

@media (max-width: 991px) {
  .step {
    padding-bottom: 0;
  }
  .form {
    padding: 20px 17px 8px 15px;
  }
  .selected-plan {
    font-size: 14px;
    padding-bottom: 12px;

    &__text {
      div {
        padding-bottom: 2px;
      }
    }
  }
  .accessories-item {
    padding: 8px 0;
  }
  .total-price {
    padding: 0 15px 0 15px;

    &_price {
      font-size: 17px;
    }
  }
  .step_mobile {
    padding-bottom: 30px;
  }
}
</style>
