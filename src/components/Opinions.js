import Profile1 from '../images/profile-1.jpg';
import Profile2 from '../images/profile-2.jpg';
import Profile3 from '../images/profile-3.jpg';
import IconQuotes from '../images/bg-quotes.png';

import '../styles/Opinions.css';

import Opinion from './Opinion';

const Opinions = () =>{

    const allOpinions = [
        {
            id:0,
            opinion:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            photo:Profile1,
            name:'Satish Patel',
            position:'Founder & CO, Huddle'
        },
        {
            id:1,
            opinion:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            photo:Profile2,
            name:'Bruce McKenzle',
            position:'Founder & CO, Huddle'
        },
        {
            id:2,
            opinion:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            photo:Profile3,
            name:'Iva Boyd',
            position:'Founder & CO, Huddle'
        }
    ]

    return(
        <div className='flex-opinions'>
            <div className='grid-opinions'>
                <img className="icon-quotes" src={IconQuotes} alt="icon-quotes"/>
                {allOpinions.map((opinion)=><Opinion key={opinion.id} opinion={opinion}/>)}
            </div>
        </div>
    )
}

export default Opinions;