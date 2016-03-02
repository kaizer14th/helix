var package_name;
var percent;
var percent_s;
var percent_hc;
var remove_amount = 0;
var remove_amount_profit = 0;
var table_counter = 1;
var total_amount = 0;
var total_amount_profit = 0;
var total_per_month = 0;
var array_amount = [];
var array_amount_profit = [];
var temp_total_amount = 97.20;
var temp_total_amount_profit = 47.20;
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

function check_number(z) {		//finish function
	if (z) {

	} else {

	}
}

function calculate(x) {
	x = Number(x);
	y = $('#month_multiplyer :selected').text();
	// alert(y);
	if (x < 50 || x > 25000) {
		return alert("Amount should be between 50$ and 25000$ for one package deal");
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
	// alert(y);
	month_multiplyer = y;// add check function for 'y' for number or undefined


	month_s = (x * percent_s * 0.01).toFixed(2);
	month_hc = (x * percent_hc * 0.01).toFixed(2);
	year_s = (month_s * month_multiplyer).toFixed(2);
	year_hc = (month_hc * month_multiplyer).toFixed(2);
	profit = (year_s - x).toFixed(2);
	temp_total_amount = year_s;
	temp_total_amount_profit = profit;


	fill_table(x,y);
}

function fill_table(x,y) {
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

function save_table() {
	var table = $('#invest_table');
	$('.secondFrame').append('<div id="invest_table" class="table_font '+table_counter+'">');
	// $('#remove_table').html('Remove Table');
	$('.' + table_counter).append(table.html());
	$('.' + table_counter + ' > .inline_block:nth-child(4)').addClass(table_counter + 'y');
	$('.' + table_counter + ' > .inline_block:nth-child(5) > div:last-child').attr('onclick',"remove_table('"+table_counter+"')").html('Remove Table');;
	array_amount[table_counter] = temp_total_amount;
	array_amount_profit[table_counter] = temp_total_amount_profit;
	table_counter++;
	total_amount += Number(temp_total_amount);
	total_amount_profit += Number(temp_total_amount_profit);
	update_total();
}

function update_total() {
	$('#total_amount').html(total_amount.toFixed(2) + "$");
	$('#total_amount_profit').html(total_amount_profit.toFixed(2) + "$");
	// body...
}

function remove_table(r) {
	r = Number(r);
	remove_amount = $('.' + r + ' > .table_colomn4').val();
	total_amount -= array_amount[r];
	total_amount_profit -= array_amount_profit[r];
	$('.' + r).remove();
	update_total();
}


