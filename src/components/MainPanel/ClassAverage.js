import React, { Fragment, Component } from 'react'

class ClassAverage extends Component {
    constructor(props){
        super(props)
        this.state={
            hideAverage: "none",
            showAverage: "block"
        }
        this.showClassAverage = this.showClassAverage.bind(this)
        this.hideClassAverage = this.hideClassAverage.bind(this)
    }
    showClassAverage(){
        this.setState({
            hideAverage: "block",
            showAverage: "none"
        })
    }
    hideClassAverage() {
        this.setState({
            hideAverage: "none",
            showAverage: "block"
        })
    }
    render() {
// ================== Dynamic Css =======================
       const style={
            averageButton : {
                borderRadius: "20px",
                background: "white",
                border: 'none',
                color: "black",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                fontSize: "16px",
                marginRight: "40px",
                cursor: "pointer",
                marginTop: "-60px",
                display: this.state.showAverage
            },
            averageButtonHide: {
                borderRadius: "20px",
                background: "#063cb9",
                border: 'none',
                color: "#ffffff",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                fontSize: "16px",
                marginRight: "40px",
                cursor: "pointer",
                marginTop: "-60px",
                display: this.state.hideAverage
            },
            averageDetail:{
                width: "700px",
                height: "65px",
                background: "#ffffff",
                borderRadius: '5px',
                lineHeight: '65px',
                margin: '30px auto 50px',                
            },
            classAverage: {
                textAlign: "center", 
                display: this.state.hideAverage
            },
            hrLine: {
                background: "blue", 
                height: "5px", 
                width: "100%"
            }
        }
        return(
            <Fragment>
{/*======================= Class Avarage Component ================================= */}
                <div className="main-data">
                   <div className="title-section">
                        <h2>Class III</h2>
                        <p>{(this.props.totalStudent)}</p>
                        <div className="btn pull-right card" 
                            style={style.averageButton}
                            onClick={this.showClassAverage}
                        >Show Average</div>
                        <div className="btn pull-right card" 
                            style={style.averageButtonHide}
                            onClick={this.hideClassAverage}
                        >Hide Average</div>
                   </div>
                    <div className="text-center" 
                        style={style.classAverage}
                    >
                        <div className="text-center" style={style.averageDetail}>
                            <p>Class room average performance {this.props.fullClassAverages}%</p></div>
                    </div>
                    <hr style={style.hrLine}/>
                </div>
            </Fragment>
        )
    }
}
export default ClassAverage