import React , {useContext} from 'react';
import { MyContext } from '../../context/DataInfo';


function IconInfo() {
      const { myData, setMyData } = useContext(MyContext);

  return (
    <ul className='flex items-center gap-2.5 *:text-white *:text-lg'>
      {myData[1].map((icon, index) => (
        <li key={index}>
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            {icon.component}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default IconInfo