'use strict';



;define("web-miniproject/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    namespace: 'api',
    host: 'https://web-miniproject-server.herokuapp.com'
  });

  _exports.default = _default;
});
;define("web-miniproject/app", ["exports", "web-miniproject/resolver", "ember-load-initializers", "web-miniproject/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("web-miniproject/components/file-field", ["exports", "ember-uploader/components/file-field"], function (_exports, _fileField) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileField.default;
    }
  });
});
;define("web-miniproject/components/file-upload", ["exports", "ember-uploader/components/file-field", "ember-uploader/uploaders/uploader"], function (_exports, _fileField, _uploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _fileField.default.extend({
    url: "",

    filesDidChange(files) {
      let url = this.get('url');

      const uploader = _uploader.default.create({
        url: this.get(url)
      });

      if (!Ember.isEmpty(files)) {
        uploader.upload(files[0]);
        console.log(files[0]);
      }
    }

  });

  _exports.default = _default;
});
;define("web-miniproject/components/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("web-miniproject/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("web-miniproject/helpers/app-version", ["exports", "web-miniproject/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("web-miniproject/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("web-miniproject/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("web-miniproject/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "web-miniproject/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("web-miniproject/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("web-miniproject/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("web-miniproject/initializers/export-application-global", ["exports", "web-miniproject/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("web-miniproject/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("web-miniproject/models/post", ["exports", "ember-data", "web-miniproject/routes/application"], function (_exports, _emberData, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _application.default.Post = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    image: _emberData.default.attr('string'),
    text: _emberData.default.attr('string'),
    comments: _emberData.default.hasMany('comment')
  });
  _application.default.Comment = _emberData.default.Model.extend({
    text: _emberData.default.attr('string')
  });
  var _default = _application.default.Post;
  _exports.default = _default;
});
;define("web-miniproject/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("web-miniproject/router", ["exports", "web-miniproject/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('postPage');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("web-miniproject/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('postPage');
    }

  });

  _exports.default = _default;
});
;define("web-miniproject/routes/post-page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('post');
    }

  });

  _exports.default = _default;
});
;define("web-miniproject/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    primaryKey: '_id',
    serializeId: function (id) {
      return id.toString();
    }
  });

  _exports.default = _default;
});
;define("web-miniproject/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _ajax.default.extend({
    host: 'https://web-miniproject-server.herokuapp.com/api/posts'
  });

  _exports.default = _default;
});
;define("web-miniproject/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0duqmUTO",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "web-miniproject/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("web-miniproject/templates/components/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iht+7pZX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"header\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/client/public/images/logo.png\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n    Wahoo\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "web-miniproject/templates/components/header.hbs"
    }
  });

  _exports.default = _default;
});
;define("web-miniproject/templates/post-page", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "m5Gzb2L5",
    "block": "{\"symbols\":[\"post\"],\"statements\":[[0,\"\\n\"],[1,[21,\"header\"],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"newPostCont\"],[9],[0,\"\\n    \"],[7,\"h4\"],[9],[0,\"Make a new post\"],[10],[0,\"\\n    \"],[7,\"form\"],[11,\"action\",\"/api/posts\"],[9],[0,\"\\n        Title: \"],[1,[27,\"input\",null,[[\"value\"],[[23,[\"title\"]]]]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Text: \"],[1,[27,\"input\",null,[[\"value\"],[[23,[\"text\"]]]]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        Image: \"],[1,[27,\"file-upload\",null,[[\"url\",\"class\"],[\"/upload\",\"newPostButton\"]]],false],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"button\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"timeline\"],[9],[0,\"\\n\"],[4,\"each\",[[22,0,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[7,\"div\"],[11,\"class\",\"postCont\"],[9],[0,\"\\n\\t\\t\\t\"],[7,\"p\"],[9],[0,\"Id: \"],[1,[22,1,[\"id\"]],false],[10],[0,\"\\n\\t\\t\\t\"],[7,\"h1\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\\t\\t\\t\\n\\t\\t\\t\"],[1,[22,1,[\"image\"]],false],[0,\" \\n\\t\\t\\t\"],[7,\"h3\"],[9],[1,[22,1,[\"text\"]],false],[10],[0,\" \"],[7,\"br\"],[9],[10],[0,\"\\n\\t\\t\"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "web-miniproject/templates/post-page.hbs"
    }
  });

  _exports.default = _default;
});
;define("web-miniproject/uploaders/s3", ["exports", "ember-uploader/uploaders/s3"], function (_exports, _s) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _s.default;
    }
  });
});
;define("web-miniproject/uploaders/uploader", ["exports", "ember-uploader/uploaders/uploader"], function (_exports, _uploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uploader.default;
    }
  });
});
;

;define('web-miniproject/config/environment', [], function() {
  var prefix = 'web-miniproject';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("web-miniproject/app")["default"].create({"name":"web-miniproject","version":"0.0.0+196a41d2"});
          }
        
//# sourceMappingURL=web-miniproject.map
