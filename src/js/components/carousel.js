//轮播图组件
import React from 'react'
import '../../css/carousel.scss'

export default class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           left: '-600px',
           index: 1
        }
    };
    componentDidMount(){

    };
    //左右按钮点击事件
    animate(offset,e){
        //点击按钮图片偏移
        var curleft = parseInt(this.state.left);
        var curindex = this.state.index;

        if (curleft < -3000){
            curleft = -600;
        }else if(curleft > -600){
            curleft = -3000;
        }
        //设置图片下边小圆点
        offset > 0 ? curindex-- : curindex++;
        if (curindex < 1){
            curindex = 5;
        }else if (curindex > 5){
            curindex = 1;
        }
        this.setState({
            left: curleft + offset + 'px',
            index: curindex
        })
    };
    //底部按钮点击事件
    buttonClick(index,e){
        this.setState({
            left: -600*index + 'px',
            index: index
        })
    };
    render() {
        return (
            <div className="container" ref="container">
                <div className="list" style={{left: this.state.left}} ref="list">
                    <img src={require('../../image/5.jpg')} alt={5} />
                    <img src={require('../../image/1.jpg')} alt={1} />
                    <img src={require('../../image/2.jpg')} alt={2} />
                    <img src={require('../../image/3.jpg')} alt={4} />
                    <img src={require('../../image/4.jpg')} alt={5} />
                    <img src={require('../../image/5.jpg')} alt={5} />
                    <img src={require('../../image/1.jpg')} alt={6} />
                </div>
                <div className="buttons" ref="buttons">
                    <span className={this.state.index == 1? "on" : ""} onClick={this.buttonClick.bind(this,1)}/>
                    <span className={this.state.index == 2? "on" : ""} onClick={this.buttonClick.bind(this,2)}/>
                    <span className={this.state.index == 3? "on" : ""} onClick={this.buttonClick.bind(this,3)}/>
                    <span className={this.state.index == 4? "on" : ""} onClick={this.buttonClick.bind(this,4)}/>
                    <span className={this.state.index == 5? "on" : ""} onClick={this.buttonClick.bind(this,5)}/>
                </div>
                <a ref="prev" href="javascript:;" className="arrow prev" onClick={this.animate.bind(this,600)}> &lt; </a>
                <a ref="next" href="javascript:;" className="arrow next" onClick={this.animate.bind(this,-600)}> &gt; </a>
            </div>
        )
    }
}