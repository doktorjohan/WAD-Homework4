// wrapper for user reqistration

/*

userCredentials:
{
    'username': 'username',
    'password': 'password'
}

*/

export default {
    user: {userId: null},

    getUserId: async function (userCredentials) {
        await fetch("http://localhost:3000/auth/signup", {
            credentials: "include",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })
            .then((response) => response.json())
            .then((data) => {
                this.user.userId = data.userId
            })
            .catch((err) => {
                console.log(err)
            })
        return this.user.userId
    }
}
