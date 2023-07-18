<template>
  <div class="step">
    <div class="step_mobile">
      <div class="step_header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <form>
        <div class="radios">
          <label
            class="custom-radio"
            v-for="itemPlan in plans.items"
            :key="itemPlan.id"
            :class="{ active: itemPlan.title === selectedPlan }"
          >
            <img :src="itemPlan.planIconType" alt="arcadr" />
            <input type="radio" :value="itemPlan.title" v-model="plan" />
            <div>
              <span class="title">{{ itemPlan.title }}</span>
              <div>
                <span class="price" v-if="dateSelected == 0"
                  >${{ itemPlan.month }}/mo</span
                >
              </div>
              <div v-if="dateSelected == 1">
                <span class="price">${{ itemPlan.month * 10 }}/yr</span>
                <span class="infopromotion">{{ itemPlan.promotionYear }}</span>
              </div>
            </div>
          </label>
        </div>
        <label class="switch">
          <span :class="{ active: dateSelected == 0 }">Monthly</span>
          <input
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="dateSelected"
          />
          <span class="slider"></span>
          <span :class="{ active: dateSelected == 1 }">Yearly</span>
        </label>
      </form>
    </div>

    <div class="btns">
      <v-btn class="back" @click="back"> Go Back </v-btn>
      <v-btn class="next-step" @click="nextStep"> Next Step </v-btn>
    </div>
  </div>
</template>

<script>
import { plans } from "../config/constants";
export default {
  name: "SecondStep",
  data() {
    return {
      plan: "",
      selectedPlan: "Arcade",
      dateSelected: 0,
      plans: plans,
    };
  },
  watch: {
    plan() {
      this.selectedPlan = this.plan;
    },
  },
  methods: {
    nextStep() {
      if (this.selectedPlan !== "") {
        const data = {
          default: this.dateSelected,
          selectedPlan: this.selectedPlan,
          ...this.decodedObject,
        };
        this.$router.push({
          path: "/third",
          query: {
            objeto: JSON.stringify(data),
          },
        });
      }
    },
    back() {
      this.$router.back();
    },
  },

  computed: {
    decodedObject() {
      const encodedObject = this.$route.query.objeto;
      return JSON.parse(encodedObject);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/base/styles.scss";

.radios {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.custom-radio {
  min-height: 160px;
  width: calc(calc(100% - 40px) / 3);
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid $light-gray;
  border-radius: 10px;
  cursor: pointer;

  &.active {
    border-color: $marine-blue;
    background-color: $alabaster;
  }
  &:hover {
    border-color: $marine-blue;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  img {
    margin-bottom: 42px;
    width: 50px;
  }

  .title {
    display: inline-flex;
    color: $marine-blue;
    font-size: 16px;
    font-weight: $medium;
    margin-bottom: 2px;
  }

  .price {
    display: inline-flex;
    color: $color-gray;
    font-size: 14px;
  }

  .infopromotion {
    display: inline-flex;
    color: $marine-blue;
    font-size: 12px;
    margin-top: 9px;
  }
}

.switch {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $alabaster;
  border-radius: 10px;

  input {
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + .slider:before {
      -webkit-transform: translateX(17px);
      -ms-transform: translateX(17px);
      transform: translateX(17px);
    }
  }

  .slider {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 20px;
    background-color: $marine-blue;
    border-radius: 20px;
    transition: 0.4s;
    margin: 0 24px;
    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      height: 12px;
      width: 12px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 100%;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }

  span {
    font-size: 15px;
    color: $color-gray;
    font-weight: $medium;
    letter-spacing: -0.02em;

    &.active {
      color: $marine-blue;
    }
  }
}

@media (max-width: 977px) {
  .radios {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 23px;
  }
  .custom-radio {
    min-height: 79px;
    width: 100%;
    flex-direction: row;
    padding: 15px 10px;

    img {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  .step__mobile {
    padding-bottom: 30px;
  }
}
</style>
