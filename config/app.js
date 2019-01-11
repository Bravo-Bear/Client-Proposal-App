const { confidant } = require('hapi-utility-belt');

module.exports = new confidant({

  jwtSecret: process.env.JWT_SECRET || 'nein',
  appSecret: process.env.APP_SECRET || 'niet',

  devRoutePassword: process.env.ROUTE_PASSWORD || 'zendmin',

  blog: {
    url: process.env.BLOG_URL,
    client_secret: process.env.BLOG_SECRET,
    client_id: process.env.BLOG_ID
  },
  content: {
    url: process.env.CONTENT_URL,
    client_secret: process.env.CONTENT_SECRET,
    client_id: process.env.CONTENT_ID
  },

  // Google API keys etc
  serviceKeys: {
    googleMaps: process.env.GOOGLE_MAPS_API_KEY
  },

  smtp: {

    $filter: 'env',
    development: {
      host: process.env.SMTP_HOST || 'localhost',
      port: process.env.SMTP_PORT || 1025,
      secure: false
    },
    test: {
      host: process.env.SMTP_HOST || 'localhost',
      port: process.env.SMTP_PORT || 1025,
      secure: false
    },
    staging: {
      host: process.env.SES_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SES_USER,
        pass: process.env.SES_PASS
      }
    },
    production: {
      host: process.env.SES_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SES_USER,
        pass: process.env.SES_PASS
      }
    }
  },

  mailerLocals: {
    zencare_members_url: process.env.ZENCARE_MEMBERS_URL,
    zencare_website_url: process.env.ZENCARE_WEBSITE_URL
  },

  devMode: {

    $filter: 'env',
    development: true,
    $default: false
  },

  auth: {
    sessionExpiresIn: 7 * 24 * 60 * 60 * 1000
  }
}, {

    client: process.env.CLIENT_KEY || 'clickedlabs'
  });