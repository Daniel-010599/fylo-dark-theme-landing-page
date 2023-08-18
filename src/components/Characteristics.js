import IconSecurity from '../images/icon-security.svg';
import IconCollaboration from '../images/icon-collaboration.svg';
import IconAnyFile from '../images/icon-any-file.svg';
import IconAccessAnywhere from '../images/icon-access-anywhere.svg';
import Characteristic from './Characteristic';

import '../styles/Characteristics.css';

const Characteristics = () =>{

    const descriptionChracteristic = [
        {
            id:'d0',
            icon:IconAccessAnywhere,
            name:'Access your files, anywhere',
            description:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            id:'d1',
            icon:IconSecurity,
            name:'Security you can trust',
            description:'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        },
        {
            id:'d2',
            icon:IconCollaboration,
            name:'Real-time collaboration',
            description:'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        },
        {
            id:'d3',
            icon:IconAnyFile,
            name:'Store any type of file',
            description:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
    ];

    return(
        <div className='characteristics'>
            <div className='grid'>
                {descriptionChracteristic.map((characteristic)=><Characteristic key={characteristic.id} characteristic={characteristic}/>)}
            </div>
        </div>
    )
}

export default Characteristics;