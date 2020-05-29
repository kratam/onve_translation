var fs = require('fs')
// var chalk = require('chalk');

module.exports = {
  input: [
    '../app/**/*.{js,jsx}',
    // Use ! to filter out files or directories
    '!**/*.spec.{js,jsx}',
    '!**/*.test.{js,jsx}',
    '!../app/**/node_modules/**',
    // '!../app/**/securedMethod/**'
  ],
  output: './',
  options: {
    debug: true,
    removeUnusedKeys: true,
    plural: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: false,
    lngs: ['en', 'hu'],
    ns: [
      'translations',
      'apartments',
      'reservations',
      'costs',
      'invoice',
      'calendar',
      'features',
    ],
    defaultLng: 'en',
    defaultNs: 'translations',
    defaultValue: (lng, ns, key) => {
      if (lng === 'en') {
        // Return key as the default value for English language
        return key
      }
      // if (ns === 'translations') return '___NOT_TRANSLATED___'
      return '___NOT_TRANSLATED___'
    },
    resource: {
      loadPath: '../app/public/locales/{{ns}}.{{lng}}.json',
      savePath: 'generated/{{ns}}.{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: '|', // namespace separator
    keySeparator: '>', // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  // transform: function customTransform(file, enc, done) {
  //     "use strict";
  //     const parser = this.parser;
  //     const content = fs.readFileSync(file.path, enc);
  //     let count = 0;

  //     parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
  //         parser.set(key, Object.assign({}, options, {
  //             nsSeparator: false,
  //             keySeparator: false
  //         }));
  //         ++count;
  //     });

  //     if (count > 0) {
  //         console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
  //     }

  //     done();
  // }
}
