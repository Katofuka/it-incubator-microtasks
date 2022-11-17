
type CarsModel = {
    manufacturer: string,
    model: string
}

type CarsType = {
    cars: CarsModel[]
}

export const Cars = (props: CarsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((value, index) => {
                return(
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{value.manufacturer}</td>
                        <td>{value.model}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )

}