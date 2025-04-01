const bodyParser = require("../utils/bodyParser");

const postRequest = async (req, res) => {
  if (req.url === "/api/movies") {
    const body = await bodyParser(req);
    res.end("film olusturuldu");
  } else {
    res.writeHead(404);
    res.end("Gecersiz yola istek");
  }
};
module.exports = postRequest;
