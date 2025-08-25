


const register = async (req, res) => {
  const { username, email, password, role = "user" } = req.body; // default role "user"
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role",
      [username, email, hashedPassword, role]
    );

    res.status(201).json({
      message: "User registered successfully", // frontend ke liye "message" field
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message }); // frontend ke liye "message"
  }
};
