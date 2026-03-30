const canvas = document.getElementById("asteroide");
const ctx = canvas.getContext("2d");

let tempo = 0;

let player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    angle: 0,
    velX: 0,
    velY: 0
};

let asteroides = [];
let tiros = [];
let gameOver = false;

// controle de teclas pressionadas
let keys = {};

function criarAsteroide() {
    asteroides.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 30,
        speedX: (Math.random() - 0.5) * 4,
        speedY: (Math.random() - 0.5) * 4
    });
}

function atirar() {
    tiros.push({
        x: player.x,
        y: player.y,
        speedX: Math.cos(player.angle) * 6 + player.velX,
        speedY: Math.sin(player.angle) * 6 + player.velY
    });
}

function resetGame() {
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.velX = 0;
    player.velY = 0;

    asteroides = [];
    tiros = [];

    for (let i = 0; i < 5; i++) {
        criarAsteroide();
    }
}

resetGame();

function drawPlayer() {
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.angle);

    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-15, 10);
    ctx.lineTo(-15, -10);
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.fill();

    ctx.restore();
}

function drawAsteroide(a) {
    ctx.save();

    let escala = 1 + Math.sin(tempo) * 0.2;

    ctx.translate(a.x, a.y);
    ctx.scale(escala, escala);
    ctx.translate(-a.x, -a.y);

    ctx.beginPath();
    ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();

    ctx.restore();
}

function drawTiros() {
    ctx.fillStyle = "red";
    tiros.forEach(t => {
        ctx.fillRect(t.x, t.y, 4, 4);
    });
}

function update() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tempo += 0.05;

    if (keys["ArrowLeft"]) player.angle -= 0.07;
    if (keys["ArrowRight"]) player.angle += 0.07;

    if (keys["ArrowUp"]) {
        player.velX += Math.cos(player.angle) * 0.2;
        player.velY += Math.sin(player.angle) * 0.2;
    }

    if (keys["ArrowDown"]) {
        player.velX *= 0.95;
        player.velY *= 0.95;
    }

    let maxSpeed = 5;
    let speed = Math.sqrt(player.velX ** 2 + player.velY ** 2);

    if (speed > maxSpeed) {
        player.velX *= maxSpeed / speed;
        player.velY *= maxSpeed / speed;
    }


    player.x += player.velX;
    player.y += player.velY;

    player.velX *= 0.99;
    player.velY *= 0.99;

    if (player.x < 0) player.x = canvas.width;
    if (player.x > canvas.width) player.x = 0;
    if (player.y < 0) player.y = canvas.height;
    if (player.y > canvas.height) player.y = 0;

    drawPlayer();

    asteroides.forEach(a => {
        a.x += a.speedX;
        a.y += a.speedY;

        if (a.x < 0) a.x = canvas.width;
        if (a.x > canvas.width) a.x = 0;
        if (a.y < 0) a.y = canvas.height;
        if (a.y > canvas.height) a.y = 0;

        drawAsteroide(a);
    });

    for (let i = tiros.length - 1; i >= 0; i--) {
        tiros[i].x += tiros[i].speedX;
        tiros[i].y += tiros[i].speedY;

        if (
            tiros[i].x < 0 ||
            tiros[i].x > canvas.width ||
            tiros[i].y < 0 ||
            tiros[i].y > canvas.height
        ) {
            tiros.splice(i, 1);
        }
    }

    drawTiros();

    // colisão tiro x asteroide
    for (let ti = tiros.length - 1; ti >= 0; ti--) {
        for (let ai = asteroides.length - 1; ai >= 0; ai--) {
            let dx = tiros[ti].x - asteroides[ai].x;
            let dy = tiros[ti].y - asteroides[ai].y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < asteroides[ai].size) {
                asteroides.splice(ai, 1);
                tiros.splice(ti, 1);
                criarAsteroide();
                break;
            }
        }
    }

    // colisão player x asteroide
    for (let a of asteroides) {
        let dx = player.x - a.x;
        let dy = player.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < a.size) {
            gameOver = true;

            setTimeout(() => {
                alert("Game Over");
                resetGame();
                gameOver = false;
                update();
            }, 100);

            return;
        }
    }

    requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    if (e.key === " ") {
        atirar();
    }
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

update();