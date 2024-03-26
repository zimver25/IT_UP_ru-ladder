var count = +prompt('сколько ступенек вам нужно? ')
var main_ladder = prompt('как будут выглядить основные ступеньки?')
var last_ladder = prompt('как будут выглядить последния ступеньки?')

for(let i = 0; i <= count; ++i){
    console.log(main_ladder.repeat(i) + last_ladder);
}