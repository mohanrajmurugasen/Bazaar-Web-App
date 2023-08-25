import Collapse from "../app/components/Collapse/page";
import "../app/globals.css";

export default {
  title: "Example/Collapse",
  component: Collapse,
};

const Template = (args) => <Collapse {...args} />;

export const CollapseView = Template.bind({});
