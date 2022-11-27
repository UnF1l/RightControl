
document.addEventListener('DOMContentLoaded', docReady);
function docReady()
{
    document.getElementsByTagName('button')[0].addEventListener('click', showCorrectAnswer);
}
for (let i = 0; i < 5; i++) {


function showCorrectAnswer()
{
    if(document.querySelector('input[name=answer1]:checked').value === 'value2')
    {
        document.querySelector('input[name=answer1]:checked').nextElementSibling.style.backgroundColor = 'green';
    }
    else
    {
        document.querySelector('input[name=answer1]:checked').nextElementSibling.style.backgroundColor = 'red';

    }
    if(document.querySelector('input[name=answer2]:checked').value === 'value2')
    {
        document.querySelector('input[name=answer2]:checked').nextElementSibling.style.backgroundColor = 'green';
    }
    else
    {
        document.querySelector('input[name=answer2]:checked').nextElementSibling.style.backgroundColor = 'red';

    }
    if(document.querySelector('input[name=answer3]:checked').value === 'value2')
    {
        document.querySelector('input[name=answer3]:checked').nextElementSibling.style.backgroundColor = 'green';
    }
    else
    {
        document.querySelector('input[name=answer3]:checked').nextElementSibling.style.backgroundColor = 'red';

    }
    if(document.querySelector('input[name=answer4]:checked').value === 'value2')
    {
        document.querySelector('input[name=answer4]:checked').nextElementSibling.style.backgroundColor = 'green';
    }
    else
    {
        document.querySelector('input[name=answer4]:checked').nextElementSibling.style.backgroundColor = 'red';

    }
    if(document.querySelector('input[name=answer5]:checked').value === 'value2')
    {
        document.querySelector('input[name=answer5]:checked').nextElementSibling.style.backgroundColor = 'green';
    }
    else
    {
        document.querySelector('input[name=answer5]:checked').nextElementSibling.style.backgroundColor = 'red';

    }
}
}