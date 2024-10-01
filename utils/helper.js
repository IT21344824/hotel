import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password) {
  const saltRounds = 10; // Set salt rounds
  const salt = await bcrypt.genSalt(saltRounds); // Generate salt asynchronously
  const hash = await bcrypt.hash(password, salt); // Hash the password asynchronously
  return hash; // Return the hash directly as a string
}
