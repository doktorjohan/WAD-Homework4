// wrapper for user login

export default {

    login: {success: false},
    authenticated: async function(userCredentials) {
        await fetch("http://localhost:3000/auth/login", {
            credentials: "include",
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })
            .then((response) => response.json())
            .then((data) => {
                this.login.success = data.success
            })
            .catch((err) => {
                console.log(err)
            })
        return this.login.success
    }
}
