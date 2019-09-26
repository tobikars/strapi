'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */
const _ = require('lodash');
const uuid = require('uuid/v4');

module.exports = async () => {
  if (!_.get(strapi.plugins['users-permissions'], 'config.jwtSecret')) {
    const jwtSecret = uuid();
    _.set(strapi.plugins['users-permissions'], 'config.jwtSecret', jwtSecret);

    await strapi.fs.writePluginFile(
      'users-permissions',
      'config/jwt.json',
      JSON.stringify({ jwtSecret }, null, 2)
    );
  }

  const pluginStore = strapi.store({
    environment: '',
    type: 'plugin',
    name: 'users-permissions',
  });

  const grantConfig = {
    email: {
      enabled: true,
      icon: 'envelope',
    },
    // WARNING: for a new provider (such as scantrust!), the below settings MUST be added to 
    // oauth.json in node_modules/grant/config/oauth.json 
    // "scantrust": {
    //   "authorize_url": "http://localhost:8000/o/authorize",
    //   "access_url": "http://localhost:8000/o/token/",
    //   "oauth": 2,
    //   "scope_delimiter": " "
    // }
    scantrust: {
      enabled: false,
      icon: 'qrcode',
      key: 'go8KI1pkBJvlRJ0MNfD9S4i3CgGHNAPeevzskkH2',
      secret: 'rVKy3uVaBMoiN645SkGh2L3Q2KFx2ZmEhGll8GNfKBSr7sWsTdi1WvYNYpeme6KOiMWgMoevl0g0SrJWnnhbftkBwsjnT2WiebxD6p5WWm6VUeJyq4tw7Ru3Yyrp1Adc',
      callback: '/auth/scantrust/callback',
      authorize_url: "http://localhost:8000/o/authorize",  // added instead of in oauth.json
      access_url: "http://localhost:8000/o/token/",  // added instead of in oauth.json
      oauth: 2,  // added instead of in oauth.json
      scope_delimiter: " ", // added instead of in oauth.json
      scope: ['read', 'write', 'introspection'],
    },
    discord: {
      enabled: false,
      icon: 'comments',
      key: '',
      secret: '',
      callback: '/auth/discord/callback',
      scope: ['identify', 'email'],
    },
    facebook: {
      enabled: false,
      icon: 'facebook-official',
      key: '',
      secret: '',
      callback: '/auth/facebook/callback',
      scope: ['email'],
    },
    google: {
      enabled: false,
      icon: 'google',
      key: '',
      secret: '',
      callback: '/auth/google/callback',
      scope: ['email'],
    },
    github: {
      enabled: false,
      icon: 'github',
      key: '',
      secret: '',
      redirect_uri: '/auth/github/callback',
      scope: ['user', 'user:email'],
    },
    microsoft: {
      enabled: false,
      icon: 'windows',
      key: '',
      secret: '',
      callback: '/auth/microsoft/callback',
      scope: ['user.read'],
    },
    twitter: {
      enabled: false,
      icon: 'twitter',
      key: '',
      secret: '',
      callback: '/auth/twitter/callback',
    },
    instagram: {
      enabled: false,
      icon: 'instagram',
      key: '',
      secret: '',
      callback: '/auth/instagram/callback',
    },
  };
  const prevGrantConfig = (await pluginStore.get({ key: 'grant' })) || {};
  // store grant auth config to db
  // when plugin_users-permissions_grant is not existed in db
  // or we have added/deleted provider here.
  if (
    !prevGrantConfig ||
    !_.isEqual(_.keys(prevGrantConfig), _.keys(grantConfig))
  ) {
    // merge with the previous provider config.
    _.keys(grantConfig).forEach(key => {
      if (key in prevGrantConfig) {
        grantConfig[key] = _.merge(grantConfig[key], prevGrantConfig[key]);
      }
    });
    await pluginStore.set({ key: 'grant', value: grantConfig });
  }

  if (!(await pluginStore.get({ key: 'email' }))) {
    const value = {
      reset_password: {
        display: 'Email.template.reset_password',
        icon: 'refresh',
        options: {
          from: {
            name: 'Administration Panel',
            email: 'no-reply@strapi.io',
          },
          response_email: '',
          object: '­Reset password',
          message: `<p>We heard that you lost your password. Sorry about that!</p>

<p>But don’t worry! You can use the following link to reset your password:</p>

<p><%= URL %>?code=<%= TOKEN %></p>

<p>Thanks.</p>`,
        },
      },
      email_confirmation: {
        display: 'Email.template.email_confirmation',
        icon: 'check-square-o',
        options: {
          from: {
            name: 'Administration Panel',
            email: 'no-reply@strapi.io',
          },
          response_email: '',
          object: 'Account confirmation',
          message: `<p>Thank you for registering!</p>

<p>You have to confirm your email address. Please click on the link below.</p>

<p><%= URL %>?confirmation=<%= CODE %></p>

<p>Thanks.</p>`,
        },
      },
    };

    await pluginStore.set({ key: 'email', value });
  }

  if (!(await pluginStore.get({ key: 'advanced' }))) {
    const value = {
      unique_email: true,
      allow_register: true,
      email_confirmation: false,
      email_confirmation_redirection: `http://${strapi.config.currentEnvironment.server.host}:${strapi.config.currentEnvironment.server.port}/admin`,
      default_role: 'authenticated',
    };

    await pluginStore.set({ key: 'advanced', value });
  }

  return strapi.plugins[
    'users-permissions'
  ].services.userspermissions.initialize();
};
