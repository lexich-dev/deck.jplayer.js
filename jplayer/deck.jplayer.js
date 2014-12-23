/*
This module adds a video narration with jplayer to slides
*/
(function($, deck, undefined) {
    var $d = $(document);

    /*
    Extends defaults/options.
  
    options.jplayer
      The element that matches this selector is the jplayer element
    */
    $.extend(true, $[deck].defaults, {
        jplayer: '#jplayer1'
    });

    var player,
        timeline = [],
        currentSegment = null,
        currentTime = 0,
        currentPlayerStatus = null;

    function changeSlides(e, from, to) {
        if (player) {
            currentSegment = timeline[to];
            if (!currentPlayerStatus) {
                player.jPlayer("play", currentSegment.from);
            } else if (currentTime < currentSegment.from || currentTime > currentSegment.to || currentPlayerStatus.paused || currentPlayerStatus.ended) {
                player.jPlayer("play", currentSegment.from);
            }
        }
    }

    function updateSlides(ev) {
        $.each(timeline, function(i, $el) {
            if (currentSegment != $el && $el.from <= ev.currentTime && $el.to > ev.currentTime) {
                currentSegment = $el;
                $.deck('go', $el.index);
                return false;
            }
            return true;
        });

    }

    function startSlides(ev) {
        if (currentSegment) {
            $.deck('go', currentSegment.index);
        } else {
            $.deck('go', 0);
        }
    }

    function pauseSlides(ev) {
    }

    function stopSlides(ev) {
    }


    $d.bind('deck.init', function() {

            if ($.jPlayer == "undefined") {
                throw "Please init jPlayer before using deck.jplayer.js plugin.";
                return;
            }

            var opts = $.deck('getOptions');

            // get the player element we added to our page
            if (typeof (opts.jplayer) == "string") {
                player = $(opts.jplayer);
            } else if (opts.jplayer.selector != "undefined") {
                player = opts.jplayer;
            } else {
                throw "jPlayer selector is invalid.";
            }

            player.bind($.jPlayer.event.play, function(event) {
                startSlides(event.jPlayer.status);
            });

            player.bind($.jPlayer.event.pause, function(event) {
                pauseSlides(event.jPlayer.status);
            });

            player.bind($.jPlayer.event.stop, function(event) {
                stopSlides(event.jPlayer.status);
            });

            player.bind($.jPlayer.event.timeupdate, function(event) {
                currentTime = Math.floor(event.jPlayer.status.currentTime);
                currentPlayerStatus = event.jPlayer.status;
                updateSlides(event.jPlayer.status);
            });

            // use deck.js built-in functionality to get all slides and current slide
            var slides = $.deck('getSlides');
            var $currentSlide = $.deck('getSlide');

            // set initial values for time position and index
            var position = 0;

            $.each(slides, function(i, $el) {
                // get the duration specified from the HTML element 
                var duration = $el.data('narrator-duration');


                // push the start time (previous position) and end time (position + duration) to an array of slides
                var segment = {
                    from: position,
                    to: position + duration,
                    slide: $el,
                    index: i
                };

                timeline.push(segment);

                // this determines which slide the viewer loaded the page on
                if ($currentSlide == $el) {
                    currentSegment = segment;
                }
                // increment the position to the start of the next slide
                position += duration;
            });

        })

        /* Update location, play till end of slide */
        .bind('deck.change', changeSlides);

})(jQuery, 'deck');
