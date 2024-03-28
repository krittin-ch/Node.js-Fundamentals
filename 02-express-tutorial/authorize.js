const authorize = (req, res, next) => {
    const {user} = req.query; // http://localhost:5000/?user=Tin
    if (user === 'Tin') {
        req.user = {name: 'Tin', id: 1}
        next()
    } else {
        res.status(401).send('unauthorized');
    }
};

module.exports = authorize;