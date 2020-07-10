import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render Header component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    )
  ).toMatchSnapshot();
});
