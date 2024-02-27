export class Products{
    id?: number;
    name?: string;
    categoryId?: number;
    des?: string;
    price?: number;

    constructor(id:number,name:string,categoryId:number,des:string,price:number) {
        if (id !== null) this.id =id ;
        if (id !== null) this.name =name ;
        if (id !== null) this.categoryId =categoryId ;
        if (id !== null) this.des =des ;
        if (id !== null) this.price =price ;
    }
}