module.exports = function(app){
    const userAddressController = require('../src/userAddressController');

    app.route('/userAddress')
        .get(userAddressController.get_all_address);

    app.route('/userAddress/:id_user')
        .get(userAddressController.get_address_by_user);

    app.route('/userAddress')
        .post(userAddressController.add_address);

};
