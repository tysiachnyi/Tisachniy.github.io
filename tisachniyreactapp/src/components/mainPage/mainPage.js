import React from 'react';
import MainPageItems from '../mainPage-item'

const MainPage = ({userInfo, onDeleted}) => {
    const elements = userInfo.map((item) => {
        return(
            <tbody key={item.id} id="tableBody">
            <MainPageItems label={item.label}
             id={item.id} 
             score={item.score} 
             onDeleted={() => onDeleted(item.id)}/>
            </tbody>
        )
    })
    return(
        <div className="container">
            
        <table className="table table__main">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th></th>
                </tr>
            </thead>
            {elements}
         
         
        </table>
        
        </div>
    
    )
}

export default MainPage