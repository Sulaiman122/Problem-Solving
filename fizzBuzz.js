

const fizzBuzz=(n)=>{

    for (let i = 0; i <= n; i++) {
        if(i==3||i==3*i){
            console.log('fizz');
        }else if(i==5||i==5*i){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(20);