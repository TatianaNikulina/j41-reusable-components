import React from 'react'

export const TableView = ({header, className, dataSource, deleteItem}) => {

    const renderHeader = () => {
        return (
            <thead>
            <tr>
                { header.map(h => <th key={h}>{h}</th>) }
                <th>Actions</th>
            </tr>
            </thead>
        )
    }

    const renderDataLine = (item) => {
        const keys = Object.keys(item)
        return keys.map( k => (
            <td key={`${k}_${item.id}`}>{item[k]}</td>
        ))
    }

    const renderData = () => {
        if (!dataSource || !dataSource.length) {
            return (
                    <tr>
                        <td>No data for show</td>
                    </tr>
            )
        }
        return dataSource.map(item => (
            <tr key={item.id}>
                {renderDataLine(item)}
                <td><button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        deleteItem(item.id)
                    }}
                >X</button></td>
            </tr>
        ))
    }

    return (

        <table className={className}>
            {renderHeader()}
            <tbody>
            {renderData()}
            </tbody>
        </table>
    )
}