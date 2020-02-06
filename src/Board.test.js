import React from "react";
import Board from "./Board";
import { shallow, mount } from "enzyme";

describe("<Board /> rendering", () => {
  let wrapper;

  describe("inital board ", () => {
    it("renders correctly", () => {
      let wrapper = shallow(
        <Board nrows={10} ncols={10} chanceLightStartsOn={0} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("renders correctly", () => {
      let wrapper = shallow(
        <Board nrows={5} ncols={5} chanceLightStartsOn={1.01} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("cell click", () => {
    it("toggles lights correctly", () => {
      let wrapper = mount(
        <Board nrows={1} ncols={3} chanceLightStartsOn={1.01} />
      );
      // To see how the board [[true, true, true]] renders, do console.log(wrapper.debug());
      const litCells = wrapper.find(".Cell-lit");
      // expect they are all lit
      expect(litCells.length).toBe(3);
      litCells.at(0).simulate("click");
      // once we click the top left, we will have [[false, false, true]]
      expect(wrapper.find(".Cell-lit").length).toBe(1);
    });

    it("says that you won when you clear the board", () => {
      let wrapper = mount(
        <Board nrows={2} ncols={2} chanceLightStartsOn={0} />
      );

      // Board starts empty
      let litCells = wrapper.find(".Cell-lit");
      expect(litCells.length).toBe(0);

      let firstCell = wrapper.find(".Cell").first(0);
      firstCell.simulate("click");

      // 3 Lit cells
      litCells = wrapper.find(".Cell-lit");
      expect(litCells.length).toBe(3);

      expect(wrapper.state().hasWon).toBe(false);

      // Click the same cell and clear the board
      firstCell.simulate("click");

      // You Win!
      expect(wrapper.state().hasWon).toBe(true);
      expect(wrapper.contains("You Win!")).toBe(true);
    });
  });
});
