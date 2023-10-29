const mongoose = require("mongoose");
const dbconection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - ver logs");
  }
};

module.exports = {
  dbconection,
};
