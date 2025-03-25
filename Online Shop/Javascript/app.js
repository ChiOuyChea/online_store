// Hamburger Menu 
let allMenu = document.querySelectorAll(".menu");
let menus = [...allMenu];
menus.forEach(menu => {
    // if(window.location.pathname != "/contact.html" && window.location.pathname != "/about.html"){
        menu.addEventListener("mouseover", function(event){
                resetHamburger();
                let target = event.target;
                if (target.id == "shop_menu"){
                    target.classList.add("active");
                    document.getElementById(target.id + "_ham").classList.add("active-ham");
                }
                document.querySelector(".hamburger-wrapper").classList.add("active-wrapper");
        })  
    // }
})

function resetHamburger(){
    let hamburger_menu = document.querySelectorAll(".hamburger-dropdown");
    let hamburgers = [...hamburger_menu];
    hamburgers.forEach(hamburger => {
        hamburger.classList.remove("active-ham");
        let id = hamburger.id;
        document.getElementById(id.substring(0, id.length - 4)).classList.remove("active");
    })
}

let allHamDropDown = document.querySelectorAll(".hamburger-dropdown");
let hamDropDowns = [...allHamDropDown];
hamDropDowns.forEach(hamdropdown => {
    hamdropdown.addEventListener("mouseleave", () => {
        let screenWidth = window.innerWidth;
        // alert(screenWidth);
        if (screenWidth > 652){
            resetHamburger();
        }
    })
})
// End of Hamburger Menu

// Mobile Hamburger Menu
let mobileHam = document.getElementById("hamburger_menu");
mobileHam.addEventListener("click", function(){
    let chkHam = document.getElementById("hamburger_chkbox").checked;
    if (!chkHam){
        document.getElementById("mobile_hamburger").classList.add("active-mobile-ham")
    }
    else{
        document.getElementById("mobile_hamburger").classList.remove("active-mobile-ham")
        resetHamburger();
        document.querySelector("#hamburger_menu").checked = false;
    }
   
}) 

let allShowSubMenus = document.querySelectorAll(".showsubmenu");
let showSubMenus = [...allShowSubMenus];
showSubMenus.forEach(showsub => {
    showsub.addEventListener("click", function(event){
        // alert("hello");
        let target = event.target;
        let id = target.id;
        // alert(target.id);
        if(window.location.pathname != "/contact.html" && window.location.pathname != "/about.html" && window.location.pathname != "/index.html"){
            if (id == "showSubShop"){
                document.getElementById("shop_menu_ham").classList.add("active-ham");
            }
            else{
                document.getElementById("best_menu_ham").classList.add("active-ham");
            }
        }else{
            window.location = "shop.html";
        }
    })
})

let btnCloseSubs = document.querySelectorAll(".btnCloseSub");
let btnClose = [...btnCloseSubs];
btnClose.forEach(btn => {
    btn.addEventListener("click", function(){
        resetHamburger();
    })
})
// End of Mobile Hamburger Menu 

// Scrolling Animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show_homepage');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// End of Scrolling Animation 


