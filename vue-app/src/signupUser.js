// wrapper for user reqistration

/*

userCredentials:
{
    'username': 'username',
    'password': 'password'
}

*/

export default async function signupUser(userCredentials) {
    await fetch("http://localhost:3000/auth/signup", {
        credentials: "include",
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })
        .then((response) => response.json())
        .then((data) => {
            return data.userId
        })
        .catch((err) => {
            console.log(err)
            return err.error
        })
}
