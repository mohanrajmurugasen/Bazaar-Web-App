import LightBox from "../app/components/LightBox/page";
import "../app/globals.css";

export default {
  title: "Example/LightBox",
  component: LightBox,
};

const Template = (args) => <LightBox {...args} />;

export const LightBoxView = Template.bind({});
