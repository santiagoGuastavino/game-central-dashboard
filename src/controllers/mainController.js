let path = require('path');
let indexPath = path.resolve('./public/build/index.html');

let mainController = {
    index: (req, res) => {
        res.sendFile('indexPath');
    }
};

module.exports = mainController;