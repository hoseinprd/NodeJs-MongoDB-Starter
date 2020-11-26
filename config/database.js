const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
module.exports = async () => {
  try {
    const dbConnect = await mongoose.connect(
      process.env.MONGO_URI.concat(process.env.DB_USERNAME),
      options
    );
    console.log(`MongoDB is Connected ${dbConnect.connection.host}`);
  } catch (e) {
    // statements
    console.log("Mongo Crashed!");
  }
};
