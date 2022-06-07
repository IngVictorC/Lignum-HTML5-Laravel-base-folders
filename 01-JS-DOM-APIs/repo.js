function buscarRepo() {
    //obtengo los repositorios
    var request = new XMLHttpRequest();
    var search = document.getElementById("git").value;
    request.open("GET", "https://api.github.com/search/repositories?q=" + search, true);
    //aqui paso a la funcion show list lo q traigo
    request.onload = () => show_list(JSON.parse(request.responseText));
    console.log("consola" + request.responseText);
    request.send();}
    
    //Aqui se arma la lista con lo que he buscado
    function show_list(user) {
    console.log(user);
    var userList = document.getElementsByClassName("user-list")[0];
    var userUl = document.createElement("ul");
    var valor = user;
    
    for (var i = 0; i < user.items.length; i++) {
        var userLi = document.createElement("li");
        var userRepo = document.createTextNode("_" + user.items[i].name);
        userLi.appendChild(userRepo);
        userUl.appendChild(userLi);
    }
    userList.appendChild(userUl);
}

