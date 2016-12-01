var myList = [];
window.onload = loadCookieList;
function addItem() {
    var input = document.getElementById("newItem").value;
 displayItem(input); 
 
 document.getElementById("newItem").value = ""; 
}

function removeParentListItem() {
 var mom = this.parentNode;
 var grandma = mom.parentNode;
 var itemRemove = mom.firstChild.textContent;
 var itemIndex = myList.splice(itemIndex, 1);
 grandma.removeChild(mom);
 console.log(myList);
 
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveList()
{
    var saveItem = myList.toString();
    setCookie("listItems",saveItem , 100)
}


function clearList()
{
  var display = document.getElementById("listDisplay");
  while( display.firstChild) {
  display.removeChild(display.firstChild);
  
 
}
myList = [];
}

function displayItem(input) {
    
    if(myList.indexOf(input) == -1) 
    {
 myList.push(input)
 console.log(myList);
 var list = document.getElementById("listDisplay");
 
 var itemName = document.createTextNode(input);
 var item =  document.createElement("li");
 item.appendChild(itemName);
 
 var btnClose = document.createElement("button");
 btnClose.addEventListener("click",removeParentListItem);
 
 btnClose.classList.add("btn");
 btnClose.classList.add("btn-danger");
 btnClose.classList.add("btn-xs");
 
 var iconClose = document.createElement("span");
 
 iconClose.classList.add("glyphicon");
 iconClose.classList.add("glyphicon-remove");
 
 btnClose.appendChild(iconClose);
 
  item.appendChild(btnClose);
 list.appendChild(item);
 
    }
}

function loadCookieList () {
    var loadCookie = getCookie("listItems"); 
    var arrayCookie; 
    arrayCookie = loadCookie.split(",");
    
    for(var i=0; i < arrayCookie.length; i++)
    {
        displayItem(arrayCookie[i]);
    }
}
