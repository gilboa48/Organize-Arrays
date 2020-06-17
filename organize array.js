const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


const smallestNumber = arr => {
	let num = arr[0];
	for (item of arr) {
		if (item < num) {
			num=item;
		} 
	}
	return num;
}

let newChildArray =[];

const createNewChildArray = (num,arr) => {
	arr.map (item => {
		if (item === num){
			newChildArray.push(item);
		}
	});
} 


const cleanArray = (num, arr) => {
	for (item of arr) {
		if (item===num) {
			arr.splice(arr.indexOf(item),1);
			cleanArray(num,arr);
		}
	}
}

const newArray=[];
const createNewArray = () => {
	if (newChildArray.length > 1){
		newArray.push(newChildArray);
		newChildArray=[];	
	} else {
		newArray.push(newChildArray[0]);
		newChildArray=[];
	}
	
}


const master = arr => {
	for (item of arr) {
	createNewChildArray(smallestNumber(arr),arr);
	cleanArray(smallestNumber(arr),arr);
	createNewArray ();
	master (arr);
	}
 }

master(array);
console.log(newArray);
