require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const projectControllers = require("../controller/project.controller");

let apiServer;

describe("create()", () => {
  beforeEach(async () => {
    apiServer = supertest(app);
  });
  afterEach(async () => {
    if (apiServer.close) await apiServer.close();
  });
  it("should be a function", () => {
    const res = typeof projectControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create projects when no data is sent", async () => {
    const res = await apiServer.post("/projects");
    expect(res.statusCode).toEqual(400);
  });
  it("should create projects with valid data", async () => {
    const res = await apiServer.post("/projects").send({
      projectId: 1,
      projectCatId: 2,
      projectName: "fishing support",
      description: "advance medium and small scale fish farms",
      createdBy: 1,
      dateStart: "23-01-2010",
      dateEnd: "24-10-2020"
    });
    expect(res.statusCode).toEqual(200);
  });
});
