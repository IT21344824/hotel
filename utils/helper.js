import bcrypt from "bcryptjs";

export function saltAndHashPassword(password) {
  const saltRounds = 10; // Adjust to user salt round
  const salt = bcrypt.genSaltSync(saltRounds); // Synchronoustly generate a salt
  const hash = bcrypt.hashSync(password, salt); // Synchronoustly hash the password
  return hash; // Return the hash directly as a string
}
