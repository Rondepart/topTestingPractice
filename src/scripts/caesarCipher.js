const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function cipher(string, shiftFactor) {
  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);
  const isUpperCase = (str) => /^[A-Z]+$/.test(str);
  const str = string.split("");
  const ciphered = [];
  const alphabetArr = alphabet.split("");
  let cipheredStr;

  str.forEach(el => {
    if(!(isAlpha(el))) {
      ciphered.push(el);
      cipheredStr = ciphered.join("");
      return;
    }
    const capitalize = isUpperCase(el);
    const place = alphabetArr.findIndex(letter => letter === el.toLowerCase());
    const shift = (place + shiftFactor) % alphabetArr.length;
    const cipheredEl = alphabetArr[shift];
    
    if(capitalize) {
      ciphered.push(cipheredEl.toUpperCase());
    } else { 
      ciphered.push(cipheredEl);
    }

    cipheredStr = ciphered.join("");
    return;
  });

  return cipheredStr;
}