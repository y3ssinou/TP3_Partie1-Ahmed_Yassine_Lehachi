const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeSchema = new Schema({
    titre: 
    {
        type: String,
        required: [true, "Le titre est requis"],
        minlength: [1, "Le titre doit contenir au moins 1 caractère"],
        maxlength: [100, "Le titre ne peut pas dépasser 100 caractères"]
    },
    cartes: 
    [{
        type: Schema.Types.ObjectId,
        ref: "Carte"
    }],
    tableau: 
    {
        type: Schema.Types.ObjectId,
        ref: "Tableau",
        required: [true, "Le tableau est requis"]
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Liste", listeSchema);