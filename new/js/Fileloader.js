async function Fileloader(url, Filetype, Targetelmnt) {
	const response = await fetch(url, {
		headers: {
			"Cache-Control": "no-cache",
		},
	});
	Filetype=Filetype.toLowerCase();
	const data = await response.text();
	if (Filetype == "md") {
		var parsedmd = await marked.parse(data);
		document.getElementById(Targetelmnt).innerHTML = parsedmd;
	} else if (Filetype==="html"){
		
	}
}
