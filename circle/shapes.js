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

var newX = 300;
svg.selectAll('circle')
    .data(dataArray)
    .enter().append('circle')
            .attr('cx', function(d, i){ newX += (d * 6) + (i * 20); return newX; })// 2. круги разнесуться по оси х    
            .attr('cy', '100')    
            .attr('r', function(d){ return d * 3; });// 1. без аргумента i выйдет большой круг, с i ничего не будет   