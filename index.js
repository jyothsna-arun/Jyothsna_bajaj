const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

// GET /bfhl
app.get("/bfhl", (req, res) => {
  res.json({
    is_success: true,
    user_id: "Jyothsna_01112004",
    email: "jyothsna.a2022@vitstudent.ac.in",
    roll_number: "22BAI1024",
    odd_numbers: ["1"],
    even_numbers: ["334","4"],
    alphabets: ["M","B"],
    special_characters: [],
    sum: "339",
    concat_string: "Bm"
  });
});

// POST /bfhl
app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];

  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
      sum += num;
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
    } else {
      special_characters.push(item);
    }
  });

  let concat_string = alphabets.reverse().map((char, i) =>
    i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join("");

  res.json({
    is_success: true,
    user_id: "Jyothsna_01112004",
    email: "jyothsna.a2022@vitstudent.ac.in",
    roll_number: "22BAI1024",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
