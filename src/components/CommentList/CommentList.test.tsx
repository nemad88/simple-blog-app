import React from "react";
import { shallow } from "enzyme";
import CommentList from "./CommentList";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render CommentList component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <CommentList />
      </Provider>
    )
  ).toMatchSnapshot();
});
