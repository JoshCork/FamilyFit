(function() {
  'use strict';

  angular
    .module('familyFit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
