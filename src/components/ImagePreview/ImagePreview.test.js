import React from "react";
import { shallow } from "enzyme";
import ImagePreview from "./ImagePreview";

describe("ImagePreview", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ImagePreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
