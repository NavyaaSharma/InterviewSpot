const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    target: 'serverless',
    publicRuntimeConfig:
    {
        APP_NAME: "INTERVIEW SPOT",
        API_DEV: "http://localhost:3000/api",
        API_PROD: "https://blogspot-api.herokuapp.com/api",
        PRODUCTION: true,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN: 'blogspot.theexpresscoder.com',
        FB_APP_ID: '',
        DISQUS_SHORTNAME: 'blogspot-4',
        SENDGRID_API_KEY: ''
    }
})