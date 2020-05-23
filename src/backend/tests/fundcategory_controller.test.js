require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const fundCatControllers = require("../controller/fundCategory.controller");

let apiServer;

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
    const res = typeof fundCatControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create fund category when no data is sent", async () => {
    const res = await apiServer.post("/funds/category");
    expect(res.statusCode).toEqual(500);
  });
  it("should make a fund category with valid data", async () => {
    const res = await apiServer.post("/funds/category").send({
      fundCatId: 1,
      categoryName: "Loan",
      description: "Offer loan for agricultural purposes",
      createdBy: "3"
    });
    expect(res.statusCode).toEqual(200);
  });
});
