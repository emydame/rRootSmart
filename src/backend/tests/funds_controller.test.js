require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const fundsControllers = require("../controller/funds.controller");

let apiServer;

describe("create()", () => {
  beforeEach(async () => {
    apiServer = supertest(app);
  });
  afterEach(async () => {
    if (apiServer.close) await apiServer.close();
  });
  it("should be a function", () => {
    const res = typeof fundsControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create funds when no data is sent", async () => {
    const res = await apiServer.post("/invest");
    expect(res.statusCode).toEqual(400);
  });
  it("should create funds when valid data", async () => {
    const res = await apiServer.post("/invest").send({
      fundId: 1,
      organizationId: 1,
      fundCatId: 2,
      amount: 2000,
      status: true,
      dateInitiated: "12-03-1999"
    });
    expect(res.statusCode).toEqual(200);
  });
});
