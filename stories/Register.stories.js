import Register from "../app/components/Register/page";
import "../app/globals.css";

export default {
  title: "Example/Register",
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const RegisterView = Template.bind({});
