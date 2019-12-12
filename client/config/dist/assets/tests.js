'use strict';

define('buyme-client/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/footer-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-comp.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-comp.js should pass ESLint\n\n');
  });

  QUnit.test('components/todo-item.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/todo-item.js should pass ESLint\n\n6:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n7:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:24 - \'id\' is defined but never used. (no-unused-vars)\n19:15 - Unexpected console statement. (no-console)\n21:15 - Unexpected console statement. (no-console)\n32:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/add-item.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-item.js should pass ESLint\n\n6:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('controllers/todo-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/todo-list.js should pass ESLint\n\n');
  });

  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/add-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/todo-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/todo-list.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/todo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/todo.js should pass ESLint\n\n6:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:15 - Unexpected console statement. (no-console)\n24:13 - Unexpected console statement. (no-console)\n29:11 - Unexpected console statement. (no-console)');
  });
});
define('buyme-client/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('buyme-client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'buyme-client/tests/helpers/start-app', 'buyme-client/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('buyme-client/tests/helpers/start-app', ['exports', 'buyme-client/app', 'buyme-client/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('buyme-client/tests/integration/components/footer-comp-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('footer-comp', 'Integration | Component | footer comp', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "I7bKgbQE",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"footer-comp\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "5vPlPt/5",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"footer-comp\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme-client/tests/integration/components/header-comp-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('header-comp', 'Integration | Component | header comp', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "bP2LaV72",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"header-comp\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "4HOe9lQ+",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-comp\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme-client/tests/integration/components/todo-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('todo-item', 'Integration | Component | todo item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "VodEiyUW",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"todo-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "AxYyXTkF",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"todo-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme-client/tests/test-helper', ['buyme-client/app', 'buyme-client/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('buyme-client/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/footer-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-comp-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-comp-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/todo-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/todo-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/add-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/todo-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/todo-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/add-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/todo-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/todo-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/todo-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/todo-service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/todo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/todo-test.js should pass ESLint\n\n');
  });
});
define('buyme-client/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('buyme-client/tests/unit/controllers/add-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:add-item', 'Unit | Controller | add item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('buyme-client/tests/unit/controllers/todo-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:todo-list', 'Unit | Controller | todo list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('buyme-client/tests/unit/models/task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('buyme-client/tests/unit/routes/add-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:add-item', 'Unit | Route | add item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('buyme-client/tests/unit/routes/todo-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:todo-list', 'Unit | Route | todo list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('buyme-client/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('buyme-client/tests/unit/services/todo-service-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:todo-service', 'Unit | Service | todo service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('buyme-client/tests/unit/services/todo-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:todo', 'Unit | Service | todo', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('buyme-client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
