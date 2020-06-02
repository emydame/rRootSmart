require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const organizationControllers = require("../controller/userOrganisation.controller");

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
    const res = typeof organizationControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create an organization when no data is sent", async () => {
    const res = await apiServer.post("/organizations");
    expect(res.statusCode).toEqual(500);
  });
  it("should create the organization with valid data", async () => {
    const res = await apiServer.post("/organizations").send({
      organizationId: 1,
      userId: 2,
      userCatId: 2,
      companyName: "Ade and sons",
      RCNumber: "RC4438G",
      email: "email@email.com",
      BVN: "23334453",
      address: "7, hassan street, Ikeja",
      dateIncorporated: "23-05-1992"
    });
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /organizations/all with findAll()", () => {
  beforeEach(async () => {
    if (!(apiServer && apiServer.listen)) {
      apiServer = supertest(app);
    }
  });
  afterEach(async () => {
    if (apiServer.close) {
      await apiServer.close();
    }
  });
  it("findAll() should be a function", () => {
    const res = typeof organizationControllers.findAll;
    expect(res).toEqual("function");
  });
  it("should fetch all organizations from the server", async () => {
    const res = await apiServer.get("/organizations/all");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /organizations/list with findAll()", () => {
  beforeEach(async () => {
    if (!(apiServer && apiServer.listen)) {
      apiServer = supertest(app);
    }
  });
  afterEach(async () => {
    if (apiServer.close) {
      await apiServer.close();
    }
  });
  it("findAll() should be a function", () => {
    const res = typeof organizationControllers.findAll;
    expect(res).toEqual("function");
  });
  it("should fetch all organizations from the server by category", async () => {
    const res = await apiServer.get("/organizations/list").send({userCatId: 1});
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /organizations/:id with findOne()", () => {
  beforeEach(async () => {
    if (!(apiServer && apiServer.listen)) {
      apiServer = supertest(app);
    }
  });
  afterEach(async () => {
    if (apiServer.close) {
      await apiServer.close();
    }
  });
  it("findAll() should be a function", () => {
    const res = typeof organizationControllers.findOne;
    expect(res).toEqual("function");
  });
  it("should fetch single organizations info from the server", async () => {
    const res = await apiServer.get("/organizations/2");
    expect(res.statusCode).toEqual(200);
  });
  it("should not fetch project data for an invalid id", async () => {
    const res = await apiServer.get("/organizations/1fadff");
    expect(res.statusCode).toEqual(400);
  });
});
