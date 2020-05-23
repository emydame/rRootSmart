require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const fundAppControllers = require("../controller/fundApplication.controller");

let apiServer;
jest.setTimeout(30000);

describe("create()", () => {
  beforeEach(async () => {
    if(!(apiServer && apiServer.listen)){
      apiServer = supertest(app);
    } 
  });
  afterEach(async () => {
    if (apiServer.close){
      await apiServer.close();
    } 
  });
  it("should be a function", () => {
    const res = typeof fundAppControllers.create;
    expect(res).toEqual("function");
  });
  it("should not apply for fund when no data is sent", async () => {
    const res = await apiServer.post("/fund/apply");
    expect(res.statusCode).toEqual(400);
  });
  it("should make a fund application with valid data", async () => {
    const res = await apiServer.post("/fund/apply").send({
      applicationId: 1,
      userId: 2,
      fundId: 1,
      fundCatId: 2,
      status: true
    });
    expect(res.statusCode).toEqual(200);
  });
});
