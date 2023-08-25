import Cart from "../app/components/Cart/page";
import "../app/globals.css";

export default {
  title: "Example/Cart",
  component: Cart,
};

const Template = (args) => <Cart {...args} />;

export const CartView = Template.bind({});
