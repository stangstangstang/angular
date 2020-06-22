var model = angular.module('nameList.model', []);

    function Guest(name, phone) {
        this.name = name;
        this.phone = phone;
        this.state = Guest.INVITE;
    }
    Guest.INVITE = '邀请中';
    Guest.ACCEPT = '已接受';
    Guest.REFUSE = '已拒绝';
    Guest.ALL = '全部';
    Guest.prototype.accept = function () {
        this.state = Guest.ACCEPT;
    }
    Guest.prototype.refuse = function () {
        this.state = Guest.REFUSE;
    }
    model.factory('modelService', function () {
        var guestList = {
            list: [],
            add: function (name, phone) {
                var isok = true;
                isok = !!(isok && name && phone);
                if (!isok) {
                    return {
                        code: 1,
                        guest: null
                    }
                }
            //输入
                var guest = new Guest(name, phone);
                this.list.push(guest);
                return {
                    code: 0,
                    guest: guest
                }
            },
        //删除
            remove: function (guest) {
                this.list = this.list.filter(function (item) {
                    return guest.phone != item.phone;
                })
            },
//显示所有
          getList:function(state){
               if (state==Guest.ALL){
                 return this.list.filter(function(){
                       return true;
                  })
              }
              return this.list.filter(function (guest){
                  return guest.state==state;
               })
           }
        }
        return guestList;
    })