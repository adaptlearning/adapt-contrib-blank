/*
* adapt-contrib-blank
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Corry <kevinc@learningpool.com>
*/
define(function(require) {
  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var Blank = ComponentView.extend({

  	events: {
  		'inview': 'inview'
  	},

    postRender: function() {
      this.setReadyStatus();
    },

    inview: function(event, visible) {
    	if (visible) {
    		this.setCompletionStatus();
    	}
    }

  });

  Adapt.register("blank", Blank);

});
