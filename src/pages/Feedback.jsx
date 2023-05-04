import React from 'react';
import woman1 from '../assets/woman1.png'
import woman2 from '../assets/woman2.png'
import star from '../assets/star.png'

function Feedback(props) {
    return (
        <div>
            <div className="feedback_container">
                <h1 className='feedback_h1'>Отзывы</h1>
                <div className="feedback_content">
                    
                    <div className="feedbacks">
                        <div className="left_content">
                            <div className="stars">
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                            </div>
                            <div className="feedback_message">
                                <p className='feedback_p'>Волшебное очищающее средство </p>
                                <p className='feedback_p2'>это потрясающе и удивительно! Он оставляет мое лицо <br />
                                 свежим, сияющим и глубоко чистым. Это волшебно! </p>
                            </div>
                            <div className="feedback_footer">
                                <p className='feedback_date'>18.02.2023</p>    
                                <p className='feedback_customer'>Дарья  проверенный покупатель</p> 
                            </div>                          
                        </div>  
                        <div className="right_content">
                            <img src={woman1} alt="" />
                        </div>                     

                    </div>
                    <div className="feedbacks">
                        <div className="left_content">
                            <div className="stars">
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                                <img src={star} alt="" width={20}/>
                            </div>
                            <div className="feedback_message">
                                <p className='feedback_p'>Ваша маска для лица  </p>
                                <p className='feedback_p2'>это потрясающе и удивительно! Он оставляет мое лицо <br />
                                 свежим, сияющим и глубоко чистым. Это волшебно! </p>
                            </div>
                            <div className="feedback_footer">
                                <p className='feedback_date'>19.02.2023</p>    
                                <p className='feedback_customer'>Наталья проверенный покупатель</p> 
                            </div>                          
                        </div>  
                        <div className="right_content">
                            <img src={woman2} alt=""  width='140%'/>
                        </div>
                    </div>
                     

                </div>
            </div>
        </div>
    );
}

export default Feedback;