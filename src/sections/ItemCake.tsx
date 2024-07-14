import { Cake } from "../models/cake.model"

type Props = Cake & {
    handleChangePerson: (data: Cake) => void;

};

const ItemCake = ({title, description, handleChangePerson}: Props) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <button onClick={() => handleChangePerson({title: 'Vipro', description: 'Hot boy'})}>Click</button>
        </div>
    )
};

export default ItemCake;
