import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';


export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            galleryItems: [],
        };
    }
    getData (){
        const slideImages = [
            {url:"https://drive.google.com/uc?id=1Eajgby3TUG8UcL11h1KMMykbQLRTbXue"},
            {url:"https://drive.google.com/uc?id=1MKcjiSAuX8a-MDGL4_IOPB5u44Ydz_lL"},
            {url:"https://drive.google.com/uc?id=1oX1eggJJrG0IpDVX_kgyAY-4JRtzB0D6"},
            {url: "https://drive.google.com/uc?id=1yvYUwgDEGMACuobXKzrSM0HZO4K-Nekk"},
            {url: "https://drive.google.com/uc?id=1-E4wR7QaKHdVzTcv5gD569EmjAgUmCvQ"},
            {url: "https://drive.google.com/uc?id=18nYHPGgTa_1O1Z8YSS-M5HcMAEHhIoQj"},
            {url: "https://drive.google.com/uc?id=1g2XkI2_XxdBEVi-MDt1tNqsrnRaAeL-N"},
            ];
        const img = slideImages.map(m =>
            <img src={m.url} alt=""/>
        )
        this.setState({
            galleryItems: img
        })
    }
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <AliceCarousel
                    items={this.state.galleryItems}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                />
            </div>
        )
    }
}