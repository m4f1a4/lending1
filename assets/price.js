function ethFresh() {
    $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=SHIB&tsyms=USD', function(data) {
        console.log(data);
        Object.keys(data).map(function(i) {
            console.log(i, data[i])
            document.getElementById('price').innerText = ("" + data[i] * 1000000000000);

            return null;
        })
    });
}

var x = window.setInterval(ethFresh, 3000);