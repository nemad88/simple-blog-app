import React from "react";
import { shallow } from "enzyme";
import PostItem from "./PostItem";
import { Provider } from "react-redux";
import store from "../../redux/store";

it("expect to render PostItem component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <PostItem
          post={{
            body:
              "et fugit eligendi deleniti quidem qui sint nihil autem m accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in doloribus at sed quis culpa deserunt consectetur qui praesen\ndoloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in\ndoloribus at sed quis culpa deserunt uidem qui sint nihil autem m accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in doloribus at sed quis culpa deserunt consectetur qui praesen consectetur qui praesen praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in\ndoloribus at sed quis culpa deserunt consectetur qui praesen",
            visibility: "draft",
            id: 2,
            title: "qui est esse",
            userId: 1,
          }}
        />
      </Provider>
    )
  ).toMatchSnapshot();
});
