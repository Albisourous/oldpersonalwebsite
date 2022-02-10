board = [
    [null,'w', null,'w', null,'w', null,'w', null,'w'],
    ['w', null,'w', null,'w', null, 'w', null, 'w', null],
    [null,'w', null,'w', null,'w', null,'w', null,'w'],
    ['w', null,'w', null,'w', null, 'w', null, 'w', null],
    [null, null, null, null, null, null, null,null, null, null],
    [null, null, null, null, null, null, null,null, null, null],
    [null,'b', null,'b', null,'b', null,'b', null,'b'],
    ['b', null,'b', null,'b', null, 'b', null, 'b', null],
    [null,'b', null,'b', null,'b', null,'b', null,'b'],
    ['b', null,'b', null,'b', null, 'b', null, 'b', null],


]

function setup()
{
    var board_element = document.createElement('section');
    board_element.id = 'game-board';
    document.body.appendChild(board_element);

    for(var y = 0; y < board.length; y++)
    {
        for(var x = 0; x < board[y].length; x++)
        {
            var square = document.createElement('dvi');
            square.classList.add('square');

            if((x+y)%2 == 1)
                square.classList.add('black');
            board_element.appendChild(square);
            if(board[y][x])
            {
                var checker = document.createElement('div');
                checker.classList.add('checker');
                checker.classList.add('checker-' + board[y][x]);
                square.appendChild(checker);
            }
        }
    }
}
setup();