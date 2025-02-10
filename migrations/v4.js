import { describe, whereContent, whereFromPlugin, mutateContent, checkContent, updatePlugin } from 'adapt-migrations';

describe('adapt-contrib-blank - v2.0.0 > v4.1.3', async () => {
  let blanks;

  whereFromPlugin('adapt-contrib-blank - from v2.0.0', { name: 'adapt-contrib-blank', version: '<4.1.3' });

  whereContent('adapt-contrib-blank - where blank', async content => {
    blanks = content.filter(({ _component }) => _component === 'blank');
    if (blanks) return true;
  });

  /**
   * * Add JSON field to component and set attribute.
   */
  mutateContent('adapt-contrib-blank - add blank._isOptional', async () => {
    blanks.forEach(blank => {
      blank._isOptional = true;
    });
    return true;
  });

  checkContent('adapt-contrib-blank - check blank._isOptional atrribute', async () => {
    const isValid = blanks.every(({ _isOptional }) => _isOptional === true);
    if (!isValid) throw new Error('adapt-contrib-blank - _isOptional not added to every instance of blank');
    return true;
  });

  updatePlugin('adapt-contrib-blank - update to v4.1.3', { name: 'adapt-contrib-blank', version: '4.1.3', framework: '>=5.19.1' });
});
