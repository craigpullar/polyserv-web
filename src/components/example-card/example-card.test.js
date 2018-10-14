import ExampleCard from "./component";

describe("ExampleCard Component", () => {
  const componentProps = {
    classes: {
      card: {},
      title: {}
    }
  };

  const componentJSX = <ExampleCard {...componentProps} />;

  describe("Snapshot", () => {
    it("should match existing snapshot", () => {
      const componentSnapshot = global.renderer.create(componentJSX).toJSON();
      expect(componentSnapshot).toMatchSnapshot();
    });
  });
});
