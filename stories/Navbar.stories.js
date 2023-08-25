import Navbar from "../app/components/Navbar/page";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const NavbarView = Template.bind({});

NavbarView.args = {
  SlideCategory: true,
};
