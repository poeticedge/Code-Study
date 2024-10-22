//looping

const myEmojis = ["x" "y" "z"]
const emojiContainer = document.getElementById("emojiContainer") //render in browser-grab div id
const emoji = document.getElementById('span')
const pushBtn = document.getElementById("push-btn")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }//this can be used in password generator. create the array of characters and for loop them
}

renderEmojis()

//console.log(emojiContainer)

//render as span tag in container

emoji.textContent = myEmojis[i]
emojiContainer.append(emoji)


pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value) //is storing the users data
        emojiInput.value = ""//use empty string, evaluates to false
        emojiContainer.innerHTML = ""
        console.log(myEmojis)    
    }
})

//render in the browser, clears old array and renders updated on



