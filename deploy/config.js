module.exports = {
  id: 1,
  name: '生产环境',
  // domain: process.argv.splice(2)[0] === 'test' ? '	*****' : '******',
  host: '47.107.187.212',
  port: 22,
  username: 'root',
  password: '',
  nginxPath: '/usr/local/webserver/nginx',
  staticPath: '/app/html/games'
  // staticPath: process.argv.splice(2)[0] === 'test' ? '/html/test' : '/html/pro'
}