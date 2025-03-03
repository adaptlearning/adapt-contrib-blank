import { describe, whereContent, whereFromPlugin, mutateContent, checkContent, updatePlugin, getComponents, testStopWhere, testSuccessWhere } from 'adapt-migrations';

describe('adapt-contrib-blank - v4.1.2 > v4.1.3', async () => {
  let blanks;

  whereFromPlugin('adapt-contrib-blank - from v4.1.2', { name: 'adapt-contrib-blank', version: '<4.1.3' });

  whereContent('adapt-contrib-blank - where blank', async content => {
    blanks = getComponents('blank');
    return blanks.length;
  });

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

  testSuccessWhere('correct version with blank components', {
    fromPlugins: [{ name: 'adapt-contrib-blank', version: '4.1.2' }],
    content: [{ _component: 'blank' }]
  });

  testStopWhere('incorrect version', {
    fromPlugins: [{ name: 'adapt-contrib-blank', version: '4.1.3' }]
  });

  testStopWhere('no blank components', {
    fromPlugins: [{ name: 'adapt-contrib-blank', version: '4.1.2' }],
    content: [{ _type: 'course' }]
  });
});
