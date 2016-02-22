'use strict';

angular.module('app', []);

angular.module('app').controller('MainCtrl', function() {
	this.message = 'hello2';
	this.title = 'MainCtrl Title';

	this.updateMessage = function(message) {
		this.message = message;
	};
});

angular.module('app').controller('AnotherCtrl', function() {
	this.title = 'AnotherCtrl Title';
});

angular.module('app').controller('YetAnotherCtrl', function() {
	this.title = 'YetAnotherCtrl Title';
});