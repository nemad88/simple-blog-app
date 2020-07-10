import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render Login component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    )
  ).toMatchSnapshot();
});
