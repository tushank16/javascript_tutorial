setTimeout(function () {
    // your code
    var todos = ["tushank"];
    var input = prompt("Enter what you want to Do?");
    while(input !== "quit")
    {
        //handle input
        if (input === "list")
        {
            console.log(todos);
           // document.getElementById("list") = input; 
        }
        else if (input === "new")
        {   //ask for new Todo
            var newTodo = prompt("Enter new Todo");
            //add to todos array
            todos.push(newTodo);
        }
        // ask again for new input
        input = prompt("Enter what you want to Do?");
    }
    console.log("Ok, You quit the app");

  }, 200)
