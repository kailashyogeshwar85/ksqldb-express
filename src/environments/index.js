const environments = {
  development: {
    API_BASE_URL : 'http://localhost:3002'
  },
  production: {
    API_BASE_URL : 'http://ksqldb-express'
  }
}

export default environments[process.env.REACT_APP_ENV] || environments['development'];
