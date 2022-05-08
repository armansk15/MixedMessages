const generateRandomNumber = num => Math.floor(Math.random() * num);
// Gets # from 0

const collectiveWisdom = {
    signInfo: ['Sun', 'Moon', 'Star', 'Comet'],
    fortuneOutput: ['Awful luck', 'Bad luck', 'You\'re fine', 'Good luck', 'Great luck'],
    advice: ['Be more positive', 'Change your mindset', 'Listen to more trap', 'Care less']
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
};

        const formatWisdom = wisdom => {
            wisdom = personalWisdom.join('\n');
            console.log(wisdom);
        }

        formatWisdom();


