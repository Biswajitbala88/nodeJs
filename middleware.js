const reqFilter = (req, res, next) => {
    if (req.query.type === 'admin') {
        next(); // If the query parameter 'type' is 'admin', proceed to the next middleware
    } else {
        res.send('Only admin can access'); // If 'type' is not 'admin', send a message
    }
};

module.exports = reqFilter;


// If you were to use app.use('/myroutes', router);, for example, all the routes defined within the router instance would become accessible under the '/myroutes' path. For instance, the /profile route would then be accessed via http://yourdomain.com/myroutes/profile.

// If you were to use app.use('/myroutes', router);, for example, all the routes defined within the router instance would become accessible under the '/myroutes' path. For instance, the /profile route would then be accessed via http://yourdomain.com/myroutes/profile.


// If you were to use app.use('/myroutes', router);, for example, all the routes defined within the router instance would become accessible under the '/myroutes' path. For instance, the /profile route would then be accessed via http://yourdomain.com/myroutes/profile.