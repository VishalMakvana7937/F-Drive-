const url = 'https://sportscore1.p.rapidapi.com/leagues/1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '241cbc5b22msha5eb790d60a7550p1d3c0djsn90cbd541d0d2',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

var myfun = () => {
    fetch(url,options).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err));
}
myfun();