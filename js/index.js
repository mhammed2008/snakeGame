let snakeBox = document.querySelector('body')
let snake = document.querySelector('.snake')
// const snakeHead = document.querySelector(`.snakeHead`);

let points = 1;
let winingPoints = 20;
let lastMouseMoveY = 0;
let lastMouseMoveX = 0;
function snakeMovemint() {
    document.querySelector('#win').style.display = 'none';
    document.body.style.cursor = "none";
            
    snakeBox.addEventListener('mousemove', ($event) => {
        if (points < winingPoints) {
                    let MouseMoveX = lastMouseMoveX - $event.clientX  ;
        let MouseMoveY = lastMouseMoveY - $event.clientX;
        
       let MouseMoveYS = stringing(MouseMoveY).includes("-") ? stringing(MouseMoveY).split('-')[1] ++ : MouseMoveY;
       let MouseMoveXS = stringing(MouseMoveX).includes("-") ? stringing(MouseMoveX).split('-')[1] ++ : MouseMoveX;
        

        if (MouseMoveX > 30 || MouseMoveYS > 30) {
            addPoint($event.clientY, $event.clientX);
            lastMouseMoveX = $event.clientX 
            lastMouseMoveY = $event.clientY
            
        // snakeHead.style.left = $event.clientX + 'px';
        // snakeHead.style.top = $event.clientY + 'px';
        var y = $event.clientY  + 'px';
        var x = $event.clientX  + 'px';
            for (let number = 1; number <= points; number++) {
                if (!document.querySelector(`.snakeBrakePoint${number}`)) {
            snake.innerHTML += number > 1 ? `<div class="snakeBrakePoint snakeBrakePoint${number}"></div>`:  `<div class=" snakeBrakePoint${number}"></div>`;
                
            }
        const snakeBrakePoint = document.querySelector(`.snakeBrakePoint${number}`);
        snakeBrakePoint.style.left = x;
                snakeBrakePoint.style.top = y;
        snakeBrakePoint.style.transition = `all ${number *10}ms ease-in-out`;
// myElement.style.transition = 'opacity 0.5s ease-in-out';
        snakeBrakePoint.style.transform = number > 1? number === 2 ?`translateX(40%)` :`translateX(${number * 40}%)`:`translateX(-50%)`;
            
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
    if (document.querySelector('.point').getBoundingClientRect()) {
        let point = document.querySelector('.point').getBoundingClientRect()

    let pointTop = point.top  - y;
        let pointLeft = point.left - x;
          pointTop = stringing(pointTop).includes("-") ? stringing(pointTop).split('-')[1] ++ : pointTop;
        pointLeft = stringing(pointLeft).includes("-") ? stringing(pointLeft).split('-')[1] ++ : pointLeft; 

        if ( pointTop < 30 &&  pointLeft < 30) {
            points = 1 + points;
            window.innerWidth
            window.innerHeight
            
         document.querySelector('.point').style.top = `${Math.floor(Math.random() * window.innerHeight)}px`
         document.querySelector('.point').style.left = `${Math.floor(Math.random() * window.innerWidth)}px`
    }

    }
} 

function restart() {
    points = 1
        document.querySelector('#win').style.display = 'none';
    document.body.style.cursor = "none";
            
}