deck.jplayer.js
===============

deck.js plugin to sync slides with jplayer.js

Usage: 
 - download deck.js and its extensions from http://imakewebthings.com/deck.js/
 - download jPlayer from http://jplayer.org/download/
 - on document ready init player first
 - then link player with deck slides
<code>
	
        $(document).ready(function () {
            $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        title: "Big Buck Bunny Trailer",
                        m4v: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                        ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
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
            
            $.deck( '.slide', {
                jplayer: "#jquery_jplayer_1"
            });
        });
    

.... YOUR SLIDES .....

<div class="deck-container">
            <p class="deck-status">
                <span class="deck-status-current"></span>
                /
                <span class="deck-status-total"></span>
            </p>
            
            <section class="slide deck-previous" data-narrator-duration="4" >
                <h1>The peach open movie project presents</h1>
            </section>

            <section class="slide" data-narrator-duration="3" >
                <h2>The Bunny hole</h2>
                <blockquote>
                    <p>Fantastic place</p>
                    <ul>
                        <li>Under Tree</li>
                        <li>In the forest</li>
                        <li>Underground</li>
                    </ul>
                </blockquote>
            </section>

            <section class="slide" data-narrator-duration="4" >
                <h1>One Big Rabbit</h1>
                <blockquote cite="http://example.com">
                    <p>A white and big, a super nice animal without any thoughts in its small head.</p>
                </blockquote>
            </section>

            <section class="slide" data-narrator-duration="6" >
                <h1>And three ungry rodents</h1>
                <blockquote>
                    <p>Ugly rodents without soul and black dark hearts.</p>
                </blockquote>
                    
            </section>

            <section class="slide" data-narrator-duration="6">
                <h1>And one giant playback</h1>
                <blockquote>
                    <p>With powerful opposition.</p>
                </blockquote>
            </section>

            <section class="slide" data-narrator-duration="4">
                <h1>Get ready</h1>
                <blockquote>
                    <p>Use your hands</p>
                </blockquote>
            </section>

            <section class="slide" data-narrator-duration="3">
                <h1>Big Buck Bunny</h1>
                <blockquote>
                    <p>He is the best of the best!</p>
                </blockquote>
            </section>

            <section class="slide" data-narrator-duration="5">
                <h1>Coming soon</h1>
                <blockquote>
                    <p>Be ready</p>
                </blockquote>
            </section>


            <div aria-role="navigation">
                <a href="#" class="deck-prev-link" title="Previous">&#8592;</a>
                <a href="#" class="deck-next-link" title="Next">&#8594;</a>
            </div>

        </div>
		
		
...... AND JPLAYER .....

<div id="jp_container_1" class="jp-video " role="application" aria-label="media player">
            <div class="jp-type-single">
                <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                <div class="jp-gui">
                    <div class="jp-video-play">
                        <button class="jp-video-play-icon" role="button" tabindex="0">play</button>
                    </div>
                    <div class="jp-interface">
                        <div class="jp-progress">
                            <div class="jp-seek-bar">
                                <div class="jp-play-bar"></div>
                            </div>
                        </div>
                        <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                        <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                        <div class="jp-details">
                            <div class="jp-title" aria-label="title">&nbsp;</div>
                        </div>
                        <div class="jp-controls-holder">
                            <div class="jp-volume-controls">
                                <button class="jp-mute" role="button" tabindex="0">mute</button>
                                <button class="jp-volume-max" role="button" tabindex="0">max volume</button>
                                <div class="jp-volume-bar">
                                    <div class="jp-volume-bar-value"></div>
                                </div>
                            </div>
                            <div class="jp-controls">
                                <button class="jp-play" role="button" tabindex="0">play</button>
                                <button class="jp-stop" role="button" tabindex="0">stop</button>
                            </div>
                            <div class="jp-toggles">
                                <button class="jp-repeat" role="button" tabindex="0">repeat</button>
                                <button class="jp-full-screen" role="button" tabindex="0">full screen</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="jp-no-solution">
                    <span>Update Required</span>
                    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                </div>
            </div>
        </div>		
		
</code>		
