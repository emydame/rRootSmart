require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const fundDisbusControllers = require("../controller/fundDisbursment.controller");

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
    const res = typeof fundDisbusControllers.create;
    expect(res).toEqual("function");
  });
  it("should not disburse fund  when no data is sent", async () => {
    const res = await apiServer.post("/disbursements");
    expect(res.statusCode).toEqual(500);
  });
  it("should disburse fund with valid data", async () => {
    const res = await apiServer.post("/disbursements").send({
      disbursementId: 2,
      applicationId: 2,
      fundId: 1,
      disbursedBy: "1",
      bankName: "GTBanks",
      accountNunber: "1202394004",
      status: "success"
    });
    expect(res.statusCode).toEqual(200);
  });
});
