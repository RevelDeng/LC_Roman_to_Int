var romanToInt = function(s) {
    arr = s.split("")
    num = 0
    dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    for (var i = 0; i < arr.length; i++) {
        for (var key in dict) {
            if (arr[i] == key) {
                if ((arr[i] + arr[i+1]) == "IV") {
                    num += 4
                    i++
                    break
                }
                if ((arr[i] + arr[i+1]) == "IX") {
                    num += 9
                    i++
                    break
                }
                if ((arr[i] + arr[i+1]) == "XL") {
                    num += 40
                    i++
                    break
                }
                if ((arr[i] + arr[i+1]) == "XC") {
                    num += 90
                    i++
                    break
                }
                if ((arr[i] + arr[i+1]) == "CD") {
                    num += 400
                    i++
                    break
                }
                if ((arr[i] + arr[i+1]) == "CM") {
                    num += 900
                    i++
                    break
                }
                else {
                    num += dict[key]
                }   
            }
        }
    }
    return num
};