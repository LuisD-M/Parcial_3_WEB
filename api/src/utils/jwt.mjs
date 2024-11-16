import jwt from 'jsonwebtoken';

const generateJWT = (payload) => {
  const secretKey = process.env.JWT_SECRET;
  const options = { expiresIn: '1h' };  // Expira en 1 hora
  return jwt.sign(payload, secretKey, options);
};

export  {generateJWT};