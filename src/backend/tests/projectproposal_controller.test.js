require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const proposalControllers = require("../controller/projectProposal.controller");

let apiServer;

describe("create()", () => {
  beforeAll(async () => {
    apiServer = supertest(app);
  });
  afterAll(async () => {
    await apiServer.close();
  });
  it("should be a function", () => {
    const res = typeof proposalControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create a new proposal when no data is sent", async () => {
    const res = await apiServer.post("/proposals");
    expect(res.statusCode).toEqual(400);
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
