var dataArray = [5,11,18];

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');


var newX = 300;
svg.selectAll('line') 
    .data(dataArray)
    .enter().append('line')    
            .attr('x1', newX) 
            .attr('y1',function(d, i){ return 80+(i*20); })
            .attr('x2',function(d){ return newX+(d*15); }) 
            .attr('y2',function(d, i){ return 80+(i*20); }) 
            .attr('stroke', "hsl(" + Math.random() * 360 + ", 100%, 50%)") // нужно задать цвет.иначе не будет видно линии
            .attr('stroke-width', '3');// толщина строки

//Интересно: если написать .style('stroke', 'green') - тоже определит цвет
//а затем .attr('stroke', 'red'), то цвет останется зелёный
//в style.css пишем line { stroke: red }, а определения цвета в js удаляем (стили в style перебьют местные,
//  но местный .style('stroke', 'green')) перебьёт стиль из style.css

