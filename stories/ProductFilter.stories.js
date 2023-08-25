import ProductFilter from "../app/components/ProductFilter/page";
import "../app/globals.css";

export default {
  title: "Example/ProductFilter",
  component: ProductFilter,
};

const Template = (args) => <ProductFilter {...args} />;

export const Filter = Template.bind({});
