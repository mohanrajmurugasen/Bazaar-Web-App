import Card from "../app/components/Cards/page";
import "../app/globals.css";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardView = Template.bind({});
