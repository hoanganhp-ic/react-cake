export type Cake = {
    ID?: number;
    name?: string;
    description?: string;
    price?: number;
    image_url?: string;
}

export enum FieldCake {
    Name = 'name',
    Description = 'description',
    Price = 'price',
    Image = 'image'
}

export type CreateCake = Cake & {
    image?: File;
}
