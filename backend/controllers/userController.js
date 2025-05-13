const userServices = require("../services/userServices");

exports.getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    res.json({ users });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userServices.getUserById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    res.json({ user });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  const { userName } = req.body;

  if (!userName) {
    return res.status(400).json({
      success: false,
      error: "Username is required",
    });
  }

  try {
    await userServices.createUser(userName);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { userName } = req.body;

  if (!userName || !email) {
    return res.status(400).json({
      success: false,
      error: "Username is required",
    });
  }

  try {
    await userServices.updateUser(id, userName);
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "User ID is required",
    });
  }

  try {
    await userServices.deleteUser(id);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
