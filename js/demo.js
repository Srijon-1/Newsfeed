var demoApp = angular.module("demoApp", [])
                 .controller("demoController", function($scope, $location, $anchorScroll){
                   $scope.scrollTo = function (scrollLocation){
                      $location.hash(scrollLocation);
                      $anchorScroll();

                           

                   
                   }

                   var place ={
                        name: "Russia",
                        source: "BBC",
                        hala: "hq/ct-russian-plane-crash-egypt-20151031.jpg"
                       
                  
                    };
                 
                    $scope.place = place;
                    
                    var player ={
                        name: "Taskin Ahmed",
                        source: "BCB",
                        pic: "hq/13-20140617-mumit-m0400-1458402867-800.jpg"
                       
                  
                    };
                     $scope.player = player;

                      var woman ={
                        name: "victim",
                        area: "Banani",
                        pica:"hq/old_women.jpg"
                    };
                     $scope.woman = woman;

                      var migrant ={
                        name: "Outnews",
                        area: "Italy",
                        pict:"hq/italy-migrants-afp.jpg"
                    };
                     $scope.migrant = migrant ;
                });
                         