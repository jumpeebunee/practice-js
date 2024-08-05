const sql = (str, ...values) => {
  const result = [str[0]];

  for (let i = 0; i < values.length; i++) {
    result.push(`'${values[i]}'`, str[i + 1]);
  }

  return result.join("");
};

const userId = 123;
const userName = "O'Reilly";
const query = sql`SELECT * FROM users WHERE id = ${userId} AND name = ${userName}`;

console.log(query);

const userEmail = "example@example.com";
const insertQuery = sql`INSERT INTO users (name, email) VALUES (${userName}, ${userEmail})`;

console.log(insertQuery);
