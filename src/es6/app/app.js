'use strict';
import Pages from './pages'

class App {

    constructor() {
        const _ = this;
        const pageReference = document.body.dataset.page;
        const page = Pages[pageReference] || Pages['default'];
        new page();
    }
};

export default App;