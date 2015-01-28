angular.module('mean').controller('ContatosController', 
	function($scope, $resource){

		$scope.contatos = [];

		$scope.filtro='';

		var Contato = $resource('/contatos/:id');
		
		function buscarContatos(){
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
				},
				function(erro){
					console.log("Não foi possível obter a lista de contatos");
					console.log(erro);
				}
			);
		}

		buscarContatos();

		$scope.remove = function(contato){
			Contato.delete({id: contato._id},
				buscarContatos, 
				function(erro){
					console.log("Não foi possível remove o contato");
					console.log(erro);
				}
			);
		};	
});