// j'import nodemailer
const nodemailer = require("nodemailer");
const mailTransporter = require("../utils/transporterMail");

const send = async (req, res) => {
	const { sender, subject, text } = req.body;

	/**
	 *
	 * req.body ? => corps de la requête
	 * req.query ? => dans l'url www.machin/student?lang=fr
	 * req.params ? => dans l'url aussi /:id ex : www.machin/student/1
	 *
	 */

	// je crée un compte test avec nodemailer
	let testAccount = await nodemailer.createTestAccount();

	const transporter = mailTransporter(testAccount.user, testAccount.pass);

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: sender, // sender address
		to: "contact@externatic.com", // list of receivers
		subject: subject, // Subject line
		text: text, // plain text body
		html: `<b>${text} </b>`, // html body
	});

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

	res.status(200).json({ success: "Message bien envoyé" });
};

module.exports = {
	send,
};
