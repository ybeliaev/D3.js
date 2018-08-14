var dataArray = [5,11,18];

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');


svg.selectAll('rect') 
    .data(dataArray)
    .enter() 
    .append('rect')
    
    .attr('height', function(d, i){ return d * 15;}) 
    .attr('width','50')
    .attr('x', function(d, i){ return 60 * i;}) 
    .attr('y', function(d, i){ return 300 - (d * 15); }) 
    .attr('fill', "hsl(" + Math.random() * 360 + ", 100%, 50%)"); 

var newX = 200;
svg.selectAll('circle.first') //2. добавили .first
    .data(dataArray)
    .enter().append('circle')
            .attr('class', 'first')// 1. добавили новый атрибут
            .attr('cx', function(d, i){ newX += (d * 6) + (i * 20); return newX; }) 
            .attr('cy', '100')    
            .attr('r', function(d){ return d * 3; });

var newX = 500;// изменили значение - получили вторую группу фигур, удалённых по оси  х 
svg.selectAll('circle.second')//4. добавили .first
    .data(dataArray)
    .enter().append('circle')
            .attr('class', 'second')// 3. добавили новый атрибут
            .attr('cx', function(d, i){ newX += (d * 6) + (i * 20); return newX; }) 
            .attr('cy', '100')    
            .attr('r', function(d){ return d * 3; });

var newX = 800;          
svg.selectAll('ellipse')// 1. elipse
    .data(dataArray)
    .enter().append('ellipse')//2. ellipse
            .attr('class', 'second')
            .attr('cx', function(d, i){ newX += (d * 6) + (i * 20); return newX; }) 
            .attr('cy', '100')    
            .attr('rx', function(d){ return d * 3; })// 3. rx вместо r
            .attr('ry', '50');// 4. добавили новый атрибут