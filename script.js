var package_name;
var percent;
var percent_s;
var percent_hc;
var name = 'Invest Package Lite';
var month_multiplyer = 12;
var percent_lite = 18;
var percent_medium = 19;
var percent_large = 20;
var percent_luxury = 21;
var percent_lite_s = 16.2;
var percent_medium_s = 17.1;
var percent_large_s = 18;
var percent_luxury_s = 18.9;
var percent_lite_hc = 1.8;
var percent_medium_hc = 1.9;
var percent_large_hc = 2;
var percent_luxury_hc = 2.1;
var package_name_lite = 'Lite';
var package_name_medium = 'Medium';
var package_name_large = 'Large';
var package_name_luxury = 'Luxury';

$(document).ready(function(){  
	$(".glow").hover(
	  function () {
	    $(this).addClass("toggle");
	  },
	  function () {
	    $(this).removeClass("toggle");
	  }
	).click(
		function () {
			
		}
	);
});

function calculate(x) {
	x = Number(x);
	// alert(x);
	if (x < 50 || x > 25000) {
		return alert("amount should be between 50$ and 25000$");
	} else if (50 <= x && x <= 199) {
		name = package_name_lite;
		percent = percent_lite;
		percent_s = percent_lite_s;
		percent_hc = percent_lite_hc
	} else if (200 <= x && x <= 1499) {
		name = package_name_medium;
		percent = percent_medium;
		percent_s = percent_medium_s;
		percent_hc = percent_medium_hc
	} else if (1500 <= x && x <= 9999) {
		name = package_name_large;
		percent = percent_large;
		percent_s = percent_large_s;
		percent_hc = percent_large_hc
	} else if (10000 <= x && x <= 25000) {
		name = package_name_luxury;
		percent = percent_luxury;
		percent_s = percent_luxury_s;
		percent_hc = percent_luxury_hc
	} else {

	}
	
	month_s = (x * percent_s * 0.01).toFixed(2);
	month_hc = (x * percent_hc * 0.01).toFixed(2);
	year_s = (month_s * month_multiplyer).toFixed(2);
	year_hc = (month_hc * month_multiplyer).toFixed(2);
	profit = (year_s - x).toFixed(2);

	fill_table(y);
}

function fill_table(y) {
	$('#package_name_percent').html(name + " " + percent + "%");
	$('#invest_money').html(x + "$");
	$('#percent_s').html(percent_s + "%($)");
	$('#percent_hc').html(percent_hc + "%(HC)");
	$('#month_s').html(month_s + "$");
	$('#month_hc').html(month_hc + "HC");
	$('#year_s').html(year_s + "$");
	$('#year_hc').html(year_hc + "HC");
	$('#profit').html(profit + "$");
	$('#package_name').text("Invest Package " + name);

}



