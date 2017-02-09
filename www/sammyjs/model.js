define('model',
    ['config', 'model.product'],
    function (config, product) {
        var
            model = {
                Product: product
            };

        return model;
    });