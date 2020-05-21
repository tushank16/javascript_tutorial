console.log("CONNECTED");
////** printReverse() */
function printReverse(arr) {
    for( var i = arr.length -1; i >= 0; i-- ){
        console.log(arr[i]);
    }
}
///** isUnifrorm() */

function isUnifrom(arr){
    var index = arr[0];
    for(var i = 1; i < arr.length ; i++){
        if(index != arr[i])
        return false;
    }
    return true;
}

//** sumArray() */

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(element) {
        sum += element;
    });
    return sum;
}

///****max() */

function maxNo(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i]; 
        }
    }
    return max;
}