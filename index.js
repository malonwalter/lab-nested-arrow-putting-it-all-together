//Function that sets up the login tracker
function createLoginTracker(userinfo){

  //Variable to keep track of how many times login has been completed and boolean flag to check if the account is locked
  let attemptCount = 0;
  let locked = false;

  //Inner arrow function that handles each login attempt
  const login = (passwwordAttempt) =>{
    if (locked){
      return "Account locked due to too many failed attempts"
    }

    if(attemptCount > 3){
      locked = true;
      return "Account locked due to too many failed login attempts"
    }

    attemptCount++;

    //if attempt exeed 3, lock the account
    if(attemptCount>3){
      locked = true;

      return "Account locked due to too many failed login attempts";
    }

    if(passwwordAttempt === userInfo.password){
      return "Login successful";
    }else{
      return 'Login failed.Attempt ${attemptCount} fo 3';
    }
  };
  return login;
}
  