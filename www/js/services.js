angular.module('starter.services', [])

.factory('Recommond', function() {
        var recommonds = [{
            id: 1,
            avatar: '01.jpg',
            author: '宋玉麟',
            name: '',
            description: ''
        }];
    })
    .factory('Experts', function() {
        var experts = [{
            id: 10001,
            avatar: '01.jpg',
            name: '宋玉麟',
            description: '画家，宋文治之子，1947年出生，江苏太仓人，自幼在父亲指导下习画，1969年毕业于上海戏剧学院舞台美术系，后担任舞台美术设计多年，1979年进入江苏省国画院，曾任江苏省国画院副院长，八届江苏省政协委员，现为十届全国人大代表，江苏省美术馆馆长，江苏省国画院一级美术师，江苏省艺术专业高级职务评审委员，美术学科组组长，江苏省中青年有突出贡献专家。'
        }, {
            id: 10002,
            avatar: '02.jpg',
            name: '王蒙',
            description: '王蒙，笔名阿蒙，号龟背庐主、雁塔西楼客。陕西省政协常委，陕西省书协副主席兼教育委员会主任，陕西省青书协主席，陕西师范大学客座教授，陕西省文联委员，陕西省文史馆研究员，中国书协会员。曾任陕西省青联副主席、西安市书协副主席。'
        }, {
            id: 10003,
            avatar: '03.jpg',
            name: '许江',
            description: '许江，福建人。1982年毕业于浙江美术学院油画系，1988年作为访问学者去德国汉堡美术学院研修。现任中国美术家协会副主席，中国美术学院院长、教授、中国美术家协会副主席、中国油画艺术委员会委员、浙江省美术家协会副主席、浙江省油画家协会主席。'
        }, {
            id: 10004,
            avatar: '04.jpg',
            name: '许钦松',
            description: '1952年生，广东澄海县人。1975年毕业于广州美术学院版画系。1979年调入广东画院任专业画家至今。1992年起被评聘为一级美术师和享受国务院颁发的政府特殊津贴。1998年获广东省“五一”劳动奖章。现为中国美术家协会理事，广东省美术家协会主席，广东画院院长'
        }];

        return {
            all: function() {
                return experts;
            },
            remove: function(expert) {
                experts.splice(experts.indexOf(expert), 1);
            },
            get: function(expertId) {
                for (var i = 0; i < experts.length; i++) {
                    if (experts[i].id === parseInt(expertId)) {
                        return experts[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Works', function() {
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
