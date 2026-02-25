const prisma = require("../prismaClient");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.login_User.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers };
