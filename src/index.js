const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseToNumber = { '**********': ' ' };
    let decoded = '';

    for (let key in MORSE_TABLE) {
        const number = key.replace(/\-/g, '11').replace(/\./g, '10').padStart(10, '0');
        morseToNumber[number] = MORSE_TABLE[key];
    }

    for (let i = 0; i < expr.length; i += 10) {
        const char = expr.slice(i, i + 10).padStart(10, '0');
        decoded = decoded.concat(morseToNumber[char]);
    }
    return decoded;
}

module.exports = {
    decode
}