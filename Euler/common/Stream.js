exports.Stream = class Stream{
    static get(num){return new Stream(num);}    
    constructor(num=1){ this.funcs = []; this.FILTER = "F"; this.MAP = "M"; this.num = num; }    
    * exec(){
        loc : while(true){
            let num = ++this.num;
            for(let obj of this.funcs) switch(Object.keys(obj).pop()){
                    case this.FILTER: if(obj[this.FILTER](num)) break; else continue loc;
                    case this.MAP: num = obj[this.MAP](num); break;
                    default: return error();
            }
            yield num;
        }
    }
    run(count, f){
        for(let iter= this.exec(); count-->0;){
            iter = iter.next();
            f(iter.value);
        }
        return this;
    };
    error(){ console.log("Error"); }
    addFilter(f){ let obj={}; obj[this.FILTER]=f; this.funcs.push(obj); return this; }
    addMap(f){ let obj={}; obj[this.MAP]=f; this.funcs.push(obj); return this; }
}