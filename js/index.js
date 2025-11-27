let snakeBox = document.querySelector('body')
let snake = document.querySelector('.snake')
// const snakeHead = document.querySelector(`.snakeHead`);

let points = 1;
let lose = false;
let losingPoint = null
let winingPoints = 200;
let lastMouseMoveY = 0;
let lastMouseMoveX = 0;
function snakeMovemint() {
    document.querySelector('#win').style.display = 'none';
    document.querySelector('#lose').style.display = 'none';
    document.body.style.cursor = "none";
            
    snakeBox.addEventListener('mousemove', ($event) => {
        if (points < winingPoints && !lose) {
                    let MouseMoveX = lastMouseMoveX - $event.clientX  ;
        let MouseMoveY = lastMouseMoveY - $event.clientX;
        
       let MouseMoveYS = stringing(MouseMoveY).includes("-") ? stringing(MouseMoveY).split('-')[1] ++ : MouseMoveY;
       let MouseMoveXS = stringing(MouseMoveX).includes("-") ? stringing(MouseMoveX).split('-')[1] ++ : MouseMoveX;
        
// document.querySelector(`.snakeBrakePoint1`).style.transform = `rotate(${$event.clientX}deg)`;
        if (MouseMoveX > 30 || MouseMoveYS > 30) {
            addPoint($event.clientY, $event.clientX);
            lastMouseMoveX = $event.clientX 
            lastMouseMoveY = $event.clientY
            
        // snakeHead.style.left = $event.clientX + 'px';
        // snakeHead.style.top = $event.clientY + 'px';
        var y = $event.clientY  + 'px';
            var x = $event.clientX + 'px';
            console.log(y);
            
            for (let number = 1; number <= points; number++) {
                if (!document.querySelector(`.snakeBrakePoint${number}`)) {
            snake.innerHTML += number > 1 ? `<div class="snakeBrakePoint snakeBrakePoint${number}"></div>`:  `<div class=" snakeBrakePoint${number}"></div>`;
                
            }
        const snakeBrakePoint = document.querySelector(`.snakeBrakePoint${number}`);
        snakeBrakePoint.style.left = x;
                snakeBrakePoint.style.top = y;
        snakeBrakePoint.style.transition = `all ${number *60}ms ease-in-out`;
// myElement.style.transition = 'opacity 0.5s ease-in-out';
        snakeBrakePoint.style.transform = number > 1? number === 2 ?`translateX(40%)` :`translateX(${number * 40}%) `:`translateX(-50%) rotate(${$event.clientY - $event.clientX}deg )`;
            
        }
        }

        } else {
            document.querySelector('#win').style.display = 'flex';
            snake.innerHTML = `<div class="snakeBrakePoint snakeBrakePoint1"></div>`;
                document.body.style.cursor = "default";
        }


    })
    snakeBox.addEventListener('click', ($event) => {
        if (points < winingPoints) {
            addPoint($event.clientY, $event.clientX);

        var y = $event.clientY  + 'px';
        var x = $event.clientX  + 'px';
            for (let number = 1; number <= points; number++) {
                if (!document.querySelector(`.snakeBrakePoint${number}`)) {
            snake.innerHTML += number > 1 ? `<div class="snakeBrakePoint snakeBrakePoint${number}"></div>`:  `<div class=" snakeBrakePoint${number}"></div>`;
                
            }
            const snakeBrakePoint = document.querySelector(`.snakeBrakePoint${number}`);
            snakeBrakePoint.style.left = x;
            snakeBrakePoint.style.top = y;
        snakeBrakePoint.style.transition = `all ${number *60}ms ease-in-out`;
        // myElement.style.transition = 'opacity 0.5s ease-in-out';
        snakeBrakePoint.style.transform = number > 1? number === 2 ?`translateX(40%)` :`translateX(${number * 40}%)`:`translateX(-50%)`;
            
            
        }
        } else {
            document.querySelector('#win').style.display = 'flex';
            snake.innerHTML = `<div class="snakeBrakePoint snakeBrakePoint1"></div>`;
                document.body.style.cursor = "default";
        }


    })

}

snakeMovemint()
function stringing(number) {
    return `${number}`
}
function addPoint(y, x) {
    let h = window.innerHeight - 80;
    let w = window.innerWidth - 80;
    if (document.querySelector('.point').getBoundingClientRect()) {
        let point = document.querySelector('.point').getBoundingClientRect()

    let pointTop = point.top  - y;
        let pointLeft = point.left - x;
          pointTop = stringing(pointTop).includes("-") ? stringing(pointTop).split('-')[1] ++ : pointTop;
        pointLeft = stringing(pointLeft).includes("-") ? stringing(pointLeft).split('-')[1] ++ : pointLeft; 
        if (losingPoint === points) {
            if (pointTop < 30 && pointLeft < 30) { 
                lose = true;
    document.querySelector('#lose').style.display = 'flex';

            }
           
        } else {
                    if ( pointTop < 30 &&  pointLeft < 30) {
            points = 1 + points;
             updatePoint()
             losingPoint = Math.floor(Math.random() * 21);
            if (losingPoint === points) {
            
                                         document.querySelector('.point').style.background = `red`
         document.querySelector('.point').style.top = `${int(Math.floor(Math.random() * h))}px`
         document.querySelector('.point').style.left = `${int(Math.floor(Math.random() * w))}px`
                setTimeout(() => {
                         document.querySelector('.point').style.background = `#51a2ff`
         document.querySelector('.point').style.top = `${Math.floor(Math.random() * h-80)}px`
                    document.querySelector('.point').style.left = `${Math.floor(Math.random() * w - 80)}px`
                    losingPoint = 0
            },2000)

            } else {
            w
            h
            
 
         document.querySelector('.point').style.top = `${Math.floor(Math.random() * h)}px`
         document.querySelector('.point').style.left = `${Math.floor(Math.random() * w)}px`
            }

    }
        }


    }
} 

function restart() {
    points = 1;
    lose = false
    updatePoint()
        document.querySelector('#win').style.display = 'none';
    document.body.style.cursor = "none";
    document.querySelector('#lose').style.display = 'none';

            
}
function updatePoint() {
    document.querySelector(`.counter`).innerHTML  = points;
}
function int(val) {
    return stringing(val).includes("-") ? stringing(val).split('-')[1] ++ : val
}