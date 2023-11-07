var button = document.querySelector(".debounce"); 
const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
                debounceTimer 
            = setTimeout(() => func.apply(context, args), delay) 
    } 
} 
button.addEventListener('click', debounce(function() { 
        alert("Hello\nNo matter how many times you" + 
            "click the debounce button, I get " + 
            "executed once every 3 seconds!!") 
                        }, 3000)); 




const debounce1 = (func,delay)=>{
    let timer;

    return function(){
        const context = this;
        const arg = arguments;

        clearTimeout(timer)
        setTimeout(()=>{
         func.apply(context,arg)
        },delay)
    }
}