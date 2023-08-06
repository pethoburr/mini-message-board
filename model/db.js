const mongoose = require("mongoose");
const { mainModule } = require("process");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://mpahal123:admin@cluster0.9myeoo2.mongodb.net/?retryWrites=true&w=majority";

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    a_string: String,
    a_string: String,
    a_date: Date
})

const MsgModel = mongoose.model("MsgModel", modelSchema);

async function main() {
    await mongoose.connect(mongoDB);
}

module.exports = MsgModel;
main().catch((err) => console.log(err));