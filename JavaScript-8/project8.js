let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//check original length
console.log(secretMessage.length);
//remove the last string
secretMessage.pop();
//check remove the last string
console.log(secretMessage.length);
//add the words to and Program as separate strings to the end
secretMessage.push('to','secretMessage');
//Change the word easily to the word right
secretMessage[7]='right';
//remove the first string
secretMessage.shift()
//add the string Programming to the beginning
secretMessage.unshift('Programming')

//replace them with the single string know
secretMessage.splice(6,5,'know');

console.log(secretMessage);

console.log(secretMessage.join(' '))