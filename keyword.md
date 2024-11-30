<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Definition of Clearing</title>
    <style>
        /* พื้นหลัง */
        body {
            background: url('https://example.com/learning-tools-background.jpg') no-repeat center center fixed;
            background-size: cover;
            font-family: Arial, sans-serif;
            color: white;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        /* สไตล์สำหรับตัวหัวข้อ */
        h1, h2 {
            text-align: center;
            padding-top: 20px;
            font-size: 2em;
        }

        h3 {
            font-size: 1.5em;
        }

        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            border: 2px solid white;
        }

        table, th, td {
            border: 2px solid white;
            color: white;
        }

        th, td {
            padding: 10px;
            text-align: center;
        }

        th {
            background-color: rgba(0, 0, 0, 0.7);
        }

        td {
            background-color: rgba(0, 0, 0, 0.5);
        }

        /* การเคลื่อนไหวของอิโมจิ */
        .emoji {
            position: absolute;
            font-size: 2em;
            animation: floatUp 4s infinite;
        }

        /* การเคลื่อนไหวอิโมจิ */
        @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-20px); opacity: 0.7; }
            100% { transform: translateY(0); opacity: 1; }
        }

        /* สไตล์สำหรับการเน้นการเตือน */
        .highlight {
            color: #FF6347;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Definition of Clearing</h1>

    <table>
        <tr>
            <th>Source</th>
            <th>Definition</th>
        </tr>
        <tr>
            <td><strong>CISSP</strong></td>
            <td>The removal of sensitive data from storage devices in such a way that there is assurance that the data may not be reconstructed using normal system functions or software recovery utilities.</td>
        </tr>
        <tr>
            <td><strong>NIST</strong></td>
            <td>Clearing refers to the process of removing data from a storage device in such a way that the data can no longer be recovered by normal system functions or basic data recovery techniques, but the device is still usable. Clearing typically involves overwriting the data with non-sensitive information to ensure that the original data is not easily retrievable.</td>
        </tr>
        <tr>
            <td><strong>ChatGPT (CISSP)</strong></td>
            <td>The removal of sensitive data from storage devices in a way that ensures the data cannot be reconstructed using normal system functions or standard data recovery software.</td>
        </tr>
        <tr>
            <td><strong>Gemini (CISSP)</strong></td>
            <td>The removal of sensitive data from storage devices in such a way that there is assurance that the data may not be reconstructed using normal system functions or software recovery utilities.</td>
        </tr>
        <tr>
            <td><strong>ChatGPT (NIST)</strong></td>
            <td>Clearing is the process of removing data from a storage device so that it cannot be recovered, while keeping the device usable. This is done by overwriting the data with non-sensitive information.</td>
        </tr>
        <tr>
            <td><strong>Gemini (NIST)</strong></td>
            <td>Clearing is a process that removes data from a storage device in a way that makes it unrecoverable by standard methods. However, the device remains functional. This is typically done by overwriting the data with non-sensitive information to prevent data recovery.</td>
        </tr>
    </table>

    <h2>ตัวอย่างการใช้งาน 🔍</h2>

    <h3>1. ตัวอย่างจาก ChatGPT 📱</h3>
    <p><strong>สถานการณ์:</strong> การลบข้อมูลส่วนตัวออกจากอุปกรณ์มือถือ</p>
    <ul>
        <li>ใช้เครื่องมือเฉพาะสำหรับ Clearing</li>
        <li>ลบข้อมูลทั้งหมดและเขียนทับด้วยข้อมูลสุ่ม</li>
        <li>มั่นใจว่าข้อมูลเดิมไม่สามารถกู้คืนได้</li>
    </ul>

    <h3>2. ตัวอย่างจาก Gemini 🔒</h3>
    <p><strong>สถานการณ์:</strong> การจัดการข้อมูลทางการเงินในเซิร์ฟเวอร์</p>
    <ul>
        <li>ดำเนินการ Clearing หลังการทำธุรกรรม</li>
        <li>เขียนข้อมูลใหม่ทับลงไปเพื่อป้องกันการกู้คืน</li>
        <li>ตรวจสอบความปลอดภัยของข้อมูล</li>
    </ul>

    <h2>หลักการสำคัญของการ Clearing 🛡️</h2>
    <ul>
        <li><strong>การลบข้อมูลอย่างสมบูรณ์:</strong> ไม่ให้มีร่องรอยของข้อมูลเดิม, ป้องกันการกู้คืนข้อมูลโดยไม่ได้รับอนุญาต</li>
        <li><strong>การรักษาสภาพอุปกรณ์:</strong> คงความสามารถในการใช้งานของอุปกรณ์, สามารถนำอุปกรณ์ไปใช้ใหม่หรือขายต่อได้</li>
        <li><strong>การเขียนทับอย่างเป็นระบบ:</strong> ใช้รูปแบบข้อมูลที่ไม่มีความสำคัญ, ทำให้การกู้คืนข้อมูลเป็นไปได้ยากที่สุด</li>
    </ul>

    <h2>ข้อควรระวังและคำแนะนำ ⚠️</h2>
    <ul>
        <li>ใช้ซอฟต์แวร์ Clearing ที่ได้รับการรับรอง</li>
        <li>ดำเนินการเขียนทับหลายรอบ</li>
        <li>ตรวจสอบการลบข้อมูลอย่างละเอียด</li>
        <li>บันทึกการดำเนินการ Clearing</li>
        <li>พิจารณาการ Clearing ระดับฮาร์ดแวร์สำหรับความปลอดภัยสูงสุด</li>
    </ul>

    <h2>การเปรียบเทียบวิธีการลบข้อมูล 📊</h2>

    <table>
        <tr>
            <th>วิธีการ</th>
            <th>ขอบเขต</th>
            <th>โอกาสกู้คืน</th>
            <th>สถานะอุปกรณ์</th>
        </tr>
        <tr>
            <td><strong>Clearing</strong></td>
            <td>การลบข้อมูลเชิงตรรกะ</td>
            <td>ต่ำ</td>
            <td>ใช้งานได้</td>
        </tr>
        <tr>
            <td><strong>Erasure</strong></td>
            <td>การลบข้อมูลอย่างครอบคลุม</td>
            <td>น้อยมาก</td>
            <td>ใช้งานได้</td>
        </tr>
        <tr>
            <td><strong>Physical Destruction</strong></td>
            <td>การทำลายทางกายภาพ</td>
            <td>ไม่สามารถกู้คืน</td>
            <td>ถูกทำลาย</td>
        </tr>
    </table>

    <h2>บทสรุป 🏁</h2>
    <p>การ Clearing เป็นกระบวนการที่สำคัญในการปกป้องข้อมูลที่ละเอียดอ่อน การเลือกวิธีที่เหมาะสมขึ้นอยู่กับบริบทและความต้องการด้านความปลอดภัย</p>

    <!-- อิโมจิที่เคลื่อนไหว -->
    <div class="emoji" style="top: 20%; left: 20%;">📚</div>
    <div class="emoji" style="top: 30%; left: 40%;">✏️</div>
    <div class="emoji" style="top: 60%; left: 60%;">📝</div>
    <div class="emoji" style="top: 80%; left: 70%;">🎓</div>

    <script>
        function randomPosition(emojiElement) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // สุ่มตำแหน่ง X และ Y
            const randomX = Math.random() * (screenWidth - 50);
            const randomY = Math.random() * (screenHeight - 50);

            // ตั้งค่าตำแหน่งของอิโมจิ
            emojiElement.style.left = `${randomX}px`;
            emojiElement.style.top = `${randomY}px`;
        }

        // ฟังก์ชันสำหรับการเริ่มการเคลื่อนไหวของอิโมจิ
        function startEmojiMovement() {
            const emojis = document.querySelectorAll('.emoji');
            
            emojis.forEach(emoji => {
                setInterval(() => {
                    randomPosition(emoji);
                }, 2000); // อัปเดตตำแหน่งทุก 2 วินาที
            });
        }

        // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
        window.onload = startEmojiMovement;
    </script>

</body>
</html>
