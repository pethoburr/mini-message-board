const mongoose = require("mongoose");
const { mainModule } = require("process");
mongoose.set("strictQuery", false);

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    a_string: String,
    a_string: String,
    a_date: Date
})

const MsgModel = mongoose.model("MsgModel", modelSchema);

// '/home/maninder/.fly/bin/flyctl --help'

module.exports = MsgModel;