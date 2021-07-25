import React, {useState} from 'react'
import {Button} from "./Button";
import {TableView} from "./TableView";

const App = () => {

    const onClickButton = (text) => {
        console.log( text )
    }

    const persons = [
        {
            id: 1,
            fName: 'Mariya',
            lName: 'Nefedova',
            age: 25,
            prof: 'Web developer'
        },
        {
            id: 2,
            fName: 'Anton',
            lName: 'Abolnikov',
            age: 34,
            prof: 'DataBase developer'
        },
        {
            id: 3,
            fName: 'Maxim',
            lName: 'Voronin',
            age: 45,
            prof: 'TeamLead'
        }

    ]

    const carsInit = [
        {
            id: 1,
            manufactured: 'BMW',
            model: 'M3',
            price: 10000
        },
        {
            id: 2,
            manufactured: 'Mercedes',
            model: 'E-200',
            price: 12000
        },
        {
            id: 3,
            manufactured: 'BMW',
            model: '525i',
            price: 5000
        },
        {
            id: 4,
            manufactured: 'Ford',
            model: 'Mustang - 69',
            price: 120000
        },
        {
            id: 5,
            manufactured: 'KIA',
            model: 'Sportage',
            price: 18500
        }
    ]

    const [cars, setCars] = useState(carsInit)

    const removeCar = (id) => {
        // const _cars = [...cars]
        // const idx = _cars.findIndex(car => car.id === id)
        // if ( idx === -1 ) {return}
        // _cars.splice(idx, 1)
        // setCars( _cars )

        // return { ...state, cars: state.cars.filter(car => car.id !== id) }

        setCars( cars.filter(car => car.id !== id) )

    }


    return (

        <div className="container">
            <h1>Hello</h1>
            <Button
                id="button_1"
                className="btn btn-sm btn-primary my-2"
                title="Primary Button"
                clickButton={onClickButton}
                />
<br/>
            <Button
                id="button_2"
                className="btn btn-sm btn-success my-2"
                title="Success Button"
                clickButton={onClickButton}
            />

            <TableView
                header={['Id', 'First Name', 'Last Name', 'Age', "Occupation"]}
                className="table"
                dataSource={persons}
                deleteItem={()=>{}}
            />

            <TableView
                header={['Id', 'Manufactured', 'Model', 'Price']}
                className="table table-striped"
                dataSource={cars}
                deleteItem={(id)=> removeCar(id)}
            />

        </div>

    )
}

export default App