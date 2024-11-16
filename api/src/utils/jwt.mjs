import jwt from 'jsonwebtoken';

const generateJWT = (payload) => {
  const secretKey = process.env.JWT_SECRET;
  const options = { expiresIn: '1h' };  
  return jwt.sign(payload, secretKey, options);
};

export  {generateJWT};