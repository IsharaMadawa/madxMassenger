const helmet = require('helmet');
const compression = require('compression');
const express = require("express");

const app = express();

// Set public folder as root
app.use(express.static("public"));
app.use(helmet());
app.use(compression());


// Provide access to node_modules folder from the client-side
app.use("/scripts", express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.info("listening on %d", port);
});
