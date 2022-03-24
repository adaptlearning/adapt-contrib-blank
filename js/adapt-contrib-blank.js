import components from 'core/js/components';
import BlankView from './blankView';
import ComponentModel from 'core/js/models/componentModel';

export default components.register('blank', {
  model: ComponentModel.extend({}), // create a new class in the inheritance chain so it can be extended per component type if necessary later
  view: BlankView
});
