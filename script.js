const loveForm = document.querySelector('#love-form');
const result = document.querySelector('#result');

loveForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const fname = document.querySelector('#fname').value;
	const sname = document.querySelector('#sname').value;

	fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe",
			"x-rapidapi-host": "love-calculator.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(data => {
		result.textContent = `${fname} and ${sname} have a love percentage of ${data.percentage}% and a ${data.result} relationship!`;
	})
	.catch(error => console.error(error));
});
