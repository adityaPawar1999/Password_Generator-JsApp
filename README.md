<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<script type="text/javascript" defer src="script.js"></script>
	<style>
		*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}
body{
	display: flex;
	justify-content: center;
	align-content: center;
	margin: 100px;
	background: #4285f4;
}
.container{
	background: #fff;
	width: 400px;
	border-radius: 8px;
}
.container h2{
	font-weight: 600;
	font-size: 1.31rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	text-align: center;
	border-bottom: 1px solid #d4dbe5;
}
.wrapper{

	margin: 1.2rem 1.7rem;
}

.input-box input{
	width: 100%;
	height: 45px;
	color: #212121;
	background: none;
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 1.4px;
	border-radius: 4px;
	border: 1px solid #aaa;
	padding: 0 2.85rem 0 1rem;
}

.wrapper .input-box{
	position: relative;
}
.input-box span{
	position: absolute;
	right: 13px;
	top: 15px;
	color: gray;
	cursor: pointer;
	font-weight: 700;
	lighting-color: 50px;
}
.wrapper .pass-indicator{
	width: 100%;
	height: 3px;
	background: #dfdfdf;
	margin-top: 1rem;
	border-radius: 55px;
	position: relative;
}
.pass-indicator::before{
	position: absolute;
	content: " ";
	height: 100%;
	width: 50%;
	transition: width 0.3s ease;
}
.pass-indicator#weak::before{
	background: #E64A4A;
	width: 20%;
}

.pass-indicator#medium::before{
	background: #f1c80b;
	width: 50%;
}

.pass-indicator#strong::before{
	background: #4285f4;
	width: 100%;
}
.wrapper .pass-length{
	margin: 1.56rem 0 1.25rem;
}
.pass-length .details{
	display: flex;
	justify-content: space-between;
}
.pass-length input{
	width: 100%;
	height: 5px;
}
.pass-settings .options{
	display: flex;
	align-items: center;
	list-style: none;
	flex-wrap: wrap;
	margin-top: 1rem;
	padding-left: 10%;
}
.pass-settings .options .option{
	display: flex;
	margin-bottom: 1rem;
	width: calc(100% / 2);
	font-size: 12px;
	cursor: pointer;
}
.options .option:first-child{
	pointer-events: none;
}
.options .option:first-child input{
	opacity: 0.7;
}
.options .option label{
	cursor: pointer;
	padding-left: 10px;
}
.wrapper .generate-btn{
	width: 100%;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	background: #4285f4;
	font-size: 0.8rem;
	padding-top:0.7rem;
	padding-bottom:0.7rem;
	border-radius: 5px;
	text-transform: uppercase;
	margin: 0.94rem 0 1.3rem;
}
	</style>
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
	
