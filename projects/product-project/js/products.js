/* global $ _ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
	$('.modal')
       .css({
   'display': 'none',
   'position': 'fixed',
   'z-index': '1',
   'left': '0',
   'top': '0',
   'width': '100%',
   'height': '100%',
   'overflow': 'auto',
   'background-color': 'rgb(0,0,0)',
   'background-color': 'rgba(0,0,0,0.4)'
});

$('.modal-content')
       .css({
   'background-color': '#fefefe ',
   'margin': '15% auto', /* 15% from the top and centered */
   'padding': '20px',
   'border': '1px solid #888',
   'width': '80%' /* Could be more or less, depending on screen size */
});
	$('h1')
    .prependTo('body')
    .css('padding-left', '300px')
    .text('Product Project');
	
$.getJSON('data/product.json', function (data){
    console.log(data);
    
    $('<ul>')
        .attr('id', 'product-list')
        .addClass('flex-box')
        .appendTo('#product-display'); 
     
    function populatePage(products) {
    $('#product-list').empty();
    
     _.forEach(products, function(product, i, data){
       var $li =$('<li>').addClass('product').attr('id', product.id)
            .append($('<div>')
                    .addClass('product-text')
                    .append($('<dl>').append($('<dt>').text('type'), 
                                            $('<dd>').text(product.type),
                                            $('<dt>').text('description'),
                                            $('<dd>').text(product.desc),
                                            $('<dt>').text('price'),
                                            $('<dd>').text(product.price))))
            .prepend($('<img>').css('padding-left', '31px').attr('src', 'img/product/thumbs/' + product.image))
            .appendTo('#product-list');
            
        $('.product').on('click', function (e) {
    $('#modal-info').empty();
    
    $('#myModal').css('display', 'inline');
    console.log(e);
    var clicked = _.reduce(data, function(seed, product, i, c){
        if(String(event.currentTarget.id) === String(product.id)){
            seed = product;
            
        }
        return seed;
    });
    console.log(clicked);
$("#modal-info").append($('<div>')
                .addClass('product-text')
                .append($('<dl>').append($('<dt>').text('type'), 
                                        $('<dd>').text(clicked.type),
                                        $('<dt>').text('description'),
                                        $('<dd>').text(clicked.desc),
                                        $('<dt>').text('price'),
                                        $('<dd>').text(clicked.price),
                                        $('<dt>').text('available colors'),
                                        $('<dd>').text(clicked.availableColors))))
        .prepend($('<img>').css('padding-left', '31px').attr('src', 'img/product/' + clicked.image));
});

$('#modal-button').on('click', function(e){
    $('#myModal').css('display', 'none');
});
            
    });//forEach close
    }
    
    populatePage(data);




var $dropDown = $('<select>')
                .attr('id', 'type')
                .appendTo('nav')
                .on('click', function(event) {
                    console.log(event);
                    const type = event.currentTarget.value;
                    const filteredProducts = types(data, type);
                    console.log(filteredProducts);
                    populatePage(filteredProducts);
                    if(type === 'all'){
                        populatePage(data);
                    } 
                     
                });
                
const $button = $('<button>').attr('id', 'search').text('search');



const $option = $('<option>');

var dropdownTypes = function(){
   _.each( _.unique(_.pluck(data, 'type')), function(e, i, c){
       $dropDown.append($option).text(e);
   });
   
   const types = _.reduce(data, function(seed, element, index, array) {
        if (!_.contains(seed, element.type)) {
           seed.push(element.type);
       }
       return seed;
   }, []);
   
   console.log(types);
   
   types.forEach(function(element, index, array) {
        $('<option>').text('all').appendTo($dropDown);
       $('<option>').text(element).appendTo($dropDown);
   });
   
    
};

dropdownTypes();


  var types = function(data, type) {                             
    return _.reduce(data, function(seed, product, i, data){
        if(product.type === type) {
            seed.push(product);
        }
        return seed;
        }, []);
       
    };
    console.log(types($('#product-list'), 'phone')); 
    
const $input = $('<input>').attr('id', 'query');
console.log($input);



$('nav').prependTo('body').append($dropDown, $input, $button);    
$('#search').on('click', function(event){
                    console.log(event);
                    const type = $('#type')[0].value;
                    console.log(type);
                    if(type === 'all'){
                        var currentData = data;
                    }else {
                         currentData = types(data, type);
                    }
                    const searched = search(currentData);
                    console.log(search(currentData));
                    populatePage(searched);
                    }); 
                    
                    //search object for query and return true false
var search = function(data){
    var $query = $('#query')[0].value.toLowerCase();
    console.log($query);
    return _.filter(data, function(product, i, c){
        var filter1 =_.filter(product, function(e, i, product){
            if (String(e).toLowerCase().indexOf($query) !== -1){
                console.log(String(e).toLowerCase().indexOf($query));
                return true;
            }
            });
            return (filter1.length);
    });
    
};
                    
});//getJSON close
console.log($('#product-list'));




$('<section>')
    .appendTo('main')
    .attr('id', 'products1');

$('<div>')
    .attr('id', 'product-display')
    .appendTo('#products1');


	// ALL YOUR CODE GOES ABOVE HERE //
});