const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carteSchema = new Schema({
    titre: 
    {
        type: String,
        required: [true, "Le titre est requis"],
        minlength: [1, "Le titre doit contenir au moins 1 caractères"],
        maxlength: [100, "Le titre ne peut pas dépasser 100 caractères"]
    },
    description: 
    {
        type: String
    },
    dateLimite: 
    {
        type: Date
    },
    liste: 
    {
        type: Schema.Types.ObjectId,
        ref: "Liste",
        required: [true, "La liste est requise"]
    }
}, 
{
    timestamps: true
});


module.exports = mongoose.model("Carte", carteSchema);