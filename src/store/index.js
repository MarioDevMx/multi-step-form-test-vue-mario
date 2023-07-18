import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default createStore({
  state() {
    return {
      allData: {
        add: {
          addsPlan: [
            {
              mainText: "Online service",
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
        },
      },
    };
  },
  getters,
  mutations,
});
