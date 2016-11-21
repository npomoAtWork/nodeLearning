var apifactory = {
	hellworld: function(req,res){
   		res.json({ok:'ok'});
   	},
   	postthis: function(req,res){
   		res.json({ok:req.body});
   	},
   	putthis: function(req,res){
   		res.json({ok:req.body, id: req.params.id});
   	}
}

module.exports = apifactory;