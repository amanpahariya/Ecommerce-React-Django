export class API {
    static loginUser(body) {
        return fetch(`http://localhost:8000/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static RegisterUser(body) {
        return fetch(`http://localhost:8000/users/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static VerifyEmail(body) {
        console.log(body);
        return fetch(`http://localhost:8000/users/email-verify?token=${body['token']}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
    }
    static getUser() {
        return fetch(`http://localhost:8000/users/userdetails`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access_token')
                    ? 'JWT ' + localStorage.getItem('access_token')
                    : null,
            },
        }).then(resp => resp.json())
    }
    static updateAccess(body) {
        return fetch(`http://localhost:8000/api/token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static logoutUser(body) {
        return fetch(`http://localhost:8000/users/logout/blacklist/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
    }
}