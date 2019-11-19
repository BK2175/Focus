import displayUser from "./userFunction"
import displayBusiness from "./businessFunction"
import displayCategory from "./categoryFunction"
import displayActivity from "./activityFunction"
import Header from "./components/header"
import Footer from "./components/footer"


export default () => {
    pageBuild();
}

function pageBuild(){
    header();
    footer();
    home();
    userAction();
    businessAction();
    categoryAction();
    activityAction();
}

function header(){
    const header = document.getElementById("header")
    header.innerHTML = Header()
}

function footer(){
    const footer = document.getElementById("footer")
    footer.innerHTML = Footer()
}

function home(){
    const landing = document.querySelector("#app");
    landing.innerHTML = displayUser()
}

function userAction(){
    displayUser()
}

function businessAction(){
    displayBusiness()
}

function categoryAction(){
    displayCategory()
}

function activityAction(){
    displayActivity()
}