const socket = io.connect("http://localhost:8000/")

let message = document.getElementById("message")

let handle = document.getElementById("handle")
let btn = document.getElementById("send")
let output = document.getElementById("output")
let feedback = document.getElementById("feedback")


    btn.addEventListener("click", () => {
        socket.emit("chat", { message: message.value, handle: handle.value })
        handle.value = ""
        message.value = ""
    })
    socket.on("chat", (data) => {
        feedback.innerHTML = ""
        output.innerHTML += `<p><strong>${data.handle} </strong>${data.message}</p>`
    })

    message.addEventListener("keypress", () => {
        socket.emit("typing", handle.value)
    })

    socket.on("typing", data => {
        feedback.innerHTML = `<p><strong>${data} </strong> is typing</p>`
    })



