//closure
/*function outer(){
    let content="Hello"
    function inner()
    {
        console.log(`${content}`);
    }
    inner();
    
}

outer();*/

//closure
function createCounter()
{
    let count=0;
    function increment()
    {
        count++;
        console.log(`The incremented count is ${count}`);
    }
    function decrement()
    {
        count--;
        console.log(`The decremented count is ${count}`);
    }
    function currentCount()
    {
        console.log(`The current count is ${count}`);
    }

    return {increment,decrement,currentCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.currentCount();


