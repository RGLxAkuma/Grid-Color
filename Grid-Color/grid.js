const find = document.querySelector('.container');
const color = ['#9400D3' ,'#4B0082' ,'#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
const num = 500;

for(let i=0;i<num;i++)
{
    const square = document.createElement('div');
    square.classList.add('sq');

    square.addEventListener('mouseover' , ()=> setColor(square));
    square.addEventListener('mouseout' , ()=> removeColor(square));
    find.appendChild(square);
}

function setColor(element)
{
    const cl = getRandom();
    element.style.background = cl;
}

function removeColor(element)
{
    element.style.background = '#1d1d1d';

}

function getRandom()
{
    return color[Math.floor(Math.random() * color.length)];
}

