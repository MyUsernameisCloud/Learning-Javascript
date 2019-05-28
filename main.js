$(document).ready(function(){
    'use script';
    paper.install(window);
    paper.setup(document.getElementById("maincanvas"));
    /*
    let c;
    for (let x=25;x<400;x+=50){
        for (let y=25;y<400;y+=50){
            c = Shape.Circle(x,y,20);
            c.fillColor = 'blue';
        }
    }*/

    let tool = new Tool();

    let c = Shape.Circle(200,200,80);
    c.fillColor = 'blue';
    let text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';

    tool.onMouseDown = function(event){
        //let c = Shape.Circle(event.point.x,event.point.y,20);
        let c = Shape.Circle(event.point,20);
        c.fillColor = 'blue';
    }
    paper.view.draw();
    console.log('Hello world');
    console.log('main.js loaded');
})
