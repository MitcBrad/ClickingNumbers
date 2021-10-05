//Below is the table of boxes
let data = [{
		number: -1,
		color: "red"
	},
	{
		number: 0,
		color: "green"
	},
	{
		number: 0,
		color: "blue"
	}];

let boxes = [];

function box(number, color) {
	var that = this;
	this.number = number;
	this.ele = document.createElement("div");
	this.ele.innerHTML = this.number;
	this.ele.style.backgroundColor = color;
	this.ele.style.height = "100px";
	this.ele.style.width = "200px";
	this.ele.style.fontSize = "18px";
	this.ele.style.margin = "10px";
	this.ele.style.borderRadius = "10px";
	this.ele.style.textAlign = "center";
	this.ele.style.verticalAlign = "center";

	var debounce = false;
	this.ele.addEventListener("click", function() {
		if (debounce == false){that.Increment();
			debounce = true;}
		else{debounce = false;}});
	document.body.appendChild(this.ele);
}

box.prototype.Increment = function() {
	this.number++;
	this.ele.innerHTML = this.number;
};
for (let i = 0; i < data.length; i++) {boxes.push(new box(data[i].number, data[i].color));}
boxes[0].Increment();

//Brad, CIT215 October 4th, 2021
