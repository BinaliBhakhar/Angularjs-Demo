angular.module('app.services.auth', []).service('Auth', ['$q', Auth]);

function Auth($q) {
	this.loggedIn = false;
	this.registerIn = false;
	this.$q = $q;
}

Auth.prototype.auth = function(email, password) {
	this.loggedIn = true;

	return this.check();
}

Auth.prototype.check = function() {
	var _this = this;
	return this.$q(function(resolve) {
		resolve(_this.loggedIn);
	});
}

Auth.prototype.logout = function() {
	this.loggedIn = false;
}

//register//
Auth.prototype.auth = function(email,name,username,password,password_c) {
	this.registerIn = true;

	return this.check();
}

Auth.prototype.check = function() {
	var _this = this;
	return this.$q(function(resolve) {
		resolve(_this.registerIn);
	});
}

// Auth.prototype.logout = function() {
// 	this.registerIn = false;
// }
