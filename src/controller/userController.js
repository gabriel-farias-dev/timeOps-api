const prisma = require("../prismaClient");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.login_User.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const setUser = async (req, res) => {
  try {
    const { name, email, password, role, active } = req.body;

    //Preciso checar agora se o email e a senha estão preenchidos,
    //eles são precisos para que aconteça a inserção do dado
    if (!email || !password) {
      return res.status(400).json({ erros: "Email e Senha são obrigatorios" });
    }

    // Estou fazendo com que a senha do usuario não seja gravada dentro do banco de dados
    const encrptPwd = await bcrypt.hash(password, 10);

    const newUser = await prisma.login_User.create({
      data: {
        name,
        email,
        encrptPwd,
        role,
        active,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = (req,res) => {
  const {email} = req.body;

  const user = async prisma.findUnique
}

// id Int @id @default(autoincrement())
// name String
// email String
// password String
// role String
// active Boolean

module.exports = { getUsers, setUser };
