window.onload= function(){
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
    };
    
    document.getElementById("depositBtn").onclick=function(){
         location.href ='./depositDebit.html';
    }
    document.getElementById("debit").onclick=function(){
        location.href ='./depositDebit.html';
   }
}