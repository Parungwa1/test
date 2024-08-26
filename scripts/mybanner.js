let banner;
const currentDay = new Date().getDay();

switch(currentDay) {
    case 0:
        banner = "";
        break;
    case 1:
        banner = "🤝🏼 Buy from us and enjoy our quality product 24hrs ready to sale";
        break; 
    case 2:
        banner = "🤝🏼 Buy from us and enjoy our quality product 24hrs ready to sale";
        break;
    case 3:
        banner = "";
        break;    
    case 4:
        banner = "";
        break;
    case 5:
        banner = "";
        break;
    case 6:
        banner = "";
        break;
}

document.getElementById("banner").innerHTML = banner;