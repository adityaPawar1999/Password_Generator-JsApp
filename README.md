<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" defer src="script.js"></script>
</head>
<body>
	<div class="container">
		<h2>Password Generator</h2>
		<div class="wrapper">
			<div class="input-box">
				<input type="text"  disabled name="">
				<span class="material-symbols-rounded">COPY</span>
			</div>	
			<div class="pass-indicator" id=""></div>
			<div class="pass-length">
				<div class="details">
					<label class="title">Password Length</label>
					<span></span>
				</div>
				<input type="range" min="8" max="30" step="1" name="">
			</div>
			<div class="pass-settings">
				<label class="title">Password Settings</label>
				<ul class="options">
					<li class="option">
						<input type="checkbox" id="lowercase" checked>
						<label for="lowercase">LowerCase (a-z)</label>
					</li>	
					<li class="option">
						<input type="checkbox" id="uppercase">
						<label for="upperCase">UpperCase (A-Z)</label>
					</li>
					<li class="option">
						<input type="checkbox" id="numbers">
						<label for="numbers">Numbers (0-9)</label>
					</li>
					<li class="option">
						<input type="checkbox" id="symbols">
						<label for="symbols">symbols (@#_!)</label>
					</li>
					<li class="option">
						<input type="checkbox" id="exc_duplicate">
						<label for="exc-duplicate">Exclude Duplicate</label>
					</li>
					<li class="option">
						<input type="checkbox" id="spaces">
						<label for="spaces">Include Spaces<wabel>
					</li>		
				</ul>
			</div>
			<button  class="generate-btn">Generate PAssword</button>
		</div>
	</div>

</body>
</html>
