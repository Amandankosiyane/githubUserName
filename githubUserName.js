var output = document.querySelector('.display');
var userName = document.querySelector('.inputText');
var lookUpBtn = document.querySelector('.lookupBtn');
// alert($);
lookUpBtn.addEventListener('click', githubRepos);
function githubRepos(){
output.innerHTML = userName.value;
var url = "https://api.github.com/users/amandankosiyane" + userName.value;
$.get(url)
.then(function(results){
output.innerHTML = results;
});
}
