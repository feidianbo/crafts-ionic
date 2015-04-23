angular.module('starter.services', ['ionic', 'ngResource'])

.factory('Recommends', function($http, $q) {
        // var recommends = $resource('http://localhost:3000/experts/recommend', {
        //     format: 'json',
        //     jsoncallback: 'JSON_CALLBACK'
        // }, {
        //     'load': {
        //         'method': 'JSON'
        //     }
        // });
        return {
            all: function() {
                var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
                $http({
                    method: 'GET',
                    url: 'http://localhost:3000/experts/recommend'
                }).
                success(function(data, status, headers, config) {
                    deferred.resolve(data); // 声明执行成功，即http请求数据成功，可以返回数据了  
                }).
                error(function(data, status, headers, config) {
                    deferred.reject(data); // 声明执行失败，即服务器返回错误  
                });

                return deferred.promise; // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
            }
        };
    })
    .factory('Experts', function($resource, $q) {
        var experts = $resource('http://localhost:3000/experts', {
            format: 'json',
            jsoncallback: 'JSON_CALLBACK'
        }, {
            'load': {
                'method': 'JSON'
            }
        });

        return {
            all: function() {
                return experts;
            },
            get: function(expertId) {
                for (var i = 0; i < works.length; i++) {
                    if (experts[i].id === parseInt(expertId)) {
                        return experts[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Works', function($resource, $q) {
        var works = [{
            id: 20001,
            author: {
                id: 10001
            },
            name: '作品一',
            description: '这是一个用来测试的作品。',
            image: '01-001.jpg',
            likes: 0,
            comments: 0
        }];

        return {
            all: function() {
                return works;
            },
            remove: function(work) {
                works.splice(works.indexOf(work), 1);
            },
            get: function(workId) {
                for (var i = 0; i < works.length; i++) {
                    if (works[i].id === parseInt(workId)) {
                        // works[i].author = experts.get(works[i].author.id);
                        return works[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Chats', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Andrew Jostlin',
            lastText: 'Did you get the ice cream?',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];

        return {
            all: function() {
                return chats;
            },
            remove: function(chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function(chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    });
