import Banner from "../app/components/Banner/page";
import "../app/globals.css";

export default {
  title: "Example/Banner",
  component: { Banner },
};

const Template = (args) => <Banner {...args} />;

export const BannerView = Template.bind({});
