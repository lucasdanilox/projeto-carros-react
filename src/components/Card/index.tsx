import './styles.css';
import carImg from '../../assets/car.png';
import Button from '../Button';

export default function Card() {

    return (
        <div className="ct-card">
            <img src={carImg} alt="Carro" />
            <h3>Audi Supra TT</h3>
            <p><i>O Audi TT e o Supra juntos, potência e elegância em uma única imagem.</i></p>
            <Button />
        </div>
    );
}