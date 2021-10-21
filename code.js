function setChartImage(){
	let query = {cht: "qr", choe: "UTF-8",
                 chs: $("#size").val(),chld: $("#ec").val(),
                 chl: $("#text").val()};
    let url = "http://chart.apis.google.com/chart?" + $.param(query);

    $("#chart").attr('src' ,url);
    $("#url").val(url);
    $("#link").attr('href',url);

}