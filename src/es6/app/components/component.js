export default class ComponentTemplate {

    constructor(options) {
        const _ = this
        _.defaults = { foo: 'var' }
        _.opts = Object.assign({}, _.defaults, options);

        console.log(`${_.constructor.name} component is ready`);
    }
}
