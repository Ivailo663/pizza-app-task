import router from "./plugins/router";
import { apiSubmitOrder } from "./services/apiSubmitOrder";

const initialState = () => ({
  userDetails: {
    name: "",
    phoneNumber: "",
    address: "",
  },
  orderType: "",
  pizzaSize: "small",
  ingredientWarning: false,
  duplicatedIngredient: "",
  selectedIngredients: [],
});

const state = {
  ...initialState(),
};

const getters = {
  name: (state) => state.userDetails.name,
  phoneNumber: (state) => state.userDetails.phoneNumber,
  adress: (state) => state.userDetails.address,
};

const mutations = {
  SET_ORDER_TYPE(state, payload) {
    state.orderType = payload;
  },
  SET_PIZZA_SIZE(state, payload) {
    state.pizzaSize = payload;
  },
  SET_INGREDIENTS(state, payload) {
    if (state.selectedIngredients.includes(payload)) {
      state.ingredientWarning = true;
      state.duplicatedIngredient = payload;
    } else {
      state.ingredientWarning = false;
      state.selectedIngredients.push(payload);
    }
  },
  REMOVE_INGREDIENT(state, payload) {
    const { index, selectedIngredient } = payload;

    if (state.selectedIngredients.includes(selectedIngredient)) {
      state.ingredientWarning = false;
      state.duplicatedIngredient = "";
      state.selectedIngredients.splice(index, 1);
    } else {
      state.selectedIngredients.splice(index, 1);
    }
  },
  RESET_STATE(state) {
    Object.assign(state, initialState());
  },
};

const actions = {
  async submitOrder(context, payload) {
    apiSubmitOrder(payload, () => router.push("/success"));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
