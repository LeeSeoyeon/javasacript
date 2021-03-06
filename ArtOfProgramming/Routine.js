if("SubRotine"){
    //Sub Routine
    //반복되는 Task를 메모리에 저장하는 것을 Sub Routine이라한다.
    //프로그램 실행 중, 제어권 전송을 Subrouine Linkage라고 한다.
    //시간을 절약하기보다는 메모리를 줄이는게 장점이다.
    //또한 프로그램을 논리적은 분할구조로 구성하여 디버깅도 쉬워진다.

    //서브루틴으로 제어권을 넘기는 코드를 Calling Sequence라고 부르며, Parmeter Passing 및 return Pointer을 저장하게 된다.

    function Main(){
        Subroutine() //Calling Sequence
    }

    function Subroutine(){
        console.log("Subrouinte");
    }

    //E. W. Dijkstra의 STructured Programming에서
    //1단계 프로그램의 전체적인 스케치를 그려가며 프로그램의 행동을 나열하면서 서브루틴을 정의한다. (스케치 과정이다.)
    //2단계 정의된 서브루틴을 구현를 하고, 서브루틴이 정의 되기전 까지 실제 호출부를 작성하지 않는다.
    //3단계 각 서브루틴을 호출하는 모든 지점들을 비교해 연구하며, 외부루틴이 그 서브루틴을 사용하기 전이나 후에 항상 수행하는 일들을 서브루틴 자체에 포함시켜
    // 일반화할 여지를 발견할수 있다. 또한 여러 서브루틴을 하라노 호출하거나 한번 호출되는 서브루틴을 발견하여 없앨수 있다. => 이지점에서 모든것을 갈아 엎고 단계1부터 다시 시작할수도있다.
    // 4단계 프로그램이 수행하는 순서로 프로그램을 연구하여 최종적으로 다듬는다.
}


if("Coroutine"){
    //이런 상황을 생각해보자.
    //AW1 수행 -> A1지점에서 B호출 -> BW1 수행 > B1지점에서 A1지점으로 돌아감 -> AW2 수행  -> A2지점에서 B1지점으로 돌아감
    //-> BW2 수행  -> B2지점에서 A2지점으로 돌아감 -> AW3 수행

    function A(){
        //AW1
        //A1지점
        //AW2
        //A2지점
        //AW3
    }

    function B(){
        //BW1
        //B1지점
        //BW2
        //B2지점
    }

    //이렇게 말도 안되는 수행을 어셈블리어에서 Jump로 수행할 수 있다. 이것은 Subroutine으로 설명하기 부족하다.
    //서브루틴은 자기의 작업을 수행완료 후, 돌아갈 지점으로 돌아가기 때문이다. 그래서 이런 것들을 Coroutine이라한다.

    //다음과 같은 것을 구현해보자.
    //
    //1번째 숫자N은 다음 문자C를 N번 출력하고
    //2번째 숫자 N은 다음 문자를 출력하지 않고,
    //3번째 숫자는 다음문자를 N-1번 출력하고
    //4번째 숫자는 다음 문자를 N+1번 출력한다고 하자.
    //=> 한걔의 루틴으로 묶을수 있지만, 4개의 알고리즘으로 동작한다고 할 때를 가정하기 위해서이다. 
    
    //coroutine이 자바스크립트에서 구현되었어있다. generator
    //그런데 이를 어떻게 활용하고 서브루틴에 비해 어떤 이점이 있는지는 와닫지 않아서 설명을 못하겠다.
    //이점 다중패스 알고리즘을 단일 패스 알고리즘으로 구현가능
    //심리적 차이: 다중패스 알고리즘은 단일 패스 알고리즘보다 쉽게 작성가능한데, 코루틴을 이용하며 다중패스 알고리즘
    //을 단일패스 알고리즘처럼 보이게 바꿀수있다.
    //시간 차이: 속도면에서는 단일패스 알고리즘이 더 빠르다.
    //공간차이: 단일패스 알고리즘은 프로그램이 한 메모리에 올라가잇어야하지만, 단일패스프로그램은 그 당시의 프로그램만
    //메모리에 적재되어잇으면 된다.
    //Lazy excution이 가능함

}