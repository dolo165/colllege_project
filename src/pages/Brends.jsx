import React from 'react';
import babor from '../components/assets/babor.png';
import biolage from '../components/assets/biolage.png';
import bioderma from '../components/assets/bioderma.png';
import { Link } from 'react-router-dom';


function Brends(props) {
    return (
        <div className='brands_container'>
            <div className="brands_article">
                <Link to='/'><p>Главная</p> </Link>/<Link to='/brands'><span>Бренды</span> </Link>
            </div>

            <a href="https://babor.ru/">
                <div className='brands'> 
                    <div className="brands_img">
                        <img src={babor} alt="" width={450} />
                    </div>

                    <div className="brands_content">
                        <h1 className='brands_header'>Искусство филигранного ухода за кожей. Качество, сделанное в Германии.</h1> 
                        <p className='brands_about'> 
                            <strong>BABOR</strong> - ведущая международная компания по производству высокоэффективной косметики, <br />
                            который и по сей день остается семейным бизнесом. BABOR возглавляет третье поколение семьи владельцев. <br />
                            Вот уже более 60 лет BABOR воплощает принцип качества made in <br />
                            Германия - фундаментальные научные исследования и производство по-прежнему <br />
                            проводится только в головном офисе компании в Ахене. Каждое изделие BABOR – от идеи до готовой банки – является живым воплощением качества, безупречной точности и непревзойденной эффективности. <br />
                        </p>   
                    </div>
                </div>
            </a>

            <a href="https://matrix.ru/biolage">
                <div className='brands'>
                    <div className="brands_img">
                        <img src={biolage} alt="" width={450} />
                    </div>
                    <div className="brands_content">
                        <h1 className='brands_header'> НАС ОБЪЕДИНЯЕТ ЛЮБОВЬ К ВОЛОСАМ, ПЛАНЕТЕ И САМИМ СЕБЕ.</h1>
                        <p className='brands_about'>
                            <strong>Biolage</strong> - это профессиональный уход за волосами на основе натуральных ингредиентов <br />
                            и передовые научные технологии. В лабораториях <br />
                            L'Oreal, ученые Biolage, в поисках новых идей вернулись к <br />
                            истоки — в самой природе. В конце концов, что может быть больше <br />
                            прекраснее сочной орхидеи, прочнее бамбука и более
                            объемнее хлопка. Современные технологии позволили нам <br />
                            изучать и воссоздавать механизмы природы, о которых нужно заботиться.
                            здоровье ваших волос. <br />
                        </p>
                    </div>
                </div>
            </a>

            <a href="https://naos.ru/bioderma/">
                <div className='brands'>
                    <div className="brands_img">
                        <img src={bioderma} alt="" width={410} />
                    </div>
                    <div className="third_brands_content">
                        <h1 className='brands_header'>"Забота на первом месте."</h1>
                        <p className='brands_about'> 
                            <strong>BIODERMA</strong> - французская косметика для решения проблем и <br />
                            профилактика дерматологических проблем. BIODERMA - это бренд <br />
                            из NAOS, которая занимается биологией кожи более <br />
                            40 лет. Инновации и участие в важных мероприятиях в <br />
                            дерматология сделала бренд пионером в <br />
                            область дерматологической помощи. <br />
                            Здесь мы собрали все, что вам нужно для создания <br />
                            идеальный макияж: лучшая, на наш взгляд, косметика <br />
                            для макияжа и ухода, а также профессиональных аксессуаров и инструментов. <br />
                            Каждый день мы заботимся о том, чтобы наши клиенты получали заботливое обслуживание.
                            и по-настоящему достойная косметика.
                        </p>
                    </div>
                </div> 
            </a>   
        </div>
        
        
    );
}

export default Brends;