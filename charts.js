$( document ).ready(function() {
    $.ajax({
        url: 'http://10.10.4.196:9000/summary',
        type: 'GET',
        dataType: 'text',
        success: function(data){
                    // var keys = [];
                    // var vals = [];
                    // $.each(data, function (key, val) {
                    //     keys.push(key);
                    //     vals.push(val);
                    // });
                    // init_graph_1(keys, vals);
                },
        error: function(xhr, status, error) {
                    alert(status);
                    alert(xhr.responseText);
                    alert(error);
                }
        });
});

function get_api_data(){
    $.ajax({
        url: 'http://10.10.4.196:9000/summary',
        type: 'GET'
        }).done(function(data){
            var keys = [];
            var vals = [];
            $.each(data, function (key, val) {
                keys.push(key);
                vals.push(val);
            });
            init_graph_1(keys, vals);
        });
}

function init_graph_1(keys, vals){
    alert('wrq')
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: keys,
            datasets: [{
                label: '# of Votes',
                data: vals
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function init_graph_2(data){
    var ctx = document.getElementById("myChart2");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["19", "20", "21", "22", "23"],
            datasets: [{
                label: '# of Votes',
                data: [14, 53, 36, 21, 33]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function init_graph_3(data){
    var ctx = document.getElementById("myChart3");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["19", "20", "21", "22", "23"],
            datasets: [{
                label: '# of Votes',
                data: [14, 53, 36, 21, 33]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}