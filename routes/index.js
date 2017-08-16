/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/databases', routes.views.databases);
	app.get('/community', routes.views.community);
	app.get('/freeTrial', routes.views.freeTrial);
	app.get('/tryDB', routes.views.tryDB);
	app.get('/trainings', routes.views.trainings);
	app.get('/about', routes.views.about);
	app.get('/websites', routes.views.websites);
	app.get('/forms', routes.views.forms);
	app.get('/become-website-customer', routes.views.become_website_customer);
	app.get('/request-free-demo', routes.views.request_free_demo);
	app.get('/industry-leader', routes.views.industry_leader);
	app.get('/start-my-free-trial', routes.views.start_my_free_trial);
	app.get('/pro-member-trial', routes.views.pro_member_trial);
	app.get('/become-free-member', routes.views.become_free_member);
	app.get('/mastermind-leader', routes.views.mastermind_leader);

	// app.get('/sem-community-members', routes.views.sem_community_members);

	app.all('/contact', routes.views.contact);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
