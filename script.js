function generateNumber(){

    const  min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const resultRandom = document.querySelector(".result-random")


    if( min >= max){
        alert("o valor min deve ser menor do que o valor maximo")
        resultRandom.innerHTML = 0
        
    } else{

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        resultRandom.innerHTML = result
    }
   
        
   
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    

}

