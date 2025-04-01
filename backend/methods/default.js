const defaultRequest = (req, res) => {
  res.statusCode = 404;

  //   res.setHeader("Content-Type", "application/json");

  res.write(JSON.stringify({ message: "istek adres tanimsiz" }));
  return res.end();
};
module.exports = defaultRequest;
