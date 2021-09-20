define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  class BlankView extends ComponentView {

    postRender() {
      this.setReadyStatus();
      this.setupInviewCompletion();
    }

  }

  BlankView.template = 'blank';

  return Adapt.register('blank', {
    model: ComponentModel.extend({}), // create a new class in the inheritance chain so it can be extended per component type if necessary later
    view: BlankView
  });

});
