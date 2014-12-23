deck.jplayer.js
===============

deck.js plugin to sync slides with jplayer.js

Usage:

        $(document).ready(function () {
		    //create player
            $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        title: "Big Buck Bunny Trailer",
                        m4v: "@Url.Content("~/Content/Uploads/sample.mp4")",
                        //ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                        poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                    });
                },
                cssSelectorAncestor: "#jp_container_1",
                swfPath: "/Scripts",
                supplied: "m4v, ogv",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                remainingDuration: true,
                toggleDuration: true,
                preload: "auto"
            });
            
			//pass player to deck
            $.deck( '.slide', {
                jplayer: "#jquery_jplayer_1"
            });
        });
