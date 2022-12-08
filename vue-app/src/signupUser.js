// wrapper for user reqistration

/*

usercredentials:
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
            console.log("User creation success")
            return true
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}
