<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Addeen Salaehsakul - Profile</title>
    <style>
        body {
            font-family: 'Prompt', sans-serif;
            background: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        .profile-container {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 10;
        }

        .emoji-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .floating-emoji {
            position: absolute;
            font-size: 30px;
            opacity: 0.7;
            animation: float-and-fade 15s linear infinite;
        }

        @keyframes float-and-fade {
            0% {
                transform: translateY(100vh) translateX(calc(random(100) * 1vw)) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-10vh) translateX(calc(random(100) * 1vw)) rotate(360deg);
                opacity: 0;
            }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            animation: pulse 2s infinite;
            object-fit: cover;
            margin: 0 auto 20px;
        }

        h1, h2, h3 {
            color: #333;
            margin-bottom: 15px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            text-decoration: none;
            color: #333;
            font-size: 24px;
            transition: color 0.3s ease;
        }

        .social-links a:hover {
            color: #4a90e2;
        }

        .quote {
            font-style: italic;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="emoji-container" id="emojiContainer"></div>

    <div class="profile-container">
        <img src="https://i.ibb.co/7WwNGMh/IMG-4579.jpg" alt="Addeen's Photo" class="profile-image">
        
        <h1>Addeen Salaehsakul</h1>
        
        <h2>💻 "อย่ากลัวความล้มเหลว เพราะตอนเดินสะดุด เราได้ขาข้างหนึ่งก้าวไปข้างหน้าแล้ว!"</h2>
        
        <div class="github-stats">
            <img src="https://img.shields.io/github/followers/addeen?style=social" alt="GitHub Followers">
            <img src="https://komarev.com/ghpvc/?username=addeen&color=green" alt="Profile Views">
        </div>

        <h3>🌿 About Me</h3>
        <p>Passionate software developer transforming complex challenges into elegant solutions. I blend technology with creativity, crafting code that grows like a living ecosystem.</p>

        <h3>🔑 Work 1 (Keyword) : <strong>Clearing</strong></h3>
        <p>To learn more about the comparison between <strong>CISSP</strong>, <strong>NIST</strong>, <strong>ChatGPT</strong>, and <strong>Gemini</strong>, check out the details in <a href="keyword.md">keyword.md</a>.</p>

        <h3>📬 Co-Worker</h3>
        <div class="social-links">
            <a href="https://github.com/IsNName" target="_blank">
                <img src="https://img.shields.io/badge/GitHub-IsNName-green?style=for-the-badge&logo=github" alt="GitHub Co-Worker">
            </a>
        </div>

        <h3>🌱 Connect With Me</h3>
        <div class="social-links">
            <a href="https://linkedin.com/in/addeen" target="_blank">
                <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn">
            </a>
            <a href="mailto:addeen.salaehsakul@gmail.com">
                <img src="https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail" alt="Email">
            </a>
        </div>

        <p class="quote">"In the forest of code, every line is a seed of potential." - Addeen Salaehsakul</p>

        <div class="github-stats">
            <img src="https://github-readme-stats.vercel.app/api?username=addeen&show_icons=true&theme=radical" alt="Addeen's GitHub Stats">
        </div>
    </div>

    <script>
        const studyEmojis = ['📚', '✏️', '🖊️', '📝', '🧠', '💻', '📖', '🔬', '📋', '🖥️'];
        const container = document.getElementById('emojiContainer');

        function createFloatingEmoji() {
            const emoji = document.createElement('div');
            emoji.classList.add('floating-emoji');
            emoji.textContent = studyEmojis[Math.floor(Math.random() * studyEmojis.length)];
            
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.animationDuration = `${10 + Math.random() * 10}s`;
            
            container.appendChild(emoji);

            // Remove emoji after animation
            setTimeout(() => {
                container.removeChild(emoji);
            }, 15000);
        }

        // Create emojis periodically
        setInterval(createFloatingEmoji, 500);
    </script>
</body>
</html>
