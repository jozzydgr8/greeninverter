
import {CheckOutlined} from '@ant-design/icons'
import mrgreen from './assets/mrgreen.png'
import imagetwo from './assets/housewithpanels.png';
import invertersimage from './assets/invertersimage.png';
import electricfence from './assets/electricfence.jpg';
import electricalImage from './assets/electricalwiring.png'
export const service = [
    {
        title:'Inverter Solar system',
        service:['installations', 'maintenance', 'supply'],
        image:invertersimage
    },
    {
        title:"Electrical Installations",
        service:['Domestic installations', 'industrial installations', 'CCTV installations','maintenance and supply'],
        image:electricalImage
    },
    {
        title:"Electric Fence Protection",
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
    },
    {
        icon:<CheckOutlined className='chooseIcons'/>,
        title:'Uncompromising',
        desc:'guarantee on Products choice'
    },
]

export const backgroundimages = [
   {
    background:mrgreen
   },
    {
        background:imagetwo
    },
    {
        background:invertersimage
    }
]