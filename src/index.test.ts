import livesession from "./index";
import api from "./api";

describe("calling functions", () => {
  test("Call any other function before init", () => {
    expect(() => {
      livesession.setOptions({ rootHostname: "test" });
    }).toThrow();
  });
});

describe("Adding script", () => {
  const warning = "LiveSession already inited (skipping init() call)";

  const originalWarn = console.warn;
  afterEach(() => (console.warn = originalWarn));

  describe("Check adding script and console warn", () => {
    let consoleOutput = [];
    const mockedWarn = (output: string) => consoleOutput.push(output);
    beforeEach(() => (console.warn = mockedWarn));

    it("should call init method", () => {
      const initScript = jest.fn((trackID: string, options?: object) => {
        livesession.init(trackID);
        return api.init(trackID, options);
      });
      initScript("jkjfdsfds");
      expect(initScript).toBeCalledTimes(1);
      expect(consoleOutput).toEqual([]);
    });
    it("Render script more than once", () => {
      livesession.init("test2");
      expect(consoleOutput).toEqual([warning]);
    });
  });
});
