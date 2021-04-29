export default class UserService {

    constructor () {
        this.loggedIn = false;
    }

    static getLoginStatus() {
        return this.loggedIn;
    }

    static register(username, password) {
        this.login();
    }
    
    static login(username, password) {
        this.loggedIn = true;
    }

    static logout() {
        this.loggedIn = false;
    }
    
}