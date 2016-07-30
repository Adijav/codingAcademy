(function(){
	angular.module('codingAcademy').value('ToastrService', toastr)

	.factory('NotifierService', ['ToastrService', function(ToastrService){
		toastr.options = {
			"positionClass": "toast-top-center",
			"timeOut": "1000"
		};

		return {
			notifySuccess: function(msg){
				ToastrService.success(msg);
			},
			notifyFailed: function(msg){
				ToastrService.error(msg);
			},
			notifyLogout: function(msg){
				ToastrService.info(msg);
			}
		};
	}])
})();