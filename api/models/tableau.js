const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableauSchema = new Schema({
    titre: 
    {
        type: String,
        required: [true, "Le titre est requis"],
        minlength: [1, "Le titre doit contenir au moins 1 caractère"],
        maxlength: [100, "Le titre ne peut pas dépasser 100 caractères"],
        unique: true
    },
    listes: 
    [{
        type: Schema.Types.ObjectId,
        ref: "Liste"
    }],
    proprietaire: {
        type: Schema.Types.ObjectId,
        ref: "Utilisateur",
        required: [true, "Le propriétaire est requis"]
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Tableau", tableauSchema);