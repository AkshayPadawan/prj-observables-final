import { Detail } from '../../shared/Detail.model';

export class Item{
    public uniqueKey : number;
    public name: string;
    public desc: string;
    public image : string;
    public price : string;
    public details: Detail;

    constructor(uniqueKey: number,name: string, desc: string, image: string, price: string, details : Detail){
        this.uniqueKey = uniqueKey;
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.price = price;
        this.details = details;
    }
}