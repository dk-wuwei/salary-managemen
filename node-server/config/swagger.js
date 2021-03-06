/*
 * @Author: cui DengKe
 * @Date: 2021-06-24 09:18:08
 * @LastEditors: cui DengKe
 * @LastEditTime: 2021-06-24 09:55:16
 * @Description: swagger 配置
 * @FilePath: \node-server\config\swagger.js
 */

const router = require('koa-router')(); // 引入路由函数
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
  info: {
    description: 'API',
    version: '1.0.0',
    title: 'Koa2_server Swagger',
    // 服务条款
    // termsOfService: 'http://swagger.io/terms/',
    // contact: {
    //   name: 'Contact developers',
    //   url: 'https://mail.qq.com/',
    //   email: '741167479@qq.com'
    // },
    // // 开源协议
    // license: {
    //   name: 'Apache 2.0',
    //   url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    // }
  },
  host: 'localhost:3000',
  basePath: '/', // Base path (optional), host/basePath
  // schemes: ['http', 'https'],
  // securityDefinitions: {
  //   server_auth: {
  //     type: 'oauth2',
  //     description: '登录账号密码鉴权',
  //     tokenUrl: 'http://localhost:3000/image/oauth',
  //     flow: 'password',
  //     scopes: {
  //       token: 'modify pets in your account'
  //     }
  //   },
  //   token: {
  //     type: 'apiKey',
  //     name: 'token',
  //     in: 'header'
  //   }
  // }
};

const options = {
  swaggerDefinition,
  // 写有注解的router的存放地址(当你新增swagger时文档里没显示出来的话那么就是这边地址没有加进去)
  apis: ['./routers/*.js'] // routes下所有的js文件和routes/image下所有js文件
};

const swaggerSpec = swaggerJSDoc(options);

// 通过路由获取生成的注解文件
router.get('/swagger.json', async ctx => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
});

module.exports = router;
// 将页面暴露出去