const mongoose = require("mongoose");
const { mainModule } = require("process");
mongoose.set("strictQuery", false);

const dev_db_url = "mongodb+srv://mpahal123:admin@cluster0.9myeoo2.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = process.env.MONGODB_URI || dev_db_url;
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: String,
    message: String,
    date: String
})

const MsgModel = mongoose.model("MsgModel", modelSchema);

async function main() {
    await mongoose.connect(mongoDB);
}
   
main().catch((err) => console.log(err));

// '/home/maninder/.fly/bin/flyctl --help'

module.exports = MsgModel;