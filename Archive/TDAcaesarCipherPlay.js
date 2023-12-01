function transformLetter(letter, shift, isEncoded) {
        // method to change individual letter

        const alphabet = [
            'a', 'b', 'c', 'd', 'e', 
            'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o', 
            'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 
            'z'
        ]
        
        // note use of modulus to wrap through alphabet
        if (isEncoded) {
            console.log("it was true")
            return alphabet[((alphabet.indexOf(letter) + (26 - shift)) % 26)];
        } else {
            console.log("it was false")
            return alphabet[(alphabet.indexOf(letter) + shift) % 26];
        }
    }

transformLetter("z", 23, true);