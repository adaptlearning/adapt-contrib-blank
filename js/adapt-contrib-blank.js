/*
* adapt-contrib-blank
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Corry <kevinc@learningpool.com>
*/
define(function(require) {
  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var Blank = ComponentView.extend({

    postRender: function() {
      this.setReadyStatus();
      this.setCompletionStatus();
    }

  });

  Adapt.register("blank", Blank);

});
