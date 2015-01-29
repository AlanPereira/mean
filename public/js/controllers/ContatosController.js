angular.module('mean').controller('ContatosController', 
	function($scope, Contato){

		$scope.contatos = [];

		$scope.filtro='';

		$scope.mensagem = {texto: ''};
		
		function buscarContatos(){
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista de contatos'
					};
					console.log(erro);
				}
			);
		}

		buscarContatos();

		$scope.remove = function(contato){
			Contato.delete({id: contato._id},
				buscarContatos, 
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possível remove o contato'
					};
					console.log(erro);
				}
			);
		};	
});