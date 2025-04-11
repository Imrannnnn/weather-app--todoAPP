const buttons = document.querySelectorAll("button")
const mood = document.querySelector(".mood")
const moodhistory = document.getElementById("mood-history")

buttons.forEach((btn) =>{
    btn.addEventListener("click", ()=> {
        console.log(btn.textContent)

        let today = new Date().toLocaleDateString()
        let pickedMood = btn.textContent;
    
        let moodData = {date: today, mood: pickedMood}
        console.log(moodData)
    
        localStorage.setItem(today, JSON.stringify(moodData))
    
        let li = document.createElement("li")
        li.textContent = `${today} - ${pickedMood}`
        moodhistory.appendChild(li)
    
    

    })

   

})

const clearBtn = document.getElementById("clear-history")
clearBtn.addEventListener("click", () => {
    localStorage.clear()
    moodhistory.innerHTML = ""
})




