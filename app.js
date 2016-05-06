angular.module('promises', [])
    .controller('MainController', function(MainService){
        var mc = this;
        mc.requestPending = true;
        var promise = MainService.getPokemon();
        promise.then(handleServiceResponse);
        
        function handleServiceResponse(data){
            mc.data = data.results;
            mc.requestPending = false;
        }
        
    })
    .service('MainService', function($http){
      this.getPokemon = function(){
          return $http.get('http://pokeapi.co/api/v2/pokemon').then(handleServerResponse)
      }  
      
      function handleServerResponse(res) {
          return res.data
      }
    })   
    
    
// Promises De-Mystified 
// function GetService (url) {
//     var gs = this;

//     gs.getter = function(url){
// //         XHR REQUEST
//         setTimeout(function(){
//             gs.handleResult({data: [1,2,3]})
//         }, 3000)
//         return {then: gs.then}
//     }
//     gs.then = function (cb){
//         gs.handleResult = cb
//     }
    
//     gs.getter(url)
// }

// new GetService('google.com').then(handleResult)

// function handleResult (res){
//     console.log(res)
// }



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    