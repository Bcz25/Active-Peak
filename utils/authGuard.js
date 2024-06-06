const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        res.redirect('/login');
    }
    else {
        // Else if the user is logged in, execute the route function that will allow them to view the page
        next();
    }
};
// Export the withAuth function
module.exports = withAuth;