'use strict';
var arrTest = [1,2],
    minArrTest,
    maxArrTest,
    sumArgumentsTest;


//var car = require('js/car.js');

//    minArrTest = require('f_min-max-sum/f_min-max-sum.js');
        
import {min,max,sum} from 'lib_js/my_function/f_min-max-sum.js';

minArrTest = min(arrTest);
maxArrTest = max(arrTest);
sumArgumentsTest = sum(1,2,true,null,'',undefined);

console.log('arrTest          = ',arrTest);
console.log('arguments        = 1,2,true,null,"",undefined');
console.log('minArrTest       = ',minArrTest);
console.log('maxArrTest       = ',maxArrTest);
console.log('sumArgumentsTest = ',sumArgumentsTest)