if('Tree'){
    //Tree의 구성
    //1. Terminal Node => degree가 0인 Node
    //2. Branch Node => Terminal Node가 아닌 Node
    //3. Apex => 상향식 트리에서의 root Node
    //4. parent => 현 Node 보다 위에 있는 Node
    //5. child => 현 Node 보다 아래에 있는 Node
    //이진 트리와 트리는 개별적인 개념이다. => 이진트리에서는 유향트리가 존재하지 않기 때문이다.
    //forest => 트리의 순서있는 집합
}

if('Binary Tree Drive'){
    //전위운행 root 방문  => 왼쪽 하위트리 운행  => 오른쪽 하위트리 운행
    //중위 운행 왼쪽 하위트리 운행 => root 방문 => 오른쪽 하위트리 운행
    //후위운행 왼쪽 하위트리 운행 => 오른쪽 하위 트리 운행  => root 방문
    //=> 즉 root를 언제 방문하느냐가 중요한 기준점

    //중위운행
    const Model = class{
        constructor(value, left, right){
            Object.assign(this, {value, left, right, visited: false});
        }
    };

    const dfs = root =>{
        const stack = [];
        let curr = root;

        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop().right;
    }

    //하다가 말음.. 나중에 추가
}

if('List'){
    //List: 0 또는 그 이상의 원자들 또는 리스트들의 유한한 순차열
}


