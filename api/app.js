"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());  


app.use((req, res, next) => {
	
	next();
});


// Importe les routes
const authRoutes = require("./routes/auth");
const utilisateurRoutes = require("./routes/utilisateur");
const tableauRoutes = require("./routes/tableau");
const listeRoutes = require("./routes/liste");
const carteRoutes = require("./routes/carte");

// Utilisation des routes en tant que middleware
app.use(authRoutes);
app.use(utilisateurRoutes);
app.use(tableauRoutes);
app.use(listeRoutes);
app.use(carteRoutes);




// Démarrage du serveur
(async () => {
	try {
		await mongoose.connect(process.env.DATA_BASE);
  
		app.listen(process.env.PORT, () => {
			console.log(`Serveur à l'écoute sur : http://localhost:${process.env.PORT}`);
		});
	} catch (err) {
		console.error("Erreur de connexion à MongoDB :", err);
	}
  })();
