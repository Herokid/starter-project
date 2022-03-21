'use strict';
import Pages from './pages'

class App {

    constructor() {
        const _ = this
        _.page = document.body.dataset.page || 'default';
        _.init();
    }

    init(page) {
        const _ = this
        new Pages[_.page]();
    }

};

export default App;