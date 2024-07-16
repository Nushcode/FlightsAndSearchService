import express from 'express';
import config from "./config/serverConfig"


const app = express();
app.use(express.json());

app.listen(config.PORT, () => {
  console.log(`Server started on port: ${config.PORT}`);
  console.log('Updated..');
});