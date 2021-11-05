import Adapt from 'core/js/adapt';
import BlankView from './blankView';
import ComponentModel from 'core/js/models/componentModel';

export default Adapt.register('blank', {
  model: ComponentModel.extend({}), // create a new class in the inheritance chain so it can be extended per component type if necessary later
  view: BlankView
});
