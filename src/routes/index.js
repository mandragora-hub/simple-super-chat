const ErrorHanding = require('../middleware/ErrorHandling');
const UserRoute = require('./user');
const RoomRoute = require('./room');
const SearchRoute = require('./search');
const MessageRoute = require('./message');

// Configure route
const setRoute = (app) => {
    app.use('/user', UserRoute());
    app.use('/room', RoomRoute());
    app.use('/search', SearchRoute());
    app.use('/message', MessageRoute());
    

    //error handling
    app.use(ErrorHanding.logErrors);
    app.use(ErrorHanding.clientErrorHandler);
    app.use(ErrorHanding.errorHandler);
}

module.exports = setRoute;
