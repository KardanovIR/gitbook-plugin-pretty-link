/**
 * @function {page}
 *
 * @param {object} page
 */
function page(page) {
    return page;
}



module.exports = {
    book: {
        assets: './assets',
        js: [],
        css: ['pretty-link.css?cacheBreaker=1']
    },
    hooks: {page}
};
