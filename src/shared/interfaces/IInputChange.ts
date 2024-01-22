
export interface IInputChange {
    change:
        ((e: any)=>{ payload: string | number; type: "calc/inputUniqueHandle"; }) |
        ((e: any)=>{ payload: string | number; type: "calc/inputXHandle"; }) |
        ((e: any)=>{ payload: string | number; type: "calc/inputYHandle"; })
}