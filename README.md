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

# Describe