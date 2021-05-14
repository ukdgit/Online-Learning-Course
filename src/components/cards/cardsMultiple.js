import React from 'react'
import CardUI from './cardUI';

const CardsMultiple = ({ filteredCards }) => {

    return (
        <>{console.log("cardsMultiple", filteredCards)}
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {filteredCards.map((element) => {
                        return (
                            <div className='col-md-3'>
                                <CardUI imgsrc={(element.imgsrc)} title={element.title} />
                            </div>

                        )

                    })}
                    {/* <div>
                        <CardUI imgsrc={img1} title="DataScience" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img2} title="Design" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img3} title="Finance" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img4} title="Operation" />
                    </div> */}
                </div>
            </div>




            {/* <div className='container-fluid-2 d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img4} title="Operation" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img2} title="Design" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img5} title="Software Development" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img1} title="DataScience" />
                    </div>
                </div>
            </div>

            <div className='container-fluid-2 d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img2} title="Design" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img4} title="Operation" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img1} title="Data Science" />
                    </div>
                    <div className='col-md-3'>
                        <CardUI imgsrc={img3} title="Finance" />
                    </div>
                </div>
            </div> */}

        </>

    )

}

export default CardsMultiple;