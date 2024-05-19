const { app, router, port } = require("./app/index.js");

app.use("/", router);
// server init
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
