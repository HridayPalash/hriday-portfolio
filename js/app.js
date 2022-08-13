const themeChange = () => {
    // It's for Theme option saved by Click
    let theme = localStorage.getItem('theme')
    if(theme == null){
        setTheme('light');
    }else{
        setTheme(theme);
    }
    // It's for Theme Changing
    let themeDots = document.getElementsByClassName('theme-dot')
    for (var i = 0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            setTheme(mode)
        })
    }
    function setTheme(mode){
        if(mode == 'light'){
            document.getElementById('theme-style').href = 'css/style.css'
        }
        if(mode == 'blue'){
            document.getElementById('theme-style').href = 'css/blue.css'
        }
        if(mode == 'green'){
            document.getElementById('theme-style').href = 'css/green.css'
        }
        if(mode == 'purple'){
            document.getElementById('theme-style').href = 'css/purple.css'
        }
        localStorage.setItem('theme', mode);
    }
}
themeChange();
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
/*SCROLL HOME*/
sr.reveal('.header-title',{});  
sr.reveal('.profile-pic', {delay: 500});
sr.reveal('.personal',{delay: 300});
sr.reveal('.theme-dot', { interval: 200 });
sr.reveal('#settings-note',{delay: 300});
sr.reveal('.display-h', {});
sr.reveal('.display-p',{delay: 300});
/*SCROLL ABOUT*/
sr.reveal('.about-h',{}); 
sr.reveal('.about-p',{delay: 400}); 
sr.reveal('.about-p', { delay: 400 });
sr.reveal('.li-p', { delay: 400 });
sr.reveal('.about-img', { delay: 600 });
sr.reveal('.about-h3', { delay: 600 });
sr.reveal('.linked', { interval: 200 });
/*SCROLL Past Projects*/
sr.reveal('.past-h3',{});  
sr.reveal('.card-data',{interval: 200}); 
/*SCROLL CONTACT*/
sr.reveal('.contact-h3',{delay: 600});
sr.reveal('.sc-g', { interval: 200 });