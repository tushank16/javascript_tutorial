// your code
var todos = ["tushank"];

var input = prompt("Enter what you want to do?");

while(input !== "quit")
{
    //handle input
    if (input === "list")
    {   
        listtodo();
    }
    else if (input === "new")
    {   //ask for new Todo
        addtodo();
    }
    else if (input === "delete")
    {
        deletetodo();
    }

    // ask again for new input
    input = prompt("Enter what you want to Do?");
}
console.log("Ok, You quit the app");

function listtodo() {
    console.log("*************");
    todos.forEach(function(todos,i) {
        console.log(i + ": "+ todos);    
    });
    console.log("*************");
}
function addtodo() {
    var newTodo = prompt("Enter new Todo");
    //add to todos array
    todos.push(newTodo);
    console.log(newTodo + " added to todo list");
}
function deletetodo() {
    var index = prompt("Enter index of Todo to Delete");
    todos.splice(index,1);
    console.log("Deleted Todo");
}