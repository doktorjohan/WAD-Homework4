// wrapper for user login

export default async function(userCredentials) {
    let success = false
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
            success = data.success
        })
        .catch((err) => {
            console.log(err)
            success = false
        })
    return success
}
