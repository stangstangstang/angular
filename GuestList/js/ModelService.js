var model=angular.module('nameList.model',[]);

function Guest(name,phone){
  this.name = name;
    this.phone = phone;
}

model.factory('modelService', function () {
    var guestList = {
        list: [],
        add: function (name, phone) {
        this.list.push(guest);
        console.debug(this.list);
     },

  grtlist:function(){
   return this.list.fliter(function(){
       return true;
      })
   }
}
return guesList;
})