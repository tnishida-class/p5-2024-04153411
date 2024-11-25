<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>変わる円のダーツの的</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="dartboard" width="600" height="600"></canvas>

    <script>
        // Canvasの設定
        const canvas = document.getElementById("dartboard");
        const ctx = canvas.getContext("2d");

        // 円の初期設定
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        let radius = 100; // 円の初期半径
        const minRadius = 50; // 最小半径
        const maxRadius = 200; // 最大半径
        let radiusStep = 1; // 半径の増減量

        // ゲームループ
        function drawDartboard() {
            // 画面を白で塗りつぶす
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 円を描画
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // 円を描く
            ctx.fillStyle = "red"; // 円の色を赤に
            ctx.fill();

            // 半径を更新
            radius += radiusStep;
            if (radius >= maxRadius || radius <= minRadius) {
                radiusStep = -radiusStep; // 増減方向を反転
            }

            // 次のフレームで再度描画
            requestAnimationFrame(drawDartboard);
        }

        // 初回の描画を開始
        drawDartboard();
    </script>
</body>
</html>
