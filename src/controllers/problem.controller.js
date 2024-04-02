function pingProblemController(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

function addProblem(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

function getProblem(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

function getProblems(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

function deleteProblem(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

function updateProblem(req, res) {
  return res.status(501).json({ message: "Problem Controller Is Up" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
