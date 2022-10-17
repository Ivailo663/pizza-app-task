import Home from "./views/Home";
import StepOne from "./views/StepOne";
import StepTwo from "./views/StepTwo";
import StepThree from "./views/StepThree";
import Success from "./views/Success";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/step-1",
    component: StepOne,
  },
  {
    path: "/step-2",
    component: StepTwo,
  },
  {
    path: "/step-3",
    component: StepThree,
  },
  {
    path: "/success",
    component: Success,
  },
];
