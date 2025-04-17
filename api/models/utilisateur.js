const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({
    nom: 
	{
        type: String,
        required: [true, "Le nom est requis"],
        minlength: [1, "Le nom doit contenir au moins 1 caractère"],
        maxlength: [50, "Le nom ne peut pas dépasser 50 caractères"],
        unique: true,
    },
    courriel: 
	{
        type: String,
        required: [true, "Le courriel est requis"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Veuillez entrer un courriel valide"]
    },
    motDePasse: 
	{
		// La validation avec le champ : confirmation du motdepasse
		// sera dans le controller de authentification
        type: String,
        required: [true, "Le mot de passe est requis"],
        minlength: [6, "Le mot de passe doit contenir au moins 6 caractères"]
    }
}, 
{
    timestamps: true
});


module.exports = mongoose.model("Utilisateur", utilisateurSchema);