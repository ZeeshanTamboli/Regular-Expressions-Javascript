let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter symbols
re = /^h/i; // Must start with
re = /World$/i; // Must end with
re = /^hello$/i; //Must begin and end with
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y?/i; // Optional character
re = /gre?a?y\?/i; // Escape  character

// Brackets [] - Character sets
re = /gr[ae]y/i; //Must be an 'a' or 'e'
re = /[GF]ray/; //Must be a G or F
re = /[^GF]ray/; //Match anything except a G or F
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any letter
re = /[0-9]ray/; //Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,}o/i; //Must occur atleast {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

//Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; //Non-word characters
re = /\d/; //Match digits
re = /\d+/; //Match digits - one or more
re = /\D/; //Match any non-digit
re = /\s/; //Match whitespace character
re = /\S/; //Match non-whitespace character
re = /Hell\b/i; //Word boundary

//Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y

//String to match
const str = 'basjfhbjxsnfsjd';

//Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
