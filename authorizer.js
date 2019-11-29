function contains(a1, a2) {
    let superSet = {};
    for (let i = 0; i < a1.length; i++) {
        const e = a1[i];
        superSet[e] = 1;
    }

    for (let i = 0; i < a2.length; i++) {
        const e = a2[i];
        if (!superSet[e]) {
            return false;
        }
    }
    return true;
}

class Authorizer {
    authorizeOptions = {
        response_type: 'token',
        redirect_uri: 'http://' + window.location.host + '/authFinished.html'
    };

    constructor(requiredScope) {
        this.requiredScope = requiredScope;
        this.authz = false;
        this.promptForBoardReload = false;
    }

    async authorized() {
        if (!this.authz) {
            this.authz = contains(await miro.currentUser.getScopes(), this.requiredScope);
            if (!this.authz) {
                authorizer.authorize();
                this.promptForBoardReload = true;
            }
        }
        if (this.authz && this.promptForBoardReload) miro.showErrorNotification("To use this plugin you need to reload the board after plugin authorization.");

        return this.promptForBoardReload ? false : this.authz;
    }

    async authorize() {
        return miro.authorize(this.authorizeOptions);
    }
}