let GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API)

user.then((reponse)  => {
    if(reponse.ok){
         reponse.json()
    }
    return Promise.reject(new Error("Error while fetching data"))


})