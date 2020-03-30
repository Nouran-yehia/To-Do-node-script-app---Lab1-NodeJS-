const jsonFile = './package.json'; 
var fs = require('fs');
let data = getData();
let dataLen = data.length;

// console.log (dataLen);

function setData(data){
    let dataToString = JSON.stringify(data)
    fs.writeFileSync(jsonFile,dataToString);
}

function getData(){
    let reading = fs.readFileSync(jsonFile);
    let data = JSON.parse(reading);
    return data;
}

function add(title, body){
    data.push({title, body, checked:false })
    setData(data);
    console.log("item added successfully to the todo list")
}

function uncheck(itemNum){
    if (data == "")
    console.log("there is no tasks to check")
    if (itemNum >= dataLen)
    console.log("there is no task has the mentioned index number!")
    else{
        if(!data[itemNum].checked)
            console.log("the task is already unchecked!")
        else{
    data[itemNum].checked = false
    setData(data)
    console.log("item unchecked successfully")
        }
}
}

function check(itemNum){
    let data = getData();
    if (data == "")
    console.log("there is no tasks to check")
    if (itemNum >= dataLen)
    console.log("there is no task has the mentioned index number!")
    else{
        if(data[itemNum].checked)
        console.log("the task is already checked");
        else{
    data[itemNum].checked = true
    setData(data)
    console.log("item checked successfully")
        }
    }
}

function deletee(itemNum){
    let data = getData()
    if (data == "")
    console.log("there is no tasks")
    if (itemNum >= dataLen)
    console.log("there is no task has the mentioned index number!")
    else{
        data.splice(itemNum, 1)
        setData(data);
        console.log("item deleted successfully from the todo list")}
}

function edit(itemNum, newtitle, newbody){
    let data = getData();
    if (data == "")
    console.log("there is no tasks")
    if (itemNum >= dataLen)
    console.log("there is no task has the mentioned index number!")
    else{
    data[itemNum].title = newtitle
    data[itemNum].body = newbody
    setData(data)
    console.log("item has been edited")
    }
}

function list(option){
    let flag = 0;
    data = getData();
    if (data == "")
    console.log("there is no tasks")
    else
    if(option == "all")
    {
            console.log("Task list:");
            data.forEach(function (task, index){
                console.log(index+1+"."," ["+"Title : " +data[index].title +" "+ "| " +"Checked: " + data[index].checked +"]");
            });
            
        }
    
    if (option == "checked"){
        data.forEach(function (task, index){
            let datachecked = data[index].checked
            var checkLen = datachecked.length
            if(datachecked) 
            console.log(index+1+"."," ["+"Title : " +data[index].title +" "+"| " +"Checked: " + data[index].checked +"]");
            if (checkLen < 1)
            {
                console.log("there is no checked tasks")
            }
        });
        }
    if (option == "unchecked"){
        
        data.forEach(function (task, index){
            let dataunchecked = !data[index].checked
            var uncheckLen = dataunchecked.length
            if(dataunchecked) 
            console.log(index+1+"."," ["+"Title : " +data[index].title +" "+"| " +"Checked: " + data[index].checked +"]");
        if (uncheckLen < 1)
        {
            console.log("there is no unchecked tasks")
        }    
        });
            if (flag == 1)
            console.log("There is no unchecked tasks!")
        }
        
    }

module.exports= {
add,
list,
edit,
deletee,
check,
uncheck,
getData,
setData,
}