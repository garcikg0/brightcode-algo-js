let obj = {
    valueToSearchFor: 200,
    sortedArr: [10, 50, 200, 230, 400, 530, 720],
    unSortedArr: [1000, 50, 200, 850, 430, 230],
    init:function(){
        //// DO NOT NEED TO EDIT ////
        let keys = Object.keys(this);
        let terminalArgs = process.argv.slice(2);
        let methodNames = keys.slice(keys.indexOf("init")+1);
        let commands = {};
        methodNames.forEach((methodName)=>{
            let capitalLetters = "";
            for(let i = 0; i < methodName.length; i++){
                let letter = methodName.charAt(i);
                if(letter === letter.toUpperCase()){
                    capitalLetters+=letter.toLowerCase();
                }
            }
            commands[methodName[0] + capitalLetters] = methodName;
        })
        let result;
        let methodToRun = commands[terminalArgs[0]];
        if(methodToRun){
            result = this[methodToRun](this.sortedArr, terminalArgs[1] ? Number(terminalArgs[1]) : this.valueToSearchFor);
        } else {
            let methodCommandList = Object.entries(commands).map((method)=>`\n(${method[0]}) - ${method[1]}`);
            result = `Please provide an abbreviation as a terminal argument:` + methodCommandList;
        }
        console.log(result);
        //// DO NOT NEED TO EDIT ////
    },
    binaryRecursive:function(arr, valueToFind, start=0, end=arr.length-1){
        if (start > end){
            return -1;
        }
        let mid = Math.floor((start + end) / 2);
        if (valueToFind === arr[mid]){
            return mid
        } else if (valueToFind > arr[mid]){
            this.binaryRecursive(arr, valueToFind, mid + 1, end)
        } else if (valueToFind < arr[mid]){
            this.binaryRecursive(arr, valueToFind, start, mid - 1)
        }
    },
    binaryIterative:function(arr, valueToFind){
        let start = 0;
        let end = arr.length-1;

        while (start <= end){
            console.log("Current array elements: ", arr.slice(start, end+1));
            let midIndex = Math.floor((start + end)/2);
            if (valueToFind === arr[midIndex]){
                return midIndex
            } else if (valueToFind > arr[midIndex]){
                start = midIndex + 1
            } else if (valueToFind < arr[midIndex]){
                end = midIndex - 1
            }
        }
        return -1;
    },
    exponentialIterative:function(){

    },
    exponentialRecursive:function(){

    },
    linearRecursive:function(){

    },
    linearIterative:function(){

    },
    jumpIterative:function(){

    },
    interpolationIterative:function() {

    },
    interpolationRecursive:function() {

    }
}
require.main === module && obj.init();
module.exports = obj;