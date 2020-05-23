require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const proposalControllers = require("../controller/projectProposal.controller");

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
    const res = typeof proposalControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create a new proposal when no data is sent", async () => {
    const res = await apiServer.post("/proposals");
    expect(res.statusCode).toEqual(500);
  });
  it("should create a new proposal with valid data", async () => {
    const res = await apiServer.post("/proposals").send({
      proposalId: 1,
      userId: 1,
      applicationId: 14,
      projectId: 3,
      filePath: "../files/myproposal.pdf"
    });
    expect(res.statusCode).toEqual(200);
  });
});
