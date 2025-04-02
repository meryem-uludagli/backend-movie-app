const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");

const postRequest = async (req, res) => {
  if (req.url === "/api/movies") {
    const body = await bodyParser(req);

    const keys = [
      "title",
      "year",
      "rating",
      "description",
      "language",
      "director",
    ];

    if (
      keys.some((key) => !body[key]) ||
      !body.genre.length > 0 ||
      !body.cast.length > 0
    ) {
      res.writeHead(404);
      res.end("Lutfen zounlu alan butun alanlari tanimlayin");
      return;
    }

    body.id = crypto.randomUUID();
    res.end("film olusturuldu");
  } else {
    res.writeHead(404);
    res.end("Gecersiz yola istek");
  }
};
module.exports = postRequest;
