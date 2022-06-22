const input = document.querySelector("value");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    getValue();
    
    
});
function getValue(){
    let total = document.querySelector(".value").value;
    document.getElementById("valueInput").innerHTML = total;
    const curent = total * 55 / 100;
    const economyCont = total * 10 / 100;
    const donationFund = total * 5 / 100;
    const totalEconomy = (economyCont * 4 ) + donationFund;

    document.getElementById("current").innerHTML = 
        "1'st Cheltuieli curente: "+ curent + " ron";

    document.getElementById("economy").innerHTML = 
        "2'nd Cont de economii: "+ economyCont + " ron";

    document.getElementById("independance").innerHTML = 
        "3'dth Financial independance: "+ economyCont + " ron";

    document.getElementById("fun").innerHTML = 
        "4'dth Have fun: "+ economyCont + " ron";

    document.getElementById("education").innerHTML = 
        "5'dth Education: "+ economyCont + " ron";

    document.getElementById("donation").innerHTML = 
        "6'th Donations: "+ donationFund + " ron";

    document.getElementById("total-economy").innerHTML = 
        "Total economy: "+ totalEconomy + " ron";
   
}