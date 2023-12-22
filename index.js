let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = string.replace(/X/g, '*').replace(/÷/g, '/');
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == '←') {
                string = string.slice(0, -1); 
                document.querySelector('input').value = string;
            }
            else {
                if (/[\d\+\-\*\/\.]/.test(e.target.innerHTML) || e.target.innerHTML == 'X' || e.target.innerHTML == '÷') {
                    string = string + (e.target.innerHTML == 'X' ? '*' : e.target.innerHTML == '÷' ? '/' : e.target.innerHTML);
                    document.querySelector('input').value = string;
                }
                else {
                    throw new Error('Invalid input');
                }
            }
        } catch (error) {
            console.error(error.message);
        }
    });
});
