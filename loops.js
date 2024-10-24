let Fizz=0
let Buzz=0
let FizzBuzz=0



for(i=1;i<51;i++){
    switch(true){
        case(i%3==0&& i%5==0):
        console.log("FizzBuzz")
        FizzBuzz++
        break

        case(i%3==0):
        console.log("Fizz")
         Fizz++
        break
        

        case(i%5==0):
        console.log("Buzz")
        Buzz++
        break
        

        default:
            console.log(i)
    }
}