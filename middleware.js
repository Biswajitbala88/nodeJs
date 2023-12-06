const reqFilter = (req, res, next) => {
    if (req.query.type === 'admin') {
        next(); // If the query parameter 'type' is 'admin', proceed to the next middleware
    } else {
        res.send('Only admin can access'); // If 'type' is not 'admin', send a message
    }
};

module.exports = reqFilter;