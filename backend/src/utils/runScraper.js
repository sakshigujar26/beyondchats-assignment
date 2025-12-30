const dotenv = require("dotenv");
const connectDB = require("../config/db");
const scrapeBeyondChats = require("./scrapeBeyondChats");

dotenv.config();

const run = async () => {
  await connectDB();
  await scrapeBeyondChats();
  process.exit();
};

run();
