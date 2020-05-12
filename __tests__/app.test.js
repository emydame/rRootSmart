/* eslint-disable quotes */
<<<<<<< HEAD
=======
/* eslint-disable import/no-unresolved */
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac
/**
 * @jest-environment jsdom
 */

<<<<<<< HEAD
const app = require("../src/frontend/src/index");
=======
const app = require("../src/frontend/src/app");
>>>>>>> 550b4a9cdf5880110e445975b11b74b5efba63ac

describe("app module", () => {
  test("it exists", async () => {
    expect(app).toBeDefined();
  });

  test("it returns program name with SDGs", async () => {
    const result = await app();
    const sdgPos = (result || "").indexOf("SDG");
    expect(sdgPos).toBeGreaterThanOrEqual(0);
  });
});
