const mongoose = require("mongoose");
const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - ver logs");
  }
};

module.exports = {
  dbConection,
};
