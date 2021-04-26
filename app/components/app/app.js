var app = angular.module('myApp', [
	'ngComponentRouter',
	'app.templates',
	'app.home',
	'app.navbar',
	'app.about',
	'app.login',
	'app.admin',
	'app.admin.dashboard',
	'app.404',
	'app.user',
	'app.number',
	'app.time',
	'app.filter',
	'app.registration'
]);

app.value('$routerRootComponent', 'app');
app.component('app', {
	templateUrl: 'components/app/app.html',
	$routeConfig: [
		{ path: '/', component: 'home', name: 'Home' },
		{ path: '/about/:name', component: 'about', name: 'About' },
		{ path: '/login', component: 'login', name: 'Login' },
		{ path: '/number', component: 'number', name: 'Number' },
		{ path: '/user', component: 'user', name: 'User' },
		{ path: '/time', component: 'time', name: 'Time' },
		{ path: '/filter', component: 'filter', name: 'Filter' },
		{ path: '/registration', component: 'registration', name: 'Registration' },
		{ path: '/dashboard', component: 'dashboard', name: 'Dashboard' },
		{ path: '/admin/...', component: 'admin', name: 'Admin' },
		{ path: '/**', component: 'notfound', name: 'NotFound' }

	]
});
