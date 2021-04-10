$('.js-icon').on("click",function(event){
        $('.links').toggleClass("hidden");
});

$('.js-bio').on("click",function(event){
    $('.js-pageinfo').html(`
    <div class="bio">
        <p>Graduated from <span class="important">Thinkful’s Web Developer Track</span> in December 2020.</p>
        <p>Loves <span class="important">making users’ lives easier</span> than they could have ever imagined.</p>
        <p><span class="important">Addicted to learning</span>--often caught messing around with new APIs.</p> 
        <p>Interested in joining a <span class="important">team of programmers.</span></p>
        <p>Fan of 3D modelling/animation, sailing, and theme parks.</p>
    </div>`);
    $('.links').toggleClass("hidden");
});

$('.js-github').on("click",function(event){
    $('.links').toggleClass("hidden");
});

$('.js-linkedin').on("click",function(event){
    $('.links').toggleClass("hidden");
});

$('.js-port').on("click",function(event){
    $('.js-pageinfo').html(`
    <div class="portfolio-items">
    <div class="port-item-wrap">
        <div class="imagebox">
            <img src="./helsing.png" alt="HG Job Tracker"/>
        </div>
        <div class="app-description">
            <h3>HG Job Tracker</h3>
            <p class="tech">HTML, CSS, JS, React, Express</p>
            <p class="app-descript">Full-stack app developed for HOA Management company. Used to track billings and progress on reserve study projects. Also helps automate aspects of the manager/employee/client relationship cycle. Developed after it was discovered the previous system was leading to tens of thousands of dollars of missing billings.</p>
            <div class="live-links-wrap">
                <p><a target="_blank" href="https://github.com/jordanhenn/helsing-client">GitHub</a> | <a target="_blank" href="https://helsing-client.vercel.app/">Live</a></p>
            </div>
        </div>
    </div>
    <div class="port-item-wrap">
        <div class="imagebox">
            <img src="./fastfoodevolved.png" alt="Fast Food Evolved"/>
        </div>
        <div class="app-description">
            <h3>Fast Food Evolved</h3>
            <p class="tech">HTML, CSS, JS, React, Express</p>
            <p class="app-descript">Full-stack app where users can select different items (buns, sauces, fillings) from different fast food establishments and combine them into a new creation. Meant for fast food lovers looking to create the ultimate hybrid. Built to better understand React, Express, and svg image manipulation. Used Adobe Illustrator to create graphics.</p>
            <div class="live-links-wrap">
                <p><a target="_blank" href="https://github.com/jordanhenn/fastfood-client">GitHub</a> | <a target="_blank" href="https://fastfood-client.jordanhenn.vercel.app/">Live</a></p>
            </div>
        </div>
    </div>
    <div class="port-item-wrap">
        <div class="imagebox">
            <img src="./drivia.png" alt="Drivia"/>
        </div>
        <div class="app-description">
            <h3>Drivia</h3>
            <p class="tech">HTML, CSS, JS, React, Express, Tesseract OCR</p>
            <p class="app-descript">Full-stack Jeopardy-style quiz app where users answer in their own handwriting. Meant for users looking for a challenge. Built to better understand React, Express, and current OCR tech.</p>
            <div class="live-links-wrap">
                <p><a target="_blank" href="https://github.com/jordanhenn/drivia-client">GitHub</a> | <a target="_blank" href="https://drivia.vercel.app//">Live</a></p>
            </div>
        </div>
    </div>
    <div class="port-item-wrap">
        <div class="imagebox">
            <img src="./cantdecide.png" alt="CantDecide"/>
        </div>
        <div class="app-description">
            <h3>CantDecide</h3>
            <p class="tech">HTML, CSS, JS</p>
            <p class="app-descript">An app that provides a random movie suggestion and available streaming locations using the TMDb and Utelly APIs. Meant for people who have trouble choosing movies to watch. Built in order to better understand API documentation.</p>
            <div class="live-links-wrap">
                <p><a target="_blank" href="https://github.com/jordanhenn/cantdecide">GitHub</a> | <a target="_blank" href="https://jordanhenn.github.io/cantdecide/">Live</a></p>
            </div>
        </div>
    </div>
    </div>`);
    $('.links').toggleClass("hidden");
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