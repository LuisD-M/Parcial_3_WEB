import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/config.mjs';

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token requerido' });

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ mensaje: 'Token inválido' });

    req.usuario = decoded;
    next();
  });
};

const setContentType = (req, res, next)=>{
  res.set('content-type','application/json');
  next();
}

export { verificarToken, setContentType };