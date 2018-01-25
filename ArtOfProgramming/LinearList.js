if('STACk'){
    //LIFO(Last In First Out)
    class STACK{
        constructor(max=10){
            this.MEMORY = []
            this.M = max;
            //length 값에 최상위 포인터가 있다.
            this.length = 0;
        }

        push(value){
            if(this.length === this.max){
                console.log("OVERFLOW");
                return undefined;
            }

            this.MEMORY[++this.length] = value;
        }   
        
        pop(){
            if(this.length === 0){
                console.log("UNDERFLOW");
                return undefined;
            }

            return this.MEMORY[this.length--];
        }
    }
}

if('QUEUE'){
    //FIFO(FIRST IN FIRST OUT)
    class QUEUE{
        constructor(max=10){
            this.MEMORY = []
            //max값을 주어서 메모리 낭비를 없앤다.
            this.M = max;
            this.R = 0;
            this.F = 0;
        }

        push(value){
            this.MEMORY[++this.R] = value;
            if(this.R === this.M) this.R = 0;

            if(this.R === this.F){
                console.log("OVERFLOW");
                return;
            }
        }   
        
        pop(){
            let value = this.MEMORY[this.F++];

            if(this.F === this.M) this.F = 0;

            if(this.R === this.F){
                console.log("UNDERFLOW");
                return;
            }

            return value;
        }

        size(){
            return this.R > this.F? this.R-this.F : this.M - this.R + this.F; 
        }
    }
}

if('LINKED LIST'){

    const Model = class{
        constructor(value, left, right){
            Object.assign(this, {value, left = (left || (left = this)), right = (right || (rigth = this))});
        }
    }

    const LinkedList = class{

        constructor(){
            this.length = 0;
            this.top = null;
        }

        push(value, index=-1){
            if(this.length === 0){
                this.top = new Model(value, undefined, undefined);
            }else{
                if(index > 0 ){
                    let right = get(index), left = right.left,
                    cur = new Model(value, left, right);
                    left.right = cur;
                    right.left = cur;
                }else
                    throw "Out Of Index";
            }
        }

        get get(index){
            if(index >= 0 && index <= this.length){
                let value = this.top;
                while(--index >= 0){
                    value = this.top.right;
                }
                return value;
            }else
                throw "Out Of Index";
        }

        [Symbol.toPrimitive](hint){
            let cur = this.top;
            return Array(this.length).map(_=>{let value = cur.value; cur = cur.left; return value});
        }
    }
}

if('TOPOLOGICAL SORT'){
    //Directed Acyclic Graph에서 방향성을 거스르지않게 정렬하는 알고리즘
    //DAG => Cycle 구조가 없는 그래프

    //구현
    //입력 : 1>4, 2>4, 3>2, 3>4
    const input = ['1>4', '2>4', '3>2', '3>4'];
    
    const Model = class{
        constructor(value){
            Object.assign(this, {value, children: []});
        }    
    }
}   