import Footer from "../app/components/footer/page";
import "../app/globals.css";

export default {
  title: "Example/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterView = Template.bind({});
