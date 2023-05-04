import React from 'react';

function Contacts(props) {
    return (
        <div>
            <h1 className='contacts_h'>Контакты</h1>

            <div className='contacts_main'>
            
                
                <div className='number_contact'>
                    <p>номер:</p>
                    <a href="tel:+99655004466">+996 555 00 44 66</a>
                    

                </div>

                <div className='number_contact2'>
                    <p>Поддержка:</p>
                    <a href="tel:+996555004466">Whatsapp номер: +996 555 00 44 33</a> 

                </div>


                <div className='number_contact3'>
                    <p>Email</p>
                    <a href="mailto:avebeauty@mail.kg">avebeauty@mail.kg</a>
                </div>
            </div>          
        </div>
    );
}

export default Contacts;