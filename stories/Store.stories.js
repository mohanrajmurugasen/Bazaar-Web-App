import Store from "../app/components/store/page";
import "../app/globals.css";

export default {
  title: "Example/Store",
  component: Store,
};

const Template = (args) => <Store {...args} />;

export const StoreView = Template.bind({});
