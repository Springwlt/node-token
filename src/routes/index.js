import express from 'express';
import user from './user';

const router = new express.Router();
router.use('/user', user);

router.get('/', async (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

export default router;

