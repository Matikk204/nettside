let fire = () => {
    let hallo = document.getElementById("haha")
    alert(setning + hallo.value)
}

let wow = (e) => {
    console.log(e)
    console.log(e.key)
    if (e.key === "Enter") {
        fire()
    
    }
    if (e.key === "Tab") {
        alert("hello")
    
    }
}