class Account{
    #accName;
    #deposit;

    static accountInfoList=[];

    constructor(){
    }

    createAccount(){
        this.#accName = document.getElementById("accName").value;
        this.#deposit = document.getElementById("deposit").value;
    }
    getName(){
        return this.#accName;
    }
    getDeposit(){
        return this.#deposit;
    }
    setDeposit(newBalance){
        this.#deposit = newBalance ;
    }
    displayList(){
        var result ='';
        result += "Account Name: "+this.#accName+ ", Balance: " +this.#deposit + "\n" ;
        
        return result;
    }
}