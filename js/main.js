function toWords(n) {
    var word = [],
        numbers = { 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Eleven', 12: 'Twelve', t3: 'Thir', t5: 'Fif', t8: 'Eigh', 20: 'Twenty' },
        hundreds = 0 | (n % 1000) / 100,
        tens = 0 | (n % 100) / 10,
        ones = n % 10,
        part;

    if (n === 0) return 'Zero';
    if (hundreds) word.push(numbers[hundreds] + ' Hundred');

    if (tens === 0) {
        word.push(numbers[ones]);
    } else if (tens === 1) {
        word.push(numbers['1' + ones] || (numbers['t' + ones] || numbers[ones]) + 'teen');
    } else {
        part = numbers[tens + '0'] || (numbers['t' + tens] || numbers[tens]) + 'ty';
        word.push(numbers[ones] ? part + '-' + numbers[ones] : part);
    }
    return word.join(' ');
}
 
 function veiw(){ 
      
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    
     var translator = new T2W("EN_US");
 
   

        var nam=document.getElementById("received").value;
        var pay=document.getElementById("payment").value;
        var amount=document.getElementById("amount").value;
        var bala=document.getElementById("bal").value;
     let word = translator.toWords(amount);
      
              document.getElementById("name").innerHTML=`<b>Received From :</b> ${nam}`;
              document.getElementById("service").innerHTML=`<b>Payment :</b>  ${pay}`;
              document.getElementById("amount").innerHTML=`<b>Amount :</b> ${amount}`;
              document.getElementById("bala").innerHTML=`<b>Balance :</b> ${bala}`;
              document.getElementById("words").innerHTML=`<b>Amount in words :</b> ${word} shillings`;
              document.getElementById("dates").innerHTML=`<b>Received From :</b> ${today}`;
             
        }

$(document).ready(function(){

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#view': function (element, renderer) {
            return true;
        }
    };
    
    $('#pdfs').click(function () {
        doc.fromHTML($('#receipt').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('Receipt.pdf');
    });

})