let  textinp = document.getElementById('textinp')



function speakfun () {
        const utterance = new SpeechSynthesisUtterance(textinp.value)
        const voices = speechSynthesis.getVoices()
        speechSynthesis.speak(utterance)
    }
