import { useEffect } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

export function TransactionTable(){

    useEffect(() => {
        api.get('transactions')
        .then(res => console.log(res.data))
    }, [])

    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$2.100,00</td>
                        <td>Casa</td>
                        <td>05/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}