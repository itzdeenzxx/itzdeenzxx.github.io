<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Data Clearing Comparison</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #e0f2fe, #bae6fd, #93c5fd);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .container {
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            padding: 30px;
            backdrop-filter: blur(10px);
            max-width: 800px;
            width: 90%;
        }

        .floating-emoji {
            position: absolute;
            font-size: 4rem;
            opacity: 0.6;
            z-index: -1;
            animation: float 3s ease-in-out infinite;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #9ecaed;
            padding: 12px;
            text-align: left;
            transition: background-color 0.3s ease;
        }

        th {
            background-color: #e6f2ff;
            color: #2c3e50;
        }

        tr:hover {
            background-color: #f0f8ff;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 Data Clearing Comparison 🔒</h1>
        <table>
            <thead>
                <tr>
                    <th>Source</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="font-weight: bold; color: #2c3e50;">CISSP</td>
                    <td>การลบข้อมูลที่ละเอียดอ่อนจากอุปกรณ์เก็บข้อมูลโดยมั่นใจว่าไม่สามารถกู้คืนได้</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: #2c3e50;">NIST</td>
                    <td>กระบวนการลบข้อมูลโดยไม่ให้กู้คืนได้ แต่ยังคงใช้อุปกรณ์ได้</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: #2c3e50;">ChatGPT</td>
                    <td>การลบข้อมูลออกจากอุปกรณ์เก็บข้อมูลอย่างมีประสิทธิภาพ</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: #2c3e50;">Gemini</td>
                    <td>เทคนิคการลบข้อมูลที่มั่นใจว่าไม่สามารถกู้คืนได้</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script>
        const emojis = ['📚', '🔒', '💾', '🖥️', '🔍', '📊', '🛡️', '💡'];
        function createFloatingEmojis() {
            emojis.forEach((emoji, index) => {
                const el = document.createElement('div');
                el.textContent = emoji;
                el.className = 'floating-emoji';
                el.style.top = `${Math.random() * window.innerHeight}px`;
                el.style.left = `${Math.random() * window.innerWidth}px`;
                el.style.animationDelay = `${index * 0.5}s`;
                document.body.appendChild(el);
            });
        }
        createFloatingEmojis();
    </script>
</body>
</html>
