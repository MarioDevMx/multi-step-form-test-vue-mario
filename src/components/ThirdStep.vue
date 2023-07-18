<template>
  <div class="step">
    <div class="step_mobile">
      <header class="step_header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>
      <form>
        <div v-for="item in addPlan.addsPlan" :key="item.index">
          <label
            class="addons-checkbox"
            :class="{ active: item.selection == 1 }"
          >
            <input
              type="checkbox"
              true-value="1"
              false-value="0"
              :value="item.mainText"
              v-model="item.selection"
            />
            <div class="addons-checkbox_text">
              <span class="mainText">{{ item.mainText }}</span>
              <span class="subText">{{ item.subText }}</span>
            </div>
            <div class="addons-checkbox_price">
              <div v-if="decodedObject.default == 0">+${{ item.month }}/mo</div>
              <div v-if="decodedObject.default == 1">+${{ item.year }}/yr</div>
            </div>
          </label>
        </div>
      </form>
    </div>
    <div class="btns">
      <v-btn class="back" @click="back"> Go Back </v-btn>
      <v-btn class="next-step" @click="nextStep"> Next Step </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { plans } from "../config/constants";
export default {
  name: "ThirdStep",
  data() {
    return {
      sum: 0,
      addsPlan: [
        {
          mainText: "Onlinleservice",
          subText: "Access to multiplayer games",
          month: 1,
          year: 10,
          selection: 0,
        },
        {
          mainText: "Larger storage",
          subText: "Extra 1TB of cloud save",
          month: 2,
          year: 20,
          selection: 0,
        },
        {
          mainText: "Customizable profile",
          subText: "Custom theme on your profile",
          month: 2,
          year: 20,
          selection: 0,
        },
      ],
    };
  },
  methods: {
    nextStep() {
      const data = {
        plan: this.plan,
        ...this.decodedObject,
      };
      this.$router.push({
        path: "/fourth",
        query: {
          objeto: JSON.stringify(data),
        },
      });
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
    plan() {
      if (this.decodedObject.default == 0) {
        const findIndex = plans.items.findIndex(
          (el) => el.title == this.decodedObject.selectedPlan
        );
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sum += plans.items[findIndex].month;
      } else {
        const findIndex = plans.items.findIndex(
          (el) => el.title == this.decodedObject.selectedPlan
        );
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sum += plans.items[findIndex].month * 10;
      }
      console.log("plan-x3", this.sum);
      return this.sum;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/base/styles.scss";

.step {
  padding-bottom: 17px;
}
.addons-checkbox {
  position: relative;
  width: 100%;
  height: 81px;
  display: flex;
  align-items: center;
  border: 1px solid $light-gray;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 22px;
  cursor: pointer;
  transition: 0.3s;

  &.active {
    border-color: hsl(244, 52%, 64%);
    background-color: $alabaster;
  }
  &:hover {
    border-color: hsl(244, 52%, 64%);
  }
  input {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }
  &_text {
    display: flex;
    flex-direction: column;
    padding-left: 25px;
    .mainText {
      color: $marine-blue;
      font-weight: $bold;
      padding-bottom: 5px;
    }
    .subText {
      font-size: 14px;
      color: $color-gray;
      font-weight: $regular;
    }
  }
  &_price {
    color: hsl(244, 52%, 64%);
    font-size: 14px;
    font-weight: $medium;
    letter-spacing: 0.04em;
    margin-left: auto;
  }
}

@media (max-width: 977px) {
  .step {
    padding-bottom: 0;
  }
  .addons-checkbox {
    height: 60px;
    padding: 0 15px;

    &__text {
      padding-left: 15px;
      .mainText {
        font-size: 14px;
        padding-bottom: 2px;
      }
      .subText {
        font-size: 12px;
      }
    }
    &_price {
      font-size: 12px;
    }
  }
}
</style>
