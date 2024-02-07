function userCredentials(email,password){
    const validEmail="namagandavivian@gmail.com";
    const validPassword="22/U/6576@2024";

    if(email===validEmail && password===validPassword){
        console.log(`User email is ${email},login successfully!`);
    }else{
        console.log("Invalid User credentials!");
    }
    

}

userCredentials("namagandavivian@gmail.com","22/U/6576@2024");