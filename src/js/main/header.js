export default class Header {
	constructor() {
		this.init()
	}

	init = () => {
		const author = 'Italo Costa'
		const emoji = '👨🏻‍💻'
		console.info(`Developed by: ${author}${emoji}`)
	}
}
