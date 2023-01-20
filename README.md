# Describe pigLatin()

Test: "It should recognize a single vowel."
Code: 
const text = "a"
const vowel = "a"
Expected Output: true

Test: "It should recognize any single vowel (a, e, i, o, u)"
Code: 
const text = "i"
const vowel = ["a", "e", "i", "o", "u"];
Expected Output: true

Test: "It should recognize all instances of a vowel in a word."
Code:
const text = "bae"
const vowel = ["a", "e", "i", "o", "u"];
Expected Output: false, true, true

Test: "It should recognize the first character in a word."
Code:
const text = "bae"
Expected Output = "b"

Test: "It should determine if first letter is vowel or not."
Code:
const text = "bae"
Expected Output = "false"

Test: "it should add 'ay' onto the end of a word."
Code:
const text = "bae"
Expected Output = "baeay"

Test: "It should remove the first character of a word if it is a consonant followed by a vowel."
Code: 
const text = "bae"
Expected Output = "ae"

Test: "It should remove the first character of a word if it is a consonant followed by a vowel and add it to the end"
Code: 
const text = "bae"
Expected Output = "aebay"

Test: "It should remove the first and second character of a word if they are both consonants followed by a vowel, then add those consonants to the end (+ "ay")"
const text = "branch"
Expected Output = "anchbray"


# Describe