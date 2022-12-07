import ComponentView from 'core/js/views/componentView';

class BlankView extends ComponentView {
  postRender() {
    this.setReadyStatus();
    this.setupInviewCompletion();
  }
}

BlankView.template = 'blank.jsx';

export default BlankView;
