import '../setup.js';
const jasmineWrapper = document.getElementById('jasmineWrapper');

import Tooltip from '../../src/tooltip/index.js';

describe('[tooltip.js]', () => {
    describe('events', () => {
        let reference;

        beforeAll(() => {
            reference = document.createElement('div');
            reference.style.width = '100px';
            reference.style.height = '100px';
            jasmineWrapper.appendChild(reference);
        });

        it('should show a tooltip when hovered', () => {
            new Tooltip(reference, {
                trigger: 'hover',
            });
        });
    });
});
