var crypto = require('crypto');
//通过伪随机码生成salt，进行加密
var txt = '123456';
crypto.randomBytes(128, function (err, salt) {
  if (err) { throw err;}
  salt = salt.toString('hex');
  console.log(salt); //生成salt

  crypto.pbkdf2(txt, salt, 4096, 256, function (err,hash) {
    if (err) { throw err; }
    hash = hash.toString('hex');
    console.log(hash);//生成密文
  })
})
