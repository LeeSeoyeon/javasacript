class Register extends Int8Array{
    constructor(type=""){
        let len = 0;
        switch(type.toUpperCase()){
            case 'A': len=6; break;
            case 'X': len=6; break;
            case 'I': len=3; break;
            case 'J': len=3; break;
            default:  break;
        }
        if(len)
            super(len);
        else return null;
    }
}
const MIX = class {
    constructor(){
        this.rA = new Register('A');
        this.rx = new Register('X');
        this.rI1 = new Register('I');
        this.rI2 = new Register('I');
        this.rI3 = new Register('I');
        this.rI4 = new Register('I');
        this.rI5 = new Register('I');
        this.rI6 = new Register('I');
        this.rJ = new Register('J');
        this.memory = [];
        for(let i=0; i<4000; i++)
            this.memory.push(new Register());
    }

    command(cmm=""){
        //command ex: OP ADRESS,I(F)
        console.log(cmm);
        if(!cmm) return this;
     
        //tokennizer
        let cursor = 0;
        //op를 나누는 공백은 무조건 존재하다.
        let OP = cmm.substring(cursor, cursor = cmm.indexOf(' '));
        cursor++;

        let ADRESS, I;
        if(cmm.includes(',')){
            ADRESS = cmm.substring(cursor, cursor = cmm.indexOf(','));
            cursor++;
            I = cmm.substring(cursor, cursor = cmm.indexOf('('));
        }else{
            ADRESS = cmm.substring(cursor, cursor = cmm.indexOf('('));
            I = 0;
        }
        cursor++;

        let F = cmm.substring(cursor, cursor = cmm.indexOf(')')).split(':');
        
        return operation(OP, ADRESS, I, F);
    }

    operation(OP, ADRESS, I, F){
        if(OP.includes('LD'))
            return load(OP, ADRESS, I, F);
        else if(op.includes('ST'))
            return store(OP, ADRESS, I, F);
        
    }

    load(OP, ADRESS, I, F){
        let target = OP[2], negative = OP[3]? -1 : 1;
        let comment;
        switch(target){
            case 'A': for(let i=F[0]; i<=F[1]; i++) this.rA[i] = this.memory[ADRESS][i]; this.rA[0] *= negative; comment=this.rA;  break;
            case 'X': for(let i=F[0]; i<=F[1]; i++) this.rX[i] = this.memory[ADRESS][i]; this.rX[0] *= negative; comment=this.rX; break;
            case '1': this.rI1[1] = tihs.memory[4]; this.rI1[2] = tihs.memory[5]; this.rI1[0] *= negative; comment=ths.rI1; break;
            case '2': this.rI2[1] = tihs.memory[4]; this.rI2[2] = tihs.memory[5]; this.rI2[0] *= negative; comment=ths.rI2; break;
            case '3': this.rI3[1] = tihs.memory[4]; this.rI3[2] = tihs.memory[5]; this.rI3[0] *= negative; comment=ths.rI3; break;
            case '4': this.rI4[1] = tihs.memory[4]; this.rI4[2] = tihs.memory[5]; this.rI4[0] *= negative; comment=ths.rI4; break;
            case '5': this.rI5[1] = tihs.memory[4]; this.rI5[2] = tihs.memory[5]; this.rI5[0] *= negative; comment=ths.rI5; break;
            case '6': this.rI6[1] = tihs.memory[4]; this.rI6[2] = tihs.memory[5]; this.rI6[0] *= negative; comment=ths.rI6; break;
            default : comment = `'${OP}는 잘못된 명령'`; break;
        }

        console.log(comment);

        return this;
    }

    store(OP, ADRESS, I, F){
        let target = OP[2];
        let comment = this.memory[ADRESS];
        switch(target){
            case 'A': for(let i=F[0]; i<=F[1]; i++) this.memory[ADRESS][i] = this.rA[i]; break;
            case 'X': for(let i=F[0]; i<=F[1]; i++) this.memory[ADRESS][i] = this.rx; break;
            case '1': this.memory[ADRESS] = [...this.rI1]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case '2': this.memory[ADRESS] = [...this.rI2]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case '3': this.memory[ADRESS] = [...this.rI3]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case '4': this.memory[ADRESS] = [...this.rI4]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case '5': this.memory[ADRESS] = [...this.rI5]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case '6': this.memory[ADRESS] = [...this.rI6]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case 'J': this.memory[ADRESS] = [...this.rJ]; this.memory[ADRESS].splice(1,0,[0,0,0]); break;
            case 'Z': this.memory[ADRESS].splice(1,5, ...[0,0,0,0,0]); break;
            default : comment = `'${OP}는 잘못된 명령'`; break;
        }

        console.log(comment);

        return this;
    }
};