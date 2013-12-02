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
