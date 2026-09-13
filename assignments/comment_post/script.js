const textArea = document.getElementById(`textarea`)
const counter = document.getElementById(`counter`)




textArea.addEventListener('input', function textEvent() {
    let text = textArea.value
    let words = text.trim().split(/\s+/).length

    if (text.trim() ===""){
        words = 0
    }
    counter.textContent = words

    
})  