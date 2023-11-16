import { PrimaryButton } from ".";

export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: true,
    text: "Get Started",
    stateProp: "disabled",
    type: "primary",
    className: {},
  },
};
