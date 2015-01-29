angular.module('mean').controller('ContatoController', 
	function($scope, $routeParams, Contato){

		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId}, 
				function(contato){
					$scope.contato = contato;
				},
				function(erro){
					$scope.mensagem = {
						texto: 'Não foi possivel obter o contato'
					};
					console.log(erro);
				}
			);
		}else{
			$scope.contato ={};
		}

		$scope.salva = function(){
			$scope.contato.$save()
				.then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.contato = new Contato();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possivel salvar'};
					console.log(erro);
				}
			);
		};

});