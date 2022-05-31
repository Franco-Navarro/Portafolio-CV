/* *** MENU *** */
((d)=> {
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=> {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click",e=>{
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })
})(document);

/* *** CONTACT FORM *** */
((d)=> {
    const $form = d.querySelector(".contact-form"),
    $send = d.querySelector(".contact-form-send"),
    $error = d.querySelector(".contact-form-error");

    $form.addEventListener("submit", (e)=> {
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/39efbe26623eb6ff14adab8efe4d9134",{
            method:"POST",
            body:new FormData(e.target),
        })
        .then((res)=> (res.ok ? res.json():Promise.reject(res)))
        .then(json=> {
            $form.reset();
            if(json.success === "true"){
                $send.classList.remove("none");
                setTimeout(()=>{
                    $send.classList.add("none");
                }, 5000);
            }
            else {
                $error.classList.remove("none");
                setTimeout(()=>{
                    $error.classList.add("none");
                }, 5000);
            }
        })
        .catch(err=> {
            console.log(err);
        });
    });
})(document);

/* *** SWITCH THEME *** */
((d)=> {
    const $switch = d.querySelector(".switch"),
    $background = d.querySelector("body");

    $switch.addEventListener("click",(e)=> {
        $background.classList.toggle("dark");
    });
})(document);