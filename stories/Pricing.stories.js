import Pricing from "../app/components/Pricing/page";
import "../app/globals.css";

export default {
  title: "Example/Pricing",
  component: Pricing,
};

const Template = (args) => <Pricing {...args} />;

export const PricingView = Template.bind({});
