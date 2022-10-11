module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:8000/api' // development api
          : 'http://localhost:8000/api' // production api
  }
}

