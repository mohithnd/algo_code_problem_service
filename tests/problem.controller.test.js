const problemController = require("../src/controllers/problem.controller");
const ProblemService = require("../src/services/problem.service");
const { StatusCodes } = require("http-status-codes");

jest.mock("../src/services/problem.service");

describe("tests", () => {
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("Should Get All Problems", async () => {
    const problems = [];
    ProblemService.prototype.getAllProblems.mockResolvedValue(problems);

    await problemController.getProblems(req, res, next);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(next).not.toHaveBeenCalled();
  });

  test("getProblem should call next with error if service throws error", async () => {
    const mockError = new Error("id", 123);
    ProblemService.prototype.getProblem.mockRejectedValue(mockError);

    req.params = { id: 10 };
    await problemController.getProblem(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
