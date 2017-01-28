var users =[];
function nId(){
  return Math.floor(Math.random() * 1000000000);
}
function newUser (users){
  var user = {};
  user.id = nId();
  user.name = prompt("Ваше имя");
  while(!user.name){
    user.name = prompt("Ваше имя");
  }
  user.lastName = prompt ("Ваша фамилия");
  while(!user.lastName){
    user.lastName = prompt ("Ваша фамилия");
  }
  user.birthday = prompt ("Dаш день рождения в формате 16.01.99");
  while(!(user.birthday.length == 8)){
    user.birthday = prompt ("Dаш день рождения в формате 16.01.99");
  }
  user.phone = prompt("Номер телефона.Если их несколько перед вводом первого нажмите на латинской розкладке букву \'g\'.\nПосле введения всех номеров просто пошлите пустую строку");
  if(user.phone.toLowerCase() == 'g'){
    delete user.phone;
    user.phones = [];
    while(true){
      var phone = prompt("Номер телефона.После введения всех номеров просто пошлите пустую строку");
      if(!phone){
        break; }
     user.phones.push(phone);
   }
  }
  users.push(user);
}
 newUser(users);
 newUser(users);
 console.log(users);  
function csvFormat(users) {
   return users.map(function(user){
       return Object.keys(user).map(function(key){
          if( typeof user[key] == 'string' || typeof user[key] == 'number'){
            return "" + user[key] + "";
          }
          else{
             return user[key].map(function(phone){
              return "" + phone + "";
            }).join(";");
          }
        }).join(";");
  }).join("\n");
}
alert(csvFormat(users));
function deleteUser(numberinTheList,numberOfUsersUWantToDelete){
  users.splice(numberinTheList,numberOfUsersUWantToDelete);
}
deleteUser(0,1);
console.log(users);  