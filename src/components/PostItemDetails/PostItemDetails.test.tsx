import React from "react";
import { shallow } from "enzyme";
import PostItemDetails from "./PostItemDetails";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render PostItemDetails component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <PostItemDetails />
      </Provider>
    )
  ).toMatchSnapshot();
});
