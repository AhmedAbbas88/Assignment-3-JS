var bookmarkName = document.getElementById("bookmarkName");
var bookmarkUrl = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");


var bookmarks = [];

if(localStorage.getItem("data")!=null){
   bookmarks = JSON.parse(localStorage.getItem("data"))
    displayBookmark();
}



function add(){
    if(urlValid(bookmarkUrl.value)){
        var obj={
            name:bookmarkName.value,
            url:bookmarkUrl.value
        }
            console.log(obj);
            bookmarks.push(obj)
            console.log(bookmarks);
            localStorage.setItem("data",JSON.stringify(bookmarks))
            clearForm();
            displayBookmark();
    }else{
        alert('Bookmark Url invalid')
    }
    
}


function displayBookmark(){
var bmarks = ``; 
    for(var i = 0; i < bookmarks.length; i++){
        bmarks += `
        <tr>
            
            <td>${i + 1}</td>
            <td>${bookmarks[i].name}</td>
            <td><button class="btn btn-success">Visit</button></td>
            <td><button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    tableBody.innerHTML = bmarks;
}
function clearForm(){
    bookmarkName.value = '';
    bookmarkUrl.value = '';
}

function deleteBookmark(index){
    bookmarks.splice(index,1);
    localStorage.setItem("data",JSON.stringify(bookmarks))
    displayBookmark();
}

function urlValid(url){
    var bookUrlRegex = /^(www\.)[A-Za-z0-9]{1,}\.[a-z]{3}$/
    if(bookUrlRegex.test(url)){
        bookmarkUrl.classList.replace('is-invalid','is-valid')
        return true;
    }else{
        bookmarkUrl.classList.add('is-invalid')
        return false;
    }
}
