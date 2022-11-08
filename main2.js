
const mixedMessages = () => {
    const wordsArray1 = ['Blessed are the poor in spirit for theirs is the kingdom of heaven',
    'Blessed are those who mourn for they will be comforted', 
    'Blessed are the meek for they will inherit the earth', 
    'Blessed are those who hunger and thirst for righteousness for they will be filled', 
    'Blessed are the merciful for they will be shown mercy', 
    'Blessed are the pure in heart for they will see God', 
    'Blessed are the peacemakers for they will be called children of God', 
    'Blessed are those who are persecuted because of righteousness for theirs is the kingdom of heaven', 
    'Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me.  Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you', 
    'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven', 
    'When you pray, say: Father, hallowed be your name, your kingdom come. Give us each day our daily bread. Forgive us our sins, for we also forgive everyone who sins against us. And lead us not into temptation', 
    'Whoever wants to save their life will lose it, but whoever loses their life for me will save it', 
    'Do not store up for yourselves treasures on earth… for where your treasure is, there your heart will be also', 
    'In this world you will have trouble. But take heart! I have overcome the world', 
    '', ''];
  
    let word1 = wordsArray1[Math.floor(Math.random() * 15)];
  
    return `I say ${word1}!`
}

const displayMessage = () => {
    const messageSpot = document.getElementById('messageSpot');
    messageSpot.innerHTML  = mixedMessages();
    const button = document.getElementById('button');
    button.onclick('displayMessage()');
    

}



console.log(mixedMessages());