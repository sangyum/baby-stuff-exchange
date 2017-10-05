const React = require("react");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const { Auth } = require("./index");
const { SignIn } = require("./sign-in");
const { Main } = require("../main");

enzyme.configure({ adapter: new Adapter() });

test("Auth should render SignIn if unauthenticated", () => {
  const isAuthenticated = false;
  const wrapper = enzyme.shallow(<Auth isAuthenticated={isAuthenticated} />);
  const element = wrapper.find(SignIn);

  expect(element.length).toEqual(1);
});

test("Auth should render Main if authenticated", () => {
  const isAuthenticated = true;
  const wrapper = enzyme.shallow(<Auth isAuthenticated={isAuthenticated} />);
  const element = wrapper.find(Main);

  expect(element.length).toEqual(1);
});
