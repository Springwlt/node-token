# Node token api

1. 如何在nodejs项目中使用token令牌进行验证.
 -  jwt.sign(profile, jwtSecret, {expiresIn: 1000*60} );
 -  参数说明：profile加密对象，jwtSecret：加密方式，{expiresIn: 1000*60}：过期时间。
 -  参考routes/user.js
2. 如何对用户的密码进行安全加密。
 -  如何生产盐，以及hash.
 -  实例代码参考 test/salt.js文件
 -  参考网站：http://blog.fens.me/nodejs-crypto/
 -  运行方式：node salt
3. 避免mongoose报警告。
 - mongoose.Promise = global.Promise;
## 技术栈
- nodejs
- express
- mongodb

## 项目简介
- 使用ES6/ES7特性
- 使用ESlint进行语法检测，遵循[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

# 安装依赖
yarn install

# 运行
yarn run start

# 构建
yarn run build

# 测试
yarn run test

# 部署
yarn run deploy:dev  部署至开发服务器
yarn run deploy:prod 部署至正式服务器
yarn run stop        暂停服务
yarn run reload      重载服务

