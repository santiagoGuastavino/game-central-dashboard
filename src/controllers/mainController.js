let path = require('path');
// let indexPath = path.resolve('./public/build/index.html');

let mainController = {
    index: (req, res) => {
        res.sendFile(path.resolve('./public/build/index.html'));
    }
};

module.exports = mainController;