require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const organizationControllers = require("../controller/userOrganisation.controller");

let apiServer;

describe("create()", () => {
  beforeAll(async () => {
    apiServer = supertest(app);
  });
  afterAll(async () => {
    await apiServer.close();
  });
  it("should be a function", () => {
    const res = typeof organizationControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create an organization when no data is sent", async () => {
    const res = await apiServer.post("/organizations");
    expect(res.statusCode).toEqual(400);
  });
  it("should create the organization with valid data", async () => {
    const res = await apiServer.post("/organizations").send({
      organizationId: 1,
      userId: 2,
      userCatId: 2,
      companyName: "Ade and sons",
      RCNumber: "RC4438G",
      email: "email@email.com",
      BVN: 23334453,
      address: "7, hassan street, Ikeja",
      dateIncorporated: "23-05-1992"
    });
    expect(res.statusCode).toEqual(200);
  });
});
