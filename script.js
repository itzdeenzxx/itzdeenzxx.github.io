const studyEmojis = ['📚', '✏️', '🖊️', '📝', '🧠', '💻', '📖', '🔬', '📋', '🖥️'];
    const container = document.getElementById('emojiContainer');

    function createFloatingEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('floating-emoji');
        emoji.textContent = studyEmojis[Math.floor(Math.random() * studyEmojis.length)];

        const randomX = Math.random() * 100;
        const duration = 10 + Math.random() * 10;

        emoji.style.setProperty('--random-x', randomX);
        emoji.style.setProperty('--duration', `${duration}s`);

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, duration * 1000);
    }

    setInterval(createFloatingEmoji, 500);
