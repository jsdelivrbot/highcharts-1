// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require jquery_ujs
var xCatagories;
var dataValues;

$(document).ready(function() {
  $('#test-chart').on('submit', function(e) {
    e.preventDefault();
    var options = {
      title: {
        text: $('#chart-name').val()
      },
      chart: {
        renderTo: 'chart-container',
        type: $('#chart-type').val()
      },
      xAxis: {
        categories: xCatagories
      },
      yAxis: {
        title: {
          text: $('#yAxisTitle').val()
        }
      },
      series: [{
        name: $('#dataName').val(),
        data: dataValues
      }]
    }
    dataValues = $.map($('#dataValues').val().split(', '), function(value) {
      return parseInt(value);
    });
    xCatagories = $('#xCatagories').val();
    xCatagories = xCatagories.split(', ');
    var chart = new Highcharts.Chart(options);
  });

  $('#moreFields').click(function() {
    $('.data-fields').append("<div class='item'>Data Name: <input type='text'> </div><div class='item'> Data Values: <input type='text'></div>")
  });
});

// $(function() {
//   var csv = Papa.parse(document.getElementById('csv-data').innerHTML);
//   $('#chart-container').highcharts({
//     chart: {
//       type: 'column'
//     },
//     data: {
//       rows: csv.data,
//       seriesMapping: [{
//         label: 2
//       }]
//     },
//     title: {
//       text: 'Pollen Count'
//     },
//     xAxis: {
//       minTickInterval: 24 * 36e5
//     },
//     yAxis: {
//       title: {
//         text: 'Pollen level'
//       },
//       labels: {
//         format: '{value} g'
//       }
//     },
//     legend: {
//       enabled: false
//     },
//     plotOptions: {
//       series: {
//         dataLabels: {
//           enabled: true,
//           format: '{point.label}'
//         },
//         tooltip: {
//           valueSuffix: ' g'
//         }
//       }
//     }
//   });
// });
