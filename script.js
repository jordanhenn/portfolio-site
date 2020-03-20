$('.js-icon').on("click",function(event){
        $('.links').toggleClass("hidden");
});

$('.js-bio').on("click",function(event){
    $('.js-pageinfo').html(`
    <div class="bio">
        <p>Currently enrolled in <span class="important">Thinkful’s Web Developer Track.</span></p>
        <p>Loves <span class="important">making users’ lives easier</span> than they could have ever imagined.</p>
        <p><span class="important">Addicted to learning</span>--often caught messing around with new APIs.</p> 
        <p>Interested in joining a <span class="important">team of programmers.</span></p>
        <p>Fan of 3D modelling/animation, theme parks, and the XFL.</p>
    </div>`);
});

$('.js-port').on("click",function(event){
    $('.js-pageinfo').html(`
    <div class="port-item-wrap">
        <div class="imagebox">
            <img src="./guessthatscat.png" alt="Guess That Scat! An interactive quiz."/>
        </div>
        <div class="app-description">
            <h3>Guess That Scat!</h3>
            <p class="tech">HTML, CSS, JS</p>
            <p class="app-descript">A short, multiple-choice quiz which challenges users to identify the droppings of different animals from images alone. Users answers are determined to be right or wrong and their score updated at each subsequent question. Meant for anyone looking for a fun quiz. Built as practice for jQuery.</p>
            <div class="live-links-wrap">
                <p><a target="_blank" href="https://github.com/jordanhenn/quizapp">GitHub</a> | <a target="_blank" href="https://jordanhenn.github.io/quizapp/">Live</a></p>
            </div>
        </div>
    </div>`);
});

$('body').on("click",'.js-geocities', function(event) {
    $('.js-styling').attr("href","geocities.css");
    $('footer').html(`<address>
    <p>Email me at <a href="mailto:jordanwalkerhenn@gmail.com?subject=Welcome%20to%20the%20team!&body=When%20can%20you%20start?">jordanwalkerhenn@gmail.com</a></p>
    <p><a target="_blank" href="https://github.com/jordanhenn/">GitHub</a> | <a target="_blank" href="https://www.linkedin.com/in/jordan-henn-b0a6801a4/">LinkedIn</a></p>
</address>
    <input type="image" src="./backtothefuture.png" alt="Clicking this button will return the page to its normal styling." role="button" class="geocities js-backtothefuture"/>`);
});

$('body').on("click",'.js-backtothefuture', function(event) {
    $('.js-styling').attr("href","main.css");
    $('footer').html(`<address>
    <p>Email me at <a href="mailto:jordanwalkerhenn@gmail.com?subject=Welcome%20to%20the%20team!&body=When%20can%20you%20start?">jordanwalkerhenn@gmail.com</a></p>
    <p><a target="_blank" href="https://github.com/jordanhenn/">GitHub</a> | <a target="_blank" href="https://www.linkedin.com/in/jordan-henn-b0a6801a4/">LinkedIn</a></p>
</address>
    <input type="image" src="./geocities.png" alt="Clicking this button will transform the page into an old GeoCities website." role="button" class="geocities js-geocities"/>`);
});