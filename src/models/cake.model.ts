export type Cake = {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
}

export enum FieldCake {
    Name = 'name',
    Description = 'description',
    Price = 'price'
}
