async function getDataFromPython() {
	document.getElementById('hello').innerText = await eel.get_data()();
}

document.getElementById('getbtn').addEventListener('click', () => {
	getDataFromPython();
})

document.getElementById('sendbtn').addEventListener('click', async() => {
	await eel.send_data('This came from Javascript!');
})
