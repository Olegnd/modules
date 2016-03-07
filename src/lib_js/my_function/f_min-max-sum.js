 // my code;




// fanction min;

export function min (masMn)  {

var masMn ,
    indexMasMn,
    lenghtMasMn;
    
  
var masNumber = new Array (),
    indexMasNumber,    
    lenghtMasNumber;
    
var minimum;
    
    
    
    
  if ( masMn == undefined) {
  }
     
    else { 
    
    indexMasMn      = 0;
    lenghtMasMn     = masMn.length -1;
    indexMasNumber  = 0;
    
        while (indexMasMn <= lenghtMasMn) {
            
            
    if ( isNaN (masMn [ indexMasMn ]) == true      ||
         typeof masMn [ indexMasMn ] == "string"   ||
         typeof masMn [ indexMasMn ] == undefined  || 
         masMn [ indexMasMn ] == null              ||
         typeof masMn [indexMasMn] == "boolean"     ) 
                                            {
        indexMasMn = indexMasMn + 1;
                                                
       }
        else { 
              masNumber [indexMasNumber] = 
                  masMn [indexMasMn];
              indexMasNumber = indexMasNumber + 1;
              indexMasMn = indexMasMn + 1;
              
             }
            
    };
    
 
    indexMasNumber  = 0;
    lenghtMasNumber = masNumber.length - 1;
    minimum         = masNumber [ indexMasNumber ];
        
     while (indexMasNumber <= lenghtMasNumber) {
        
     if (minimum <= masNumber [indexMasNumber]){
        
          }
    else { minimum = masNumber [indexMasNumber]; 
          
        }
        indexMasNumber = indexMasNumber +1;    
          
     }
                            
    return minimum                
      }
}    
    


// function max;

export function max (masMx)  {

var masMx ,
    indexMasMn,
    lenghtMasMn;
    
  
var masNumber = new Array (),
    indexMasNumber,    
    lenghtMasNumber;
    
var maximum;
    
    
    
    
  if ( masMx == undefined) {
     }
    else {
    indexMasMn      = 0;
    lenghtMasMn     = masMx.length -1;
    indexMasNumber  = 0;
        
    while (indexMasMn <= lenghtMasMn) {
            
            
    if ( isNaN (masMx [ indexMasMn ]) == true      ||
         typeof masMx [ indexMasMn ] == "string"   ||
         typeof masMx [ indexMasMn ] == undefined  || 
         masMx [ indexMasMn ] == null              ||
         typeof masMx [indexMasMn] == "boolean"     ) 
                                            {
        indexMasMn = indexMasMn + 1;
                                                
       }
        else { 
              masNumber [indexMasNumber] = 
                  masMx [indexMasMn];
              indexMasNumber = indexMasNumber + 1;
              indexMasMn = indexMasMn + 1;
              
             }
            
    };
    
 
    indexMasNumber  = 0;
    lenghtMasNumber = masNumber.length - 1;
    maximum        = masNumber [ indexMasNumber ];
        
     while (indexMasNumber <= lenghtMasNumber) {
        
     if (maximum >= masNumber [indexMasNumber]){
        
          }
    else { maximum = masNumber [indexMasNumber]; 
          
        }
        indexMasNumber = indexMasNumber +1;    
          
     }
                            
    return maximum;                
      }
}    
    








   
// function sum;

export function sum (parametrs) {
var parametrs,
    elem = 0,
    masSm = [],
    summer = 0,
    indexMas = 0,
    valueMas,
    valueMas1,
    lenghtMas;
    
   while ( elem <= arguments.length - 1) {
       
       
        masSm [ elem ] = arguments [ elem ];
        
                
       if (elem == arguments.length) {
           break
       }  
       elem = elem +1;             
             
   };
    

    valueMas = masSm [0];
    lenghtMas = masSm.length;
    
    
    
    
    
        while (indexMas <= lenghtMas) {
    if ( isNaN (valueMas) ) {
        valueMas = summer;
       
    }
            
            else { 
                
            };
            
    if ( typeof valueMas == "string" ) {
         valueMas = summer; 
    }
    else { 
         
    };
           
    if ( typeof valueMas == undefined ) {
        valueMas = summer;
    } 
    else {
        
    };
    if ( valueMas == null ) {
        valueMas = summer;
    } 
    else {
        
    };
        if ( typeof valueMas == "boolean") {
            valueMas = summer}
        else {
            
        };  
    
            valueMas1 = masSm [ indexMas + 1];
            
    if ( typeof valueMas1 == "string") { 
         valueMas1 = 0;        
    }
    else {
        
    };
    if ( isNaN (valueMas1)) {
        valueMas1 = 0;
       }   
    else { 
        
    };     
    if ( typeof valueMas1 == undefined ) {
        valueMas1 = 0;
    } 
    else {
        
    };
    if ( valueMas1 == null ) {
        valueMas1 = 0;
    } 
    else {
        
    };
        if ( typeof valueMas1 == "boolean") {
            valueMas1 = 0; 
        }
        else {
            
        }; 
            
    if (indexMas > lenghtMas) { 
                break 
    } 
        else { valueMas = valueMas + valueMas1; 
    summer   = valueMas;
    indexMas = indexMas + 1;            
        } 
  };
          
 return summer;

        
}

//export function min(masMn);
//export function max(masMx);
//export function sum(parametrs);
