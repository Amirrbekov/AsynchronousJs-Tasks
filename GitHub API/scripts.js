const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUser = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

githubForm.addEventListener("submit",getData);
clearLastUser.addEventListener("click", clearAllSearched);
document.addEventListener("DOMContentLoaded", getAllSearched);

function getData(e){
    let username = nameInput.value.trim();

    if (username === ""){
        alert("Please enter a valid username..");
    }
    else{
        github.getGitHubData(username)
        .then(response => {
            if(response.user.message === "Not found"){
                ui.showError("This username is not found")
            }
            else{
                ui.addSearchedUserUI(username);
                Storage.addSearchedUser(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err)); 
    }

    ui.clearInput()
    e.preventDefault();
}

function clearAllSearched(){
    if(confirm("Are you sure ?")){
        Storage.clearSearchedUsers();
        ui.clearAllSearchedUI();
    }
}

function getAllSearched(){
    let users = Storage.getSearchedUsers();

    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`
    });
    lastUsers.innerHTML = result;
}