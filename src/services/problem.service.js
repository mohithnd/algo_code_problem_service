const { markdownSanitizer } = require("../utils/index");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = markdownSanitizer(problemData.description);
      console.log("Problem Data:- ", problemData);
      const problem = await this.problemRepository.createProblem(problemData);
      console.log("Problem:- ", problem);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
