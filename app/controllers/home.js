//app/controllers/home.js

module.exports = function(){
	var controller = {
		index : function(req, res){
				res.render('index', {nome: 'Express'});
		}
	};
	return controller;
}