    const e = document.querySelectorAll('button');
    let count = 1;
    e[0].addEventListener('click', choice(count, 0));
    e[1].addEventListener('click', choice(count, 1));
    e[2].addEventListener('click', choice(count, 2));
    e[3].addEventListener('click', choice(count, 3));
    e[4].addEventListener('click', choice(count, 4));
    e[5].addEventListener('click', choice(count, 5));
    e[6].addEventListener('click', choice(count, 6));
    e[7].addEventListener('click', choice(count, 7));
    e[8].addEventListener('click', choice(count, 8));
    function choice(count, rad){
        count++;
        if(count%2==0){
            e[rad].innerHTML="";
        }else{
            de[rad].innerHTML="O";
        }
    }

                 
