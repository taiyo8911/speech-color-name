'use strict';
{
    const btn = document.querySelector('button');
    const speech = new webkitSpeechRecognition();
    speech.lang = 'en-US';

    btn.addEventListener('click', () => {
        btn.disabled = true;
        speech.start();

    });

    speech.onresult = (e) => {
        speech.stop();
        if (e.results[0].isFinal) {
            console.log(e.results[0][0].transcript);
            document.body.style.background = e.results[0][0].transcript;
        }
    };

    speech.onend = () => {
        speech.start();
    };

    speech.onsoundstart = () => {
        btn.textContent = '読み取り中';

    };

    speech.onsoundend = () => {
        btn.textContent = '発音してください';

    };
}