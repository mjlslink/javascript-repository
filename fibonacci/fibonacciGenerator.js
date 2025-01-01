function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output=[];
    
        for (var i=0; i <= n; i++) {
            
            if (output.length === 0 || output.length === 1) {
                output.push(i);
                continue;
            }
            
            var nextTerm = output[i-2] + output[i-1];
            output.push(nextTerm);
        }
        
        return output;
    }
    
    var o = fibonacciGenerator(10);
    console.log(o);
    
    