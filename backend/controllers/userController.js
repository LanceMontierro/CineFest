import userSchema from "../models/User.js";

export const saveUser = async (req, res) => {
  const { email, userName, userId } = req.body;

  if (!email || !userId) {
    return res.status(400).json({ message: "email and userId are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });
    if (user) {
      return res.status(200).json({ message: "User already exists" });
    } else {
      const newUser = new userSchema({
        email,
        userName,
        userId,
      });
      await newUser.save();
      return res.status(201).json({ message: "User saved successfully" });
    }
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
