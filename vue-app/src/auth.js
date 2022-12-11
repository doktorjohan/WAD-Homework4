// wrapper method for fetching user authentication status

export default {

    user: {authenticated: false},
    authenticated: async function() {
        await fetch("http://localhost:3000/auth/authenticate", {credentials: "include"})
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.user.authenticated = data.authenticated
            })
            .catch((err) => {
                console.log(err)
            });
        return this.user.authenticated
    }
}
