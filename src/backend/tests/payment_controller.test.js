require("mysql2/node_modules/iconv-lite").encodingExists("foo");

const supertest = require("supertest");
const { app } = require("../app");
const paymentControllers = require("../controller/payment.controller");

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
    const res = typeof paymentControllers.create;
    expect(res).toEqual("function");
  });
  it("should not create payment when no data is sent", async () => {
    const res = await apiServer.post("/payment");
    expect(res.statusCode).toEqual(400);
  });
  it("should create payment when valid data", async () => {
    const res = await apiServer.post("/payment").send({
      paymentId: 1,
      organizationId: 1,
      fundId: 1,
      accountNumber: 998494,
      bankName: GTBank,
      amount: 10000,
      status: "processing",
      paidBy: 1,
      paymentDate: "2015-06-06"
    });
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /payments with findAll()", () => {
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
    const res = typeof paymentControllers.findAll;
    expect(res).toEqual("function");
  });
  it("should fetch payments from the server", async () => {
    const res = await apiServer.get("/payments");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /payments with findOne()", () => {
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
  it("findOne() should be a function", () => {
    const res = typeof paymentControllers.findOne;
    expect(res).toEqual("function");
  });
  it("should fetch single payment info from the server", async () => {
    const res = await apiServer.get("/payments").send({ id: "3" });
    expect(res.statusCode).toEqual(200);
  });
  it("should not fetch fund data for an invalid id", async () => {
    const res = await apiServer.get("/payments").send({ id: "sgio" });
    expect(res.statusCode).toEqual(404);
  });
});

describe("GET /payments/status with findAll()", () => {
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
    const res = typeof paymentControllers.findAll;
    expect(res).toEqual("function");
  });
  it("should fetch single payment info from the server", async () => {
    const res = await apiServer.get("/payments/status").send({ status: "processing" });
    expect(res.statusCode).toEqual(200);
  });
  it("should not fetch payment data for an invalid id", async () => {
    const res = await apiServer.get("/payments/status").send({ status: "paid" });
    expect(res.statusCode).toEqual(404);
  });
});


describe("GET /payments/sme with findAll()", () => {
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
    const res = typeof paymentControllers.findAll;
    expect(res).toEqual("function");
  });
  it("should fetch single payment info from the server", async () => {
    const res = await apiServer.get("/payment/sme").send({ userId: "1" });
    expect(res.statusCode).toEqual(200);
  });
  it("should not fetch payment data for an invalid id for the SME ", async () => {
    const res = await apiServer.get("/payments/sme").send({ userId: "1" });
    expect(res.statusCode).toEqual(404);
  });
});
