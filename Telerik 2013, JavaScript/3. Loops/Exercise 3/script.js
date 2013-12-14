function CheckNum() {
	var n = jsConsole.read('#input-number');
	var arr = n.split(",");
	var min = arr[0];
	var max = arr[0];
	for (var i in arr){
		if(arr[i] != ""){
			arr[i] *= 1;
			if(max < arr[i]){
				max = arr[i];
			}
			if(min > arr[i]){
				min = arr[i];
			}
		}
	}
	jsConsole.writeLine("min: " + min);
	jsConsole.writeLine("max: " + max);
}
