const url = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

$("#btnGetData").click(function (url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {

            data = JSON.parse(data);

            //        console.log(data);
            //        console.log(data.imie);

            let html = `Imię i nazwisko: ${data.imie} ${data.nazwisko} <hr />Zawód: ${data.zawod} - Firma: ${data.firma}`;

            //        console.log(html);

            $("#dane-programisty").append(html);
        }
    });
});




/*$.getJSON(url, function(data){
   console.log(data);
    
    let html = `Imię i nazwisko: ${data.imie} ${data.nazwisko} <hr />Zawód: ${data.zawod} - Firma: ${data.firma}`;
    
    console.log(html);
        
        $("#dane-programisty").append(html);
});*/