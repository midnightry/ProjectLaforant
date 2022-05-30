let validate = () => {
  let username = document.getElementById('username');            
  let password = document.getElementById('password');
  let confirm = document.getElementById('confirm');
  let email = document.getElementById('email');
  let nationality = document.getElementById('nationality');
  let agreement = document.getElementById('agreement');
  let errorMsg = [];

  //validasi
  validateUsername(username, errorMsg);
  validateEmail(email, errorMsg);
  validatePassword(password, errorMsg);
  validateConfirm(password, confirm, errorMsg);
  validateNationality(nationality, errorMsg);
  validateAgreement(agreement, errorMsg);

  if (errorMsg.length == 0){
      alert('Registration Success!');
  }else{
      alert(errorMsg.join('\n'));
  }
}

let validateEmail = (email, errorMsg) => {
  if (email.value === "") {
      errorMsg.push('*Email required');
  } else if(email.value.startsWith('.') || email.value.startsWith('@')) {
      errorMsg.push('*Email cannot starts with . or @');
  } else if(!email.value.endsWith('@laforant.com')) {
      errorMsg.push('*Email must ends with @laforant.com');
  }
}

let validateUsername = (username, errorMsg) => {
  if(username.value.length == 0) {
      errorMsg.push('*Username required');
  } else if(username.value.length < 7) {
      errorMsg.push('*Username length must be at least 7 characters');
  }
}

let validatePassword = (password, errorMsg) => {  
  if(password.value === "") {
      errorMsg.push('*Password required');
  }
  else if(password.value.length < 8) {
      errorMsg.push('*Password length must be at least 8 characters');
  }
}

let validateConfirm = (password, confirm, errorMsg) => {  
  if(confirm.value === "") {
      errorMsg.push('*Confirm password required');
  }
  else if(confirm.value !== password.value) {
      errorMsg.push('*Both passwords did not matched');
  }
}

let validateNationality = (nationality, errorMsg) => {  
if(nationality.value === "") {
        errorMsg.push('*Nationality required');
    }
}

let validateAgreement = (agreement, errorMsg) => {
  if(!agreement.checked) {
      errorMsg.push('*You must agree to the terms and conditions');
  } 
}