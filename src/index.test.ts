import livesession from "./index";
import api from "./api";

test("Call any other function before init", () => {
  expect(() => {
    livesession.setOptions({ rootHostname: "test" });
    throw new Error();
  }).toThrow();
});

it("should call init method", () => {
  const initScript = jest.fn((trackID: string, options?: object) => {
    livesession.init("test");
    return api.init(trackID, options);
  });
  initScript("jkjfdsfds");
  expect(initScript).toBeCalledTimes(1);
});

test("Check if script is added", () => {
  const initScript = jest.fn(() => window.__ls && console.warn("LiveSession already inited (skipping init() call)"));
  initScript();
  expect(initScript).toHaveReturned();
});
