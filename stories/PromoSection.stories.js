import PromoSection from "../app/components/PromoSection/page";
import "../app/globals.css";

export default {
  title: "Example/PromoSection",
  component: PromoSection,
};

const Template = (args) => <PromoSection {...args} />;

export const Promo = Template.bind({});
