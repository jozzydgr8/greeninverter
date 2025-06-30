import demoImage from './assets/greeninverterlogo.jpg'
import {CheckOutlined} from '@ant-design/icons'
export const service = [
    {
        title:'Solar system',
        service:['installations', 'maintenance', 'supply'],
        image:demoImage
    },
    {
        title:"Electrical Installations",
        service:['Domestic installations', 'industrial installations', 'maintenance and supply'],
        image:demoImage
    },
    {
        title:"Fencing Protection",
        service:['Electric Fence installations', 'maintenance'],
        image:demoImage
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