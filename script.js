var form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault();

    var search = document.getElementById("search").value;

    var originalName = search.split(' ').join('');

    fetch("https://api.github.com/users/"+originalName)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        window.location.href = `https://github.com/${data.login}`;
    }).catch(() => {
        alert("Wrong Username entered");
    });
})