const generateRandomNumber = num => Math.floor(Math.random() * num);
console.log(generateRandomNumber);
// Gets # from 0

const collectiveWisdom = {
    signInfo: ['sun', 'moon', 'star', 'comet'],
    fortuneOutput: ['awful luck', 'bad luck', 'you\'re fine', 'good luck', 'great luck'],
    advice: ['be more positive', 'change your mindset', 'listen to more trap', 'care less']
};

// Store the 'wisdom' in an array
let personalWisdom = []

// Store message components and create the message
for(let smh in collectiveWisdom) {
    let thisIndex = generateRandomNumber(collectiveWisdom[smh].length)

    switch (smh) {
        case 'signInfo':
            personalWisdom.push(`Your sign is: ${collectiveWisdom[smh][thisIndex]}`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`Your output is: ${collectiveWisdom[smh][thisIndex]}`)
            break
        case 'advice':
            personalWisdom.push(`You should: ${collectiveWisdom[smh][thisIndex]}`)
            break
        default:
            personalWisdom.push('Not enough info!')
    }
}


