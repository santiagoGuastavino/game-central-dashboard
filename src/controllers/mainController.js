let path = require('path');

let mainController = {
    index: (req, res) => {
        res.sendFile(indexPath);
    }
};

module.exports = mainController;