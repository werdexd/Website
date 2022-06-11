const mdfile = "/website/README.md";

async function Fileloader(url, type) {
	const response = await fetch(url);
	const data = await response.text();
	if (type == "md") {
		parsedmd = await marked.parse(data);
		console.log(parsedmd);
		document.getElementById("MD").innerHTML = parsedmd;
	}
}

Fileloader(mdfile,"md");
