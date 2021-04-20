angular.module('app.login', ['app.services.auth']).component('login', {
	templateUrl: 'routes/login/login.html',
	controller: ['Auth','$rootRouter', LoginController],
	controllerAs: 'vm'
});

function LoginController(Auth,$rootRouter) {
	var vm = this;

	vm.Auth = Auth;

	vm.login = function () {
		vm.Auth.auth(this.email, this.password);
		$rootRouter.navigate(['/Dashboard']);

	}
}

