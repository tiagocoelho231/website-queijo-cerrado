import React, { Component } from 'react';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                'http://comidadaquinta.pt/admin/imgSiteAdmin/imagensNoticias/pop_34z7ij926.jpg',
                'https://image.isu.pub/161128044542-37b9c4dad0ac80dc9994ebd033e2380b/jpg/page_1.jpg',
                'https://http2.mlstatic.com/queijo-canastra-de-carmo-do-parnaiba-D_NQ_NP_659687-MLB26455869911_112017-F.jpg',
                'https://portaldoqueijo.com.br/site/wp-content/uploads/2019/03/Queijo-canastra.-Fonte-Armazem-S%C3%A3o-Roque-881x587-881x587.jpg',
                'http://www.curtamais.com.br/uploads/conteudos/bba351cd0a2501b9f5c72f7d65c361e4.JPG',
                'https://www.segs.com.br/media/k2/items/cache/a7660274c813fd7f6a3aab01782c9eaf_XL.jpg'
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    prevSlide = () => {

    }

    nextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }))
    }

    slideWidth() {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper" style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                    {this.state.images.map((image, i) => (
                        <Slide key={i} image={image} />
                    ))}
                </div>

                <LeftArrow
                    prevSlide={this.prevSlide}
                />
                <RightArrow
                    nextSlide={this.nextSlide}
                />
            </div>
        )
    }
}