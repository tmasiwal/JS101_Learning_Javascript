
  let user_name="user";
let password="passw";
let stored_user_name="user";
let stored_password="passw";

if ((user_name===stored_user_name)&&(password==stored_password)) {
  console.log("user can login");
}
else if ((user_name!=stored_user_name)&&(password==stored_password)){
  console.log("user name is wrong");
}
else if((user_name==stored_user_name)&&(password!=stored_password)){
  console.log("password is wrong");
}
else {
  console.log("both user name and password is wrong");
}