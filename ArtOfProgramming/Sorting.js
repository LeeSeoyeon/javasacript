if('Sorting 응용'){
    //1. Solve Togetherness Problem
    //2. 둘 이상의 파일들에 있는 항목들의 부합
    //3. 키값으로 정보 검색
}

if('순열의 특징'){ //너무 어렵다. 넘어가자.
    //순열: 순서가 부여된 임의의 집합을 다른 순서로 뒤섞는 연산
    //1. 반전(SIGN)
    // i < j이고,  Ai > Aj 인 두원소의 쌍(Ai, Aj)를 반전으라 부른다.
}

if('내부 정렬'){
    const arr = [3,2,5,1,4];
    //A. Insertion Sort
    const insertion = (arr=[])=>{
        arr = [...arr];
        for(let i=1; i<arr.length; i++){
            let j = i-1, value = arr[i];
            while(j>=0 && value < arr[j]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                j--;
            }
        }
        return arr;
    }

    //B. Exchange Sort(Bubble Sort)
    const exchange = (arr=[])=>{
        arr = [...arr];
        for(let i=0; i<arr.length-1; i++)
            for(let j = 1; j<arr.length-i; j++)
                if(arr[j] < arr[j-1]) [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        return arr;
    }

    //C. Selection Sort
    const selection = (arr)=>{
        arr = [...arr];
        for(let i=0; i<arr.length-1; i++){
            minIdx = i;
            for(let j =i; j<arr.length; j++)
                if(arr[j] < arr[minIdx]) minIdx = j;
            
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
        return arr;
    }

    console.log(selection(arr));

    //D. Enumeration Sort
    
    //E. Quick Sort
}