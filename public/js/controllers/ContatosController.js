angular.module('mean').controller('ContatosController', 
	function($scope){
		$scope.total = 0;
		$scope.incrementa = function(){
			$scope.total++;
		};

		$scope.contatos = [
			{
				"id": 1,
				"nome": "Contato Angular 1",
				"email": "cont1@empresa.com.br"
			},
			{
				"id": 2,
				"nome": "Contato Angular 2",
				"email": "cont2@empresa.com.br"
			},
			{
				"id": 3,
				"nome": "Contato Angular 3",
				"email": "cont3@empresa.com.br"
			}
		];
});