import FAQ from "../app/components/FAQ/page";
import "../app/globals.css";

export default {
  title: "Example/FAQ",
  component: FAQ,
};

const Template = (args) => <FAQ {...args} />;

export const FAQView = Template.bind({});
