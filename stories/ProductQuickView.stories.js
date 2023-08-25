import ProductQuickView from "../app/components/ProductQuickView/page";
import "../app/globals.css";

export default {
  title: "Example/ProductQuickView",
  component: ProductQuickView,
};

const Template = (args) => <ProductQuickView {...args} />;

export const QuickView = Template.bind({});
QuickView.args = {
  openView: true,
  setOpenView: true,
};
