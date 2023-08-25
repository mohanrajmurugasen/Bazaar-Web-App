import Orders from "../app/components/Orders/page";

export default {
  title: "Example/Orders",
  component: Orders,
};

const Template = (args) => <Orders {...args} />;

export const OrdersView = Template.bind({});
