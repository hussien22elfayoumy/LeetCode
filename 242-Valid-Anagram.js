var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const freq1 = {};
    const freq2 = {};
    fillFreq(freq1, s);
    fillFreq(freq2, t);

    console.log(freq1, freq2);
    for (let key in freq1) {
        if (!(key in freq2)) {
            return false;
        }
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
};

function fillFreq(freq, str) {
    for (let char of str) {
        freq[char] ? freq[char]++ : (freq[char] = 1);
    }
}