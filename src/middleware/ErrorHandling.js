function logErrors (err, req, res, next) {
    console.log(req.path, err);
    next(err)
};

function clientErrorHandler (err, req, res, next) {
    if (!err.code) {
        return res.status(500).send(err)
    } else {
        next(err);
    }
};

function errorHandler (err, req, res, next) {
    return res.status(200).send(err);
};

module.exports = {
    logErrors, 
    clientErrorHandler, 
    errorHandler,
}

