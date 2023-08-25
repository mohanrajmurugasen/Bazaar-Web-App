import ArrangeImage from "../app/components/Gallery/ArrangeImage/page";
import "../app/globals.css";
import MixImage from "../app/components/Gallery/MixImage/page";

export default {
  title: "Example/Gallery",
  component: { MixImage, ArrangeImage },
};

const Template1 = (args) => <MixImage {...args} />;
const Template2 = (args) => <ArrangeImage {...args} />;

export const MixImageView = Template1.bind({});
export const ArrangeImageView = Template2.bind({});
