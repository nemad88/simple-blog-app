import React from "react";
import { shallow } from "enzyme";
import CommentItem from "./CommentItem";

it("expect to render CommentItem component", () => {
  expect(
    shallow(
      <CommentItem
        comment={{
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body:
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        }}
      />
    )
  ).toMatchSnapshot();
});
