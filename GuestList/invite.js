ng-click="invite()"
$scope.invite = function () {
    modelService.add(guestInfo.name, guestInfo.phone);
        $scope.guests = modelService.getList(state);
}
model.factory('modelService', function () {
    var guestList = {
        list: [],
        add: function (name, phone) {
        var guest=new Guest(name,phone);
            this.list.push(guest);
        }
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