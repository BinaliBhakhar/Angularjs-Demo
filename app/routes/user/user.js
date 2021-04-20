angular.module('app.user', ['angularUtils.directives.dirPagination']).component('user', {
  templateUrl: 'routes/user/user.html',
  controller: function ($scope, $filter) {

    $scope.users = [
      { id: 1, 'fname': 'Dhyey', 'lname': 'Maru', 'salary': 25000 },
      { id: 2, 'fname': 'Nidhi', 'lname': 'Patel', 'salary': 50000 },
      { id: 3, 'fname': 'Ritu', 'lname': 'Pambhar', 'salary': 35000 }
    ];

    $scope.errorMessage = false;

    $scope.addRow = function () {
      var maxID = (Math.max.apply(null, $scope.users.map(x => x.id)) || 0) + 1;

      if (!!$scope.users.find(x => x.fname === $scope.selectedUser.fname && x.lname === $scope.selectedUser.lname)) {
        //alert('already eixsts');
        $scope.errorMessage = true;
        return;
      }
      $scope.users.push({ 'fname': $scope.selectedUser.fname, 'lname': $scope.selectedUser.lname, 'salary': $scope.selectedUser.salary, id: maxID });
      $scope.selectedUser.fname = '';
      $scope.selectedUser.lname = '';
      $scope.selectedUser.salary = '';
    }

    $scope.remove = function () {
      var newDataList = [];
      $scope.selectedAll = false;
      angular.forEach($scope.users, function (selected) {
        if (!selected.selected) {
          newDataList.push(selected);
        }
        $scope.users = newDataList;
        $scope.selectedUser.fname = '';
        $scope.selectedUser.lname = '';
        $scope.selectedUser.salary = '';
      });
    }

    $scope.checkAll = function () {
      $scope.selectedAll = false;
      if (!$scope.selectedAll) {
        $scope.selectedAll = true;
      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.users, function (user) {
        user.selected = $scope.selectedAll;
      });
    }
    $scope.singleEmployeeSelected = false;

    $scope.setSelectedUser = function (employee) {
      if ($scope.users.filter(x => x.selected).length > 1) {
        $scope.selectedUser = null;
        $scope.singleUserSelected = false;
      } else {
        $scope.selectedUser = angular.copy($scope.users.find(x => x.selected));
        $scope.singleUserSelected = !!$scope.selectedUser;
      }
    }

    $scope.edit = function () {
      if (!!$scope.users.find(x => x.fname === $scope.selectedUser.fname && x.lname === $scope.selectedUser.lname)) {
        //alert('already eixsts');
        $scope.errorMessage = true;
        return;
      }
      var userToEdit = $scope.users.find(x => x.id === $scope.selectedUser.id);
      userToEdit.fname = $scope.selectedUser.fname;
      userToEdit.lname = $scope.selectedUser.lname;
      userToEdit.salary = $scope.selectedUser.salary;
    }
    $scope.sort = function (keyname) {
      $scope.sortBy = keyname;   
      $scope.reverse = !$scope.reverse; 
    }
  }

});

