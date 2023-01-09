const app = require("./src/app");

// Start the server
app.listen(5500, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server started on port 5500");
	}
});
