var users =[];
function nId(){
  var currentCount = 0;
  return function(){
    return currentCount++;
  }
}
var counter = nId();
function newUser (users){
  var user = {};
  user.id = counter();
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
  