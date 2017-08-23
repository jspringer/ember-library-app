/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment,
    rootURL: '/',
    locationType: 'auto',

    // !!! UPDATE THESE KEYS !!!
    // Visit https://console.firebase.google.com/
    // Click on your app. Click on Overview. Click on "Add Firebase to your web app". Copy paste those keys.
    firebase: {
      apiKey: "AIzaSyDOru1JwHlTqBE-G_08TY9MrbXWxV_vk38",
      authDomain: "ember-library-47486.firebaseapp.com",
      databaseURL: "https://ember-library-47486.firebaseio.com",
      projectId: "ember-library-47486",
      storageBucket: "ember-library-47486.appspot.com",
      messagingSenderId: "553158163043"
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    // We need this for activating Faker in production environment.
    ENV['ember-faker'] = {
      enabled: true
    };
  }

  return ENV;
};
