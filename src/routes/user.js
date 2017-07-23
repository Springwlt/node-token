import express from 'express';
import { User } from 'models';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const router = new express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  return res.send({ users });
});
router.post('/create', async (req, res, next) => {
  try {
    const {nickname,mobilephone,sex,pwd}  = req.body;
    if (!mobilephone || !nickname || !sex) throw new Error('参数错误');
    crypto.randomBytes(128, async(err, salt) => {
      if (err) { throw err;}
      salt = await salt.toString('hex');
      crypto.pbkdf2(pwd, salt, 4096, 256, async (err,hash) => {
        if (err) { throw err; };
        let user;
        user = new User({
          mobilephone,
          nickname,
          sex,
          salt,
          hash
        });
        user = await user.save();
        return res.send(user);
      })
    })
  } catch (err) {
    next(err);
  }
});

router.get('/token', async (req, res, next) => {
  try {
    const jwtSecret = 'aMdoeb5ed87zorRdkD6greDML81DcnrzeSD648ferFejmplx';   //加密方式
    const profile = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      id: 123
    };

    // 将用户信息加密在令牌内
    const token = jwt.sign(profile, jwtSecret, {expiresIn: 1000*60} );
    res.json({token: token});

  } catch (err) {
    next(err);
  }
});

router.get('/getUser', async (req, res, next) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWQiOjEyMywiaWF0IjoxNTAwNzk5NDU1LCJleHAiOjE1MDA4NTk0NTV9.h81RBYKESmCM1h6himP0nN0lbRSqmnESkBPy-aSbuUc";
    const user = jwt.decode(token);
    // 将用户信息加密在令牌内
    res.json({user: user});
  } catch (err) {
    next(err);
  }
});

export default router;
