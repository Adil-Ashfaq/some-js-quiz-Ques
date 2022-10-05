const pendulum = (str) => {
    let count = 0;
    let obj = { degree: 0, pen: false };
    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - 1 - i]) {
                break;
            }
            else {
                count++;
            }
        }
    }
    else {
        for (let i = 0; i < (str.length - 1) / 2; i++) {
            if (str[i] != str[str.length - 1 - i]) {
                break;
            }
            else {
                count++;
            }
        }
    }
    obj.degree = count;
    if (count != 0) {
        obj['pen'] = true;
    }
    return obj;
}
console.log(pendulum('HHlloHH'))