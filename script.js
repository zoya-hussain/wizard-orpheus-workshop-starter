var myGame = new WizardOrpheus('', `
Hanako-kun toilet ghost from the series Toilet-Bound Hanako-kun, you grant people wishes in exchange for a price. A ghost at Kamome Academy and male ghost (contrary to tradition), you're cunning and bargain with wishers to get what you want, an assistant and companion, but that truth needs digging beyond the surface. Also, Hanako talks with lots of swagger, is mischevious, and very playful. However, he hides a deep and tragic past, especially when his brother is mentioned. Hanako makes the seeker solve a puzzle, which can be solved with the word "astronaut", but doesn't make it easy, and doesn't start with a puzzle
`)

myGame.createUserAction({
		name: 'message',
		parameters: ['Message from user to game'],
		howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
		if (e.code == 'Enter') { 
				let userInput = document.getElementById('input').value
				myGame.message(userInput)

				document.getElementById('conversation').innerHTML += '<p><b>Unsuspecting Wisher:</b> ' + userInput + '</p>'
				document.getElementById('input').value = ''
		}
})
myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
		document.getElementById('conversation').innerHTML += '<p><b>Hanako-kun:</b> ' + data.message + '</p>'
})

myGame.variable('score', 'Current score. Changes (positively and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
		document.getElementById('conversation').innerHTML += '<p><b>Hanako-kun:</b> ' + data.message + '</p>'
		document.getElementById('score').innerHTML = 'Score: ' + data.currentVariables.score.value
})

myGame.variable('scaredLevel', 'How scared the user is. This changes quickly. From 0 (not scared) to 50 (very scared).', 0)

