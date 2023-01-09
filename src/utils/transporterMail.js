const nodemailer = require("nodemailer");

// Ici je prend 2 paramètres user et pass
// En théorie je peux les récupérer dans un fichier .env
// Mais pour l'exemple je les passe en paramètre
const transporter = (user, pass) => {
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: user, // generated ethereal user
			pass: pass, // generated ethereal password
		},
	});

	return transporter;
};

module.exports = transporter;
