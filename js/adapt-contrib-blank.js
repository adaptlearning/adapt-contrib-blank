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
      this.listenTo(this.model, 'change:_isCompelte', this.removeInviewListener);
      this.$('.component-inner').on('inview', _.bind(this.inview, this));
    },

    inview: function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            if (visiblePartY === 'top') {
                this._isVisibleTop = true;
            } else if (visiblePartY === 'bottom') {
                this._isVisibleBottom = true;
            } else {
                this._isVisibleTop = true;
                this._isVisibleBottom = true;
            }

            if (this._isVisibleTop && this._isVisibleBottom) {
                this.setCompletionStatus();
            }
            
        }
    },

    removeInviewListener: function(model, changeAttribute) {
      if (changeAttribute) {
        this.$('.component-widget').off('inview');
      }
    }

  });

  Adapt.register("blank", Blank);

});
