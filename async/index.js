function func(){
    return new Promise(resolve => {
        setTimeout(() => resolve("It works!"), 1000);  
    });
}

const callFunc = async () => {
    try {
        const result = await func();
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
}

callFunc();