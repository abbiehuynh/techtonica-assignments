const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("build"));

// moved get request to top of page from the bottom
  // allows us to see what endpoint is being used to access the data
app.get("/api/items", (req, res) => {
  res.send(items);
});

const items = [
  {
    name: "Laptop",
    price: 500,
  },
  {
    name: "Desktop",
    price: 700,
  },
];

// moved to bottom of page from the top
app.listen(PORT, () => console.log("Server started"));