# Addeen Salaehsakul - Profile

![Addeen's Photo](https://i.ibb.co/7WwNGMh/IMG-4579.jpg)

## 💻 "อย่ากลัวความล้มเหลว เพราะตอนเดินสะดุด เราได้ขาข้างหนึ่งก้าวไปข้างหน้าแล้ว!"

![GitHub Followers](https://img.shields.io/github/followers/addeen?style=social)  
![Profile Views](https://komarev.com/ghpvc/?username=addeen&color=green)

---

### 🌿 About Me
- Passionate software developer transforming complex challenges into elegant solutions.
- Blending technology with creativity, crafting code that grows like a living ecosystem.

---

### 🔑 Work 1 (Keyword): **Clearing**
- Learn about the comparison between **CISSP**, **NIST**, **ChatGPT**, and **Gemini** in more detail at [Click me to WORK](keyword.html).

---

### 📬 Co-Worker
[![GitHub Co-Worker](https://img.shields.io/badge/GitHub-IsNName-green?style=for-the-badge&logo=github)](https://isnname.github.io)

---

### 🌱 Connect With Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/addeen)  
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:addeen.s@ku.th)

---

### 📊 GitHub Stats
![Addeen's GitHub Stats](https://github-readme-stats.vercel.app/api?username=addeen&show_icons=true&theme=radical)

---

### 🌟 Quote
> "In the forest of code, every line is a seed of potential." - Addeen Salaehsakul

---

### Floating Emoji Script
```javascript
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
