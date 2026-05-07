/**
 * 线上配置
 */
module.exports = {
  tcbConfig: {
    env: 'mianshiya-xxx', // 改为你的云开发 id
    secretId: 'xxx',
    secretKey: 'xxx',
    credentials: require('../service/login/tcb_custom_login_key(mianshiya-xxx).json'),
  },
  redisConfig: {
    host: 'redis',
    port: '6379',
    // 本地 Docker Redis 没有密码
    // password: 'xxx',
  },
};
