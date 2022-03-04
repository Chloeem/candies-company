const searchCandies = require('./searchEngine');

describe('searchCandies', () => {
    it('Returns Mars and Maltesers', () => {
        expect(searchCandies('Ma', 10)).toBe([ 'Mars', 'Maltesers' ]);
    });
});