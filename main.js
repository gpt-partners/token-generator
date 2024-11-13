const jwt = require("jsonwebtoken");

const payload = {
  role: "service_role", // or `anon`
  iss: "supabase",
};

const options = {
  expiresIn: "1y",
};

const token = jwt.sign(payload, process.env.SUPABASE_JWT_SECRET, options);
console.log(token);
