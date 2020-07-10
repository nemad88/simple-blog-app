import React from "react";
import { shallow } from "enzyme";
import PostList from "./PostList";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render PostList component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <PostList />
      </Provider>
    )
  ).toMatchSnapshot();
});
