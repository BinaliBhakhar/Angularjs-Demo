angular.module('app.registration', ['app.directive.validation','app.services.auth']).component('registration', {
  templateUrl: 'routes/registration/registration.html',
  controller: ['Auth','$rootRouter', RegisterController],
	controllerAs: 'vm'
});
function RegisterController(Auth,$rootRouter) {
	var vm = this;

	vm.Auth = Auth;

	vm.register = function () {
		vm.Auth.auth(this.email,this.name,this.username,this.password,this.password_c);
		$rootRouter.navigate(['/Login']);

	}
}

