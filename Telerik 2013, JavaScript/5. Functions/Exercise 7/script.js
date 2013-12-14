function check(arr){
	var num = -1;
	for(var i = 0; i < arr.length; i++){
		arr[i] *= 1;
	}
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
			num = arr[i];
			break;
		}
	}
	return num;
}
function CheckNum() {
	var array = jsConsole.read("#array");
	array.trim();
	var arr = array.split(",");
	num = check(arr);
	if(num > -1){
		jsConsole.writeLine("the first num is: "+num);
	}
	else {
		jsConsole.writeLine("there is no such num");
	}
}
