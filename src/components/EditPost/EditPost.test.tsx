import React from "react";
import { shallow } from "enzyme";
import EditPost from "./EditPost";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render EditPost component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <EditPost />
      </Provider>
    )
  ).toMatchSnapshot();
});
