class Storage{
    static getSearchedUsers(){

        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUser(username){
        let users = this.getSearchedUsers();

        if (users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearSearchedUsers(){
        localStorage.removeItem("searched");
    }
}