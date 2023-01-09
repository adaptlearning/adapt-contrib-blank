import ComponentView from 'core/js/views/componentView';

export default class BlankView extends ComponentView {

  get template() {
    return 'blank';
  }

  postRender() {
    this.setReadyStatus();
    this.setupInviewCompletion();
  }

}
