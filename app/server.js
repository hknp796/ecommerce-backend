import app from "./index.js";
import connect from "./config/db.js";

const port = 8080;
app.listen(port, async () => {
  await connect();
  console.log(`Listening to port ${port}`);
});
