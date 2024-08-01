export type Cake = {
    ID?: number;
    name?: string;
    description?: string;
    price?: number;
}

export enum FieldCake {
    Name = 'name',
    Description = 'description',
    Price = 'price'
}
