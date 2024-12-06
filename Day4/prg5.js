function atmwithdrawal(balance,amount){
    if( balance>500)
    {
        if(amount%10==0)
        {
            if(balance>=amount)
            return "success withdrawal";
            else
            return "Error: Insufficient funds";
        }
        else 
            return "Error: Amount should be in multiples of 10";

    }
    else
        return "Error: Amount is less than or equal to 500";
}
let b=600
let a=700

console.log(atmwithdrawal(b,a));