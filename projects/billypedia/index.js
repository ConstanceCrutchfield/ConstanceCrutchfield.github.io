/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        let $section = $('<section>').attr('id', 'section-rider');
        $section.append($('<h3>')
            .text('Billy\'s Rider'))
            .appendTo($('#sections'));
        
        $('body')
            .css('background-color', '#daa520');
        
        $('main')
        .css('background-color', '#2f4f4f');
        
        $('nav')
            .css('background-color', 'white')
            .css('border', '8px')
            .css('border-style', 'inset')
            .css('border-color', '#daa520');
        
        $('a')
        .css('font-family', 'brush-script-std')
        .css('font-weight', 'bold')
        .css('font-size', '2.5em')
        .css('color', '#008B8B');
        
        $('#section-bio')
            .css('color', '#b8860b')
            .css('background-color', 'white')
            .css('border-radius', '20px')
            .css('padding-right', '10px')
            .css('padding-left', '10px');
        
        $('#section-quotes')
            .css('color', '#b8860b')
            .css('background-color', 'white')
            .css('border-radius', '20px')
            .css('padding-right', '10px')
            .css('padding-left', '10px');
            
        $('#section-praise')
            .css('color', '#b8860b')
            .css('background-color', 'white')
            .css('border-radius', '20px')
            .css('padding-right', '10px')
            .css('padding-left', '10px');
        
        $('#section-rider')
            .css('color', '#b8860b')
            .css('border-color', '#b8860b')
            .css('padding-right', '10px')
            .css('padding-left', '10px');
            
            
        
        $('#header-top-rated')
        .css('color', 'white')
        .css('padding-left', '25px')
        .css('padding-top', '15px')
        .prependTo('#section-top-rated');
        
        $('h2').css('color', 'white');
        
        $('h3').css('color', "#008B8B");
        
        $('#list-top-rated')
            .css('color', "#008B8B");
            
            
        let topRated = data.discography.topRated;
        //start at #list-top-rated
        //add li tags
        //add titles to li tags
        //we have access at data.discogoraphy.toprated
        //loop over topRated array
        //create li tag
        //add topRated titles to an li tag
        //append li tags to listTopRated
        let listTopRated = _.map (topRated, function(recording, i, a) {
            return $('<li>')
                .text(recording.title).attr('art', recording.art)
                .addClass('top-recordings').append($('<div>')
                .attr('title', recording.title).attr('artist', recording.artist)
                .attr('year', recording.year));
        });
        $('#list-top-rated').append(listTopRated);
        
        let recordings = data.discography.recordings;
        
        $('<section>')
            .attr('id', 'section-recordings')
            .appendTo('#sidebar');
            
        $('<header>')
            .text('Other Recordings')
            .attr('id', 'header-recordings')
            .addClass('recording')
            .prependTo('#section-recordings')
            .css('color', 'white')
            .css('padding-left', '25px')
            .css('padding-top', '10px');
        
         $('<section>')
            .attr('id', 'list-recordings')
            .css('color', "#008B8B")
            .css('padding-left', '25px')
            .css('padding-top', '10px')
            .appendTo($('#section-recordings'));
            
        
        let listRecordings = _.map(recordings, function(recording) {
            console.log(recording);
            return $('<li>')
                    .text(recording.title)
                    .attr('art', recording.art).addClass('recording').append($('<div>')
                    .attr('title', recording.title).attr('artist', recording.artist)
                    .attr('year', recording.year));
        });
        $('#list-recordings').append(listRecordings);
        
        $('<div>')
            .attr('id', 'image-container-top-rated')
            .attr('class', 'image-container')
            .appendTo('#header-top-rated');
        
        $('<img>')
            .attr('src', "images/album/voice-in-the-night.jpg")
            .appendTo('#image-container-top-rated')
            .attr('id', 'image-top-rated')
            .css('border', '8px')
            .css('border-style', 'groove')
            .css('border-color', '#daa520');
       
        $('<div>')
            .attr('id', 'image-container-recordings')
            .attr('class', 'image-container')
            .appendTo('#header-recordings');
        
        $('<img>')
            .attr('src', "images/album/eastern-rebellion.jpg")
            .appendTo('#image-container-recordings')
            .attr('id', 'image-recordings')
            .css('border', '8px')
            .css('border-style', 'groove')
            .css('border-color', '#daa520');
            
        $('.recording').on('click', function(event) {
            let elem = $(event.currentTarget);
            console.log(event);
            $('#image-recordings').fadeOut('fast', function(){
                $('#image-recordings').attr('src', elem.attr('art'));}).fadeIn('fast');
        });
        
        $('.top-recordings').on('click', function(event) {
            let elem = $(event.currentTarget);
            console.log(event);
            $('#image-top-rated').fadeOut('fast', function(){ 
                $('#image-top-rated').attr('src', elem.attr('art'));}).fadeIn('fast');
        });
        
        const images = data.images.billy;
        var url = 0;
        $('#image-billy').on('click', function(event) {
            console.log(event);
            if (url <= images.length-2) {
                url++;
            } else {
                url = 0;
            }
            $('#image-billy')
                .fadeOut('fast', function() 
                {$(this).attr('src', images[url]).fadeIn('fast')});
                console.log(images[url]);
        });
        $('#image-billy')
            .css('border', '8px')
            .css('border-style', 'groove');
        
     
        
       
        
        
        
        
        const rider = data.rider;    
        
        var createTable = function(rider) {
            
            var createRow = function (need) {
                var $row = $('<tr>');
                var $type = $('<td>').text(need.type);
                var $desc = $('<td>').text(need.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
        };
            var $table = $('<table>');
            var $rows = rider.map(createRow);
            $table.append($rows);
            return $table;
        };
        createTable(rider).appendTo('#section-rider');
        
        $('table')
                .css('border', '8px')
                .css('border-style', 'double')
                .css('border-color', 'white');
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


