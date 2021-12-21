const generationt = function () {
    var numbersArray = [1,2,3,4,5,6,7,8,9,0];
    var lowercaseArray = ['q','w','e','r','t','y','u','u','i','o','p','a','s','d','f','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    var uppercaseArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    var SymbolsArray = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','|','<','>','?','.',',','=','+','-','_'];
    // Ползунок с длиной пароля
    $('#passwordLimit').on('input', function(){
        // console.log(this.value);
        $('#password-length').html(this.value);
    })
    $('#numberPasswords').on('input', function(){
        $('#password-number').html(this.value);
        // console.log(this.value);
    })
    
    // Проверка на активный флажок
    $('#generationBtn').click(function(){
        var result = [];
        if($('#checkNumbers').prop('checked')){
            result = result.concat(numbersArray);
        }
        if($('#checkLetters').prop('checked')){
            result = result.concat(lowercaseArray);
        }
        if($('#checkLettersUppercase').prop('checked')){
            result = result.concat(uppercaseArray);
        }
        if($('#checkSymbols ').prop('checked')){
            result = result.concat(SymbolsArray);
        }
        result.sort(compareRandow)
        // console.log(result);
        document.getElementById('out').innerHTML = '';
        var passwordNumber = parseInt(document.getElementById('numberPasswords').value);
        for (var k = 0; k < passwordNumber; k++){
            var pass = '';
            var passwordLength = parseInt(document.getElementById('passwordLimit').value); // Длина пароля

            for (var i = 0; i < passwordLength; i++){
                pass += result[randomInteger(0, result.length - 1)];
            }
            // console.log(pass);
            // console.log(passwordLength);   
            document.getElementById('out').innerHTML += '<li>' + pass + '</li>';
        }
       
    })

    function compareRandow(a,b) {
        return Math.random() - 0.5;
    }

    function randomInteger(min, max){
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
}
generationt();