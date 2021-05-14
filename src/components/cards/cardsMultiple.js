import React from 'react'
import CardUI from './cardUI';

const CardsMultiple = ({ filteredCards }) => {
    return (
        <>{console.log("cardsMultiple", filteredCards)}
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {filteredCards.map((element) => {
                        return (
                            <div className='col-md-3 w-auto'>
                                <CardUI imgsrc={(element.imgsrc)} title={element.title} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CardsMultiple;