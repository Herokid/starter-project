'use strict';

import Default from './default'
import ComponentTemplate from '../components/component';
export default class Home extends Default {

    constructor() {
        super()
        const _ = this;
        new ComponentTemplate()
    }
}
