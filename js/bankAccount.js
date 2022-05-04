window.onload= function(){
    document.getElementById("DepitDeposit").style.display="none";
    document.getElementById("addAcc").onclick = function(){ 
       let newAccount = new Account();
       newAccount.createAccount();
       Account.accountInfoList.push(newAccount);
       localStorage.list= Account.accountInfoList;
       var result="";
       Account.accountInfoList.forEach(element => {
         result += element.displayList();
       });
       document.getElementById("accountList").value = result;
       var submitBtn=document.getElementById("submitBtn");
       var accNames = document.getElementById("accNames");
        accNames.onchange = function(){
        submitBtn.disabled = false;
    };
    submitBtn.click=function(){
        var amount = document.getElementById("amount").value;
        var newBalance =0;
        if(document.getElementById("inOutValue").value == 0){
          newBalance = accNames.value -amount;
        }
        else{
         newBalance = accNames.value +amount;
        }
        var selectedText = accNames.options[accNames.selectedIndex].text;
        Account.accountInfoList.forEach(element => {
            if(element.getName() == selectedText)
            {
                element.setDeposit(newBalance);
                var result="";
                 Account.accountInfoList.forEach(element => {
                result += element.displayList();
                 });
            document.getElementById("accountList").value = result;
            }
        });
    };
    };
    
    document.getElementById("depositBtn").onclick=function(){
        document.getElementById("inOutValue").value = "0" ;
        document.getElementById("DepitDeposit").style.display="block";
        document.getElementById("mainPage").style.display="none";
        for (let index = 0; index < Account.accountInfoList.length; index++) {
            var option = document.createElement("option");
            option.text = Account.accountInfoList[index].getName();
            option.value = Account.accountInfoList[index].getDeposit();
            accNames.add(option);
            accNames.value = -1;
        }
    }
    document.getElementById("debit").onclick=function(){
        document.getElementById("inOutValue").value = "1" ;
        document.getElementById("DepitDeposit").style.display="block";
        document.getElementById("mainPage").style.display="none";
        
        for (let index = 0; index < Account.accountInfoList.length; index++) {
            var option = document.createElement("option");
            option.text = Account.accountInfoList[index].getName();
            //option.value = index;
            accNames.add(option);
            accNames.value = -1;
        }
   }
}