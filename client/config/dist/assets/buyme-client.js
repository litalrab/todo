"use strict";



define('buyme-client/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        exports.default = _emberData.default.JSONAPIAdapter.extend({
                host: 'http://localhost:8000'

        });
});
define('buyme-client/app', ['exports', 'buyme-client/resolver', 'ember-load-initializers', 'buyme-client/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('buyme-client/components/footer-comp', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        todo: Ember.inject.service()
    });
});
define('buyme-client/components/header-comp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('buyme-client/components/todo-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    todo: Ember.inject.service(),
    store: Ember.inject.service('store'),

    actions: {
      changeToDone: function changeToDone() {
        this.task.set('isDone', true);
        this.task.save();
        this.get('todo').add();
      },
      deleteTask: function deleteTask(id) {
        // console.log(this.task._internalModel._data)
        this.get('todo').removeTask(this.task._internalModel._data.isDone);

        console.log(this.task);
        this.task.deleteRecord();
        console.log(this.task);

        this.task.save();
      },
      editDescription: function editDescription() {
        this.set('editDescription', true);
      },
      editTask: function editTask() {
        console.log(this.task._internalModel._data);
        var description = this.get('des');
        this.task.set('description', description);
        this.get('todo').editTask(this.task._internalModel._data.isDone);

        this.task.set('isDone', false);

        this.task.save();
        this.set('editDescription', false);
      }
    }
  });
});
define('buyme-client/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('buyme-client/controllers/add-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        todo: Ember.inject.service(),

        actions: {
            addTask: function addTask() {
                var description = this.get('des');
                // this.transitionToRoute("/");                     
                var newTask = this.get('store').createRecord('task', { description: description, isDone: false });
                newTask.save();
                this.get('todo').addTask();
            }

        }
    });
});
define('buyme-client/controllers/todo-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        todo: Ember.inject.service(),

        actions: {
            changeToDone: function changeToDone(num) {
                // let des =this.get('des');
                // alert(num) ;
                // this.task.set('done', !this.task.get('done'))
                // this.task.save();
                this.todo.change(num);

                // this.todos.change({ description: num, isDone:false });
            }
        }
    });
});
define('buyme-client/helpers/app-version', ['exports', 'buyme-client/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('buyme-client/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('buyme-client/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('buyme-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'buyme-client/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('buyme-client/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('buyme-client/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('buyme-client/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('buyme-client/initializers/export-application-global', ['exports', 'buyme-client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
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
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('buyme-client/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('buyme-client/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('buyme-client/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("buyme-client/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('buyme-client/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        description: _emberData.default.attr('string'),
        isDone: _emberData.default.attr('boolean', { defaultValue: false })

    });
});
define('buyme-client/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('buyme-client/router', ['exports', 'buyme-client/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('todo-list', { path: '/' });
    this.route('add-item');
  });

  exports.default = Router;
});
define('buyme-client/routes/add-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('buyme-client/routes/todo-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return this.get('store').findAll('task');
        }

    });
});
define('buyme-client/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer;
});
define('buyme-client/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('buyme-client/services/todo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service('store'),

    done: 0,
    total: 0,
    todo: 0,

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      var completedCounter = 0;
      this.get('store').findAll('task').then(function (results) {
        results.content.forEach(function (mission) {
          console.log(mission);
          if (mission._data.isDone) {
            completedCounter++;
          }
        });
        console.log(results.content.length);

        _this.set('done', completedCounter);
        _this.set('total', results.content.length);
        _this.set('todo', results.content.length - completedCounter);
        console.log(_this.todo);
      });
    },
    editTask: function editTask(isDone) {
      if (isDone) {
        this.set('done', this.done - 1);
        this.set('todo', this.todo + 1);
      }
    },
    addTask: function addTask() {
      this.set('total', this.total + 1);
      this.set('todo', this.todo + 1);
    },
    add: function add() {
      this.set('done', this.done + 1);
      this.set('todo', this.todo - 1);
    },
    removeTask: function removeTask(isDone) {
      if (isDone) {
        this.set('done', this.done - 1);
      } else {
        this.set('todo', this.todo - 1);
      }
      // this.items.removeObject(item);
      this.set('total', this.total - 1);
    }

    // empty() {
    //   this.items.clear();
    // }

  });
});
define("buyme-client/templates/add-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g8FuWf4l", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"form\"],[9,\"id\",\"task-add-form\"],[7],[0,\"\\n\\n\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"addTask\"]],[7],[0,\"הוסף\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-width\",[20,[\"des\"]],\"...הקלד כאן\"]]],false],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\"],[4,\"link-to\",[\"todo-list\"],null,{\"statements\":[[0,\"חזרה לדף ראשי\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/add-item.hbs" } });
});
define("buyme-client/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uqZN6JuS", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[18,\"header-comp\"],false],[0,\"\\n\\n\"],[1,[18,\"footer-comp\"],false],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/application.hbs" } });
});
define("buyme-client/templates/components/footer-comp", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "F21q06H8", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"id\",\"footer\"],[7],[0,\"\\n  \\n      \"],[6,\"span\"],[7],[1,[20,[\"todo\",\"todo\"]],false],[0,\" : לסיום  \"],[8],[0,\"\\n    \"],[6,\"span\"],[7],[1,[20,[\"todo\",\"done\"]],false],[0,\" :  הושלמו  \"],[8],[0,\"\\n    \"],[6,\"span\"],[7],[0,\" \"],[1,[20,[\"todo\",\"total\"]],false],[0,\" : סה\\\"כ \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/components/footer-comp.hbs" } });
});
define("buyme-client/templates/components/header-comp", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AMXn1F08", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"header\"],[7],[0,\"\\n  \\n\"],[4,\"link-to\",[\"add-item\"],[[\"class\",\"tagName\"],[\"btn btn-primary task-add\",\"button\"]],{\"statements\":[[0,\"     \"],[6,\"span\"],[9,\"class\",\"plus\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"h1\"],[9,\"id\",\"title\"],[7],[0,\"\\n        משימות\\n\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/components/header-comp.hbs" } });
});
define("buyme-client/templates/components/todo-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l79WlnoT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"    \"],[6,\"link\"],[9,\"rel\",\"stylesheet\"],[9,\"href\",\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"],[7],[8],[0,\"\\n\\n\"],[6,\"li\"],[9,\"class\",\"checkbox\"],[7],[0,\"\\n\\n        \"],[6,\"input\"],[9,\"type\",\"checkbox\"],[10,\"disabled\",[20,[\"task\",\"isDone\"]],null],[10,\"checked\",[20,[\"task\",\"isDone\"]],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"changeToDone\",[20,[\"task\",\"description\"]]],null],null],[7],[8],[0,\"\\n\\n\\n\\n      \"],[6,\"span\"],[9,\"id\",\"task-del\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"deleteTask\",[20,[\"task\",\"id\"]]],null],null],[7],[0,\"X\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",[25,\"if\",[[20,[\"task\",\"isDone\"]],\"lit\"],null],null],[7],[1,[20,[\"task\",\"description\"]],false],[8],[0,\"\\n\"],[0,\"      \"],[6,\"i\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"editDescription\"],null],null],[9,\"class\",\"fa fa-edit edit\"],[9,\"style\",\"font-size:20px\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"editDescription\"]]],null,{\"statements\":[[0,\"     \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-width\",[20,[\"des\"]],\"אנא הקלד טקסט כאן..\"]]],false],[0,\"\\n\"],[0,\"      \"],[6,\"button\"],[9,\"type\",\"sumbit\"],[3,\"action\",[[19,0,[]],\"editTask\"]],[7],[0,\"אשר\"],[8],[0,\"\\n\"],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\\n\"],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/components/todo-item.hbs" } });
});
define("buyme-client/templates/todo-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IeNaZpQb", "block": "{\"symbols\":[\"todo\",\"index\"],\"statements\":[[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"ol\"],[9,\"id\",\"todo-list\"],[9,\"dir\",\"rtl\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"\\n        \"],[1,[25,\"todo-item\",null,[[\"task\",\"index\",\"class\",\"editDescription\",\"tasks\"],[[19,1,[]],[19,2,[]],\"todo-list\",false,[20,[\"model\"]]]]],false],[0,\"\\n\\n\"],[0,\"\\n\\n\\n\"]],\"parameters\":[1,2]},null],[8],[0,\"\\n\"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme-client/templates/todo-list.hbs" } });
});


define('buyme-client/config/environment', [], function() {
  var prefix = 'buyme-client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("buyme-client/app")["default"].create({"name":"buyme-client","version":"0.0.0+ca5cfe71"});
}
//# sourceMappingURL=buyme-client.map
