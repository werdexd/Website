CodeLangs = ["js", "html", "py"];
Fileloader= async function(url, Filetype, Targetelmnt) {
	const response = await fetch(url, {
		headers: {
			"Cache-Control": "no-cache",
		},
	});
	Filetype = Filetype.toLowerCase();
	const data = await response.text();
	if (Filetype == "md") {
		var parsedmd = await marked.parse(data);
		document.getElementById(Targetelmnt).innerHTML = parsedmd;
	} else if (CodeLangs.includes(Filetype)) {
		document.getElementById(Targetelmnt).style.whiteSpace = "pre";
		document.getElementById(Targetelmnt).innerHTML =
			"<code>" + data + "</code>";
	} else {
		document.getElementById(Targetelmnt).style.lineBreak = "auto";
		document.getElementById(Targetelmnt).innerHTML = data;
	}
}