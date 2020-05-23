require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const privilegeControllers = require("../controller/userPrivilege.controller");

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
    const res = typeof privilegeControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create privileges when no data is sent", async () => {
    const res = await apiServer.post("/privileges");
    expect(res.statusCode).toEqual(500);
  });
  it("should create privileges with valid data", async () => {
    const res = await apiServer.post("/privileges").send({
      userId: 6,
      privilegeName: "Assign User Role",
      description: "Any user with this privilege can assign roles",
      createdBy: 1
    });
    expect(res.statusCode).toEqual(200);
  });
});
