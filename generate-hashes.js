// generate-hashes.mjs  (use .mjs extension or keep .js with import)

import bcrypt from "bcryptjs";

const password = "admin123";
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then((hash) => {
  console.log("Password:", password);
  console.log("Hash:", hash);
  console.log("\nCopy this hash into your SQL INSERT:");
  console.log(`('${hash}')`);
});