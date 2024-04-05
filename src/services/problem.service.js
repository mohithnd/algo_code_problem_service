const { markdownSanitizer } = require("../utils/index");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = markdownSanitizer(problemData.description);
    console.log("Problem Data:- ", problemData);
    const problem = await this.problemRepository.createProblem(problemData);
    console.log("Problem:- ", problem);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
}

module.exports = ProblemService;
