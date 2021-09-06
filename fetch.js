fetch('https://jsonplaceholder.tyicode.com/todos/')
.then(respose => respose.json())
.then(myjson => console.log(myjson))
.then(myjson => console.log(err))