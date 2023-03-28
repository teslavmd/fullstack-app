import { Comentario } from "./comentario.model";

export class Box {
    //id: string;
    id : number
    public commentsModelList : Comentario[];

    constructor(
       public titulo: string,
       public descripcion: string,
       public foto: string,
       public fecha: string | null,
        
    )
    {

    }


}