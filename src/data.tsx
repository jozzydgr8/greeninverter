import demoImage from './assets/greeninverterlogo.jpg'
import {CheckOutlined} from '@ant-design/icons'
import imageone from './assets/mrgreen.jpg'
import imagetwo from './assets/housewithpanels.jpg';
import imagethree from './assets/invertersimage.jpg';
import electricfence from './assets/electricfence.jpg';
export const service = [
    {
        title:'Solar system',
        service:['installations', 'maintenance', 'supply'],
        image:imagethree
    },
    {
        title:"Electrical Installations",
        service:['Domestic installations', 'industrial installations', 'maintenance and supply'],
        image:imageone
    },
    {
        title:"Fencing Protection",
        service:['Electric Fence installations', 'maintenance'],
        image:electricfence
    }
]

export const reason = [
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:"100%",
        desc:'Product Warranty'
    },
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:'Uncompromising',
        desc:'guarantee on Products choice'
    },
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:"complete",
        desc:'Customers satisfaction'
    },
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:"Absolutely",
        desc:'reliable, Trusted and Affordable'
    },
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:"Trusted",
        desc:"Customer relationships"
    }
]

export const backgroundimages = [
//    {
//     background:imageone
//    },
    // {
    //     background:imagetwo
    // },
    {
        background:imagethree
    }
]