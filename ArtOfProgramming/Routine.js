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
    //A2B5E3426FG0ZYW3210PQ89R
    //숫자N이 나오면 다음에 나온 문자열이 숫자든 문자든 상관없이 N+1번 반복하여 출력 후, 다음으로 넘어간다.
    //그런데 1번째 숫자N은 다음 문자C를 N번 출력하고
    //2번째 숫자 N은 다음 문자를 출력하지 않고,
    //3번째 숫자는 다음문자를 N-1번 출력하고
    //4번째 숫자는 다음 문자를 N+1번 출력한다고 하자.
    //=> 한걔의 루틴으로 묶을수 있지만, 4개의 알고리즘으로 동작한다고 할 때를 가정하기 위해서이다. 
    
    //위 문제를 Subroutine으로 구현해보자.
    if('Subroutine'){
        function main(){ //tokennizer
            const str = '1A2B3C4D.';
            let cursor = 0;
            do{
                let char = str[cursor++], output = "";
                if(char === '.') break; //.일경우는 프로그램을 종료

                if(Number.isInteger(char)){
                    output = subroutine1(char, str[cursor++]);
                }
                else
                    output = char;
                
                subroutine2(output);

            }while(cursor < str.length)
        }

        function subroutine1(num, value){ //문자열을 복사
            let result = "";
            for(let i=0; i<num; i++) result += value;
            return result;
        }

        function subroutine1(num, value){ //문자열을 복사
            return "";
        }

        function subroutine2(str){  //문자열 출력
            console.log(str);
        }
    }else if('corutine'){
        function subroutine1(num, value){ //문자열을 복사
            let result = "";
            for(let i=0; i<num; i++) result += value;
            return result;
        }

        function* coroutine(){
            const str = '1A2B3C4D.';
            let cursor = 0;
            do{
                let char = str[cursor++];
                if(char === '.') break;

                if(Number.isInteger(char)){
                    output = subroutine1(char, str[cursor++]);
                }
                else
                    output = char;
                
                yield output;

            }while(cursor < str.length);
        }

        function
    }
}