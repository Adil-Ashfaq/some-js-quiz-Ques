function anagram(str1, str2) {
    if (str1.length == str2.length) {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str1[i] === str2[j]) {
                    str2 = str2.substring(0, j) + '0' + str2.substring(j + 1);
                    break;
                }
                else {
                    if (j === str2.length - 1) {
                        return false;
                    }
                }
            }
        }
    }
    else {
        return false;
    }
    return true;
}
console.log(anagram("aabb", "bbaa"));