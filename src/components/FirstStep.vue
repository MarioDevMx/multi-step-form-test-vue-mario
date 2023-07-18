<template>
  <div class="step">
    <div class="step_mobile">
      <header class="step_header">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>
      <v-form ref="form" v-model="validForm" @submit.prevent="nextStep">
        <v-row dense>
          <v-col cols="12">
            <label class="label">Name</label>
            <v-text-field
              v-model="userInfoItem.name"
              :rules="nameRules"
              placeholder="e.g. Mario M"
              required
              variant="outlined"
              density="compact"
              class="input"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <label class="label">Email Address</label>
            <v-text-field
              v-model="userInfoItem.email"
              :rules="emailRules"
              placeholder="e.g. mmay@lorem.com"
              required
              variant="outlined"
              density="compact"
              class="input"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <label class="label">Phone Number</label>
            <v-text-field
              v-model="userInfoItem.phone"
              :rules="phoneRules"
              :counter="10"
              placeholder="e.g. +1 234 567 890"
              required
              variant="outlined"
              density="compact"
              class="input"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="btns">
      <v-btn class="next-step" @click="nextStep"> Next Step </v-btn>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  name: "FirstStep",
  data: () => ({
    validForm: false,
    userInfoItem: {
      name: "",
      email: "",
      phone: "",
    },
    nameRules: [
      (value) => {
        if (value) return true;

        return "Name is required.";
      },
    ],
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
    phoneRules: [
      (value) => {
        if (value) return true;

        return "Phone is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Phone number must be less than 10 characters.";
      },
    ],
  }),
  methods: {
    async nextStep() {
      await this.$refs.form.validate();
      if (this.validForm) {
        try {
          const { name, email, phone } = toRefs(this.userInfoItem);
          const itemsUser = {
            name: name.value,
            email: email.value,
            phone: phone.value,
          };
          this.$router.push({
            path: "/second",
            query: {
              objeto: JSON.stringify(itemsUser),
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/styles.scss";

.label {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: $marine-blue;
  font-size: 14px;
  font-weight: $medium;
  margin-top: 6px;
}

.input {
  outline: 0 !important;
  height: 48px !important;
  width: 100% !important;
  margin-top: 8px !important;
  font-size: 17px !important;
  color: $marine-blue !important;
  font-weight: $bold !important;
  font-family: $font-family !important;

  &::placeholder {
    color: $color-gray !important;
    opacity: 1 !important;
  }

  &::-ms-input-placeholder {
    color: $color-gray !important;
  }

  &:focus {
    border-color: $marine-blue !important;
  }
}

.btns {
  display: flex;
  margin-top: auto;
}

button {
  margin-left: auto;
}

@media (max-width: 977px) {
  .label {
    font-size: 12px;
  }
  .input {
    height: 40px;
    margin-top: 6px;
    font-size: 16px;
    margin-bottom: 19px;
  }
}
</style>
