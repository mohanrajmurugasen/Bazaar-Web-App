import Login from "../app/components/login/page";
import "../app/globals.css";

export default {
  title: "Example/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const SignIn = Template.bind({});
