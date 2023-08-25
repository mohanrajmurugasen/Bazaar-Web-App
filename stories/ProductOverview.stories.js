import ProductOverview from "../app/components/ProductOverview/page";
import "../app/globals.css";

export default {
  title: "Example/ProductOverview",
  component: ProductOverview,
};

const Template = (args) => <ProductOverview {...args} />;

export const ProductView = Template.bind({});
