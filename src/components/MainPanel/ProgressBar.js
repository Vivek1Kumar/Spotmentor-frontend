import React, { Component, Fragment } from 'react'

class ProgressBar extends Component {

    render() {
// ===================== Dyanmic Css =======================
        const style = {
            progress: {
                width: this.props.width + '%',
                height: "2px",
                backgroundColor: this.props.color,
                padding:"5px",
                borderRadius:"20px"
            },
            myProgress: {
                width: "90%",
                backgroundColor: "rgb(228, 227, 227)",
                borderRadius: "20px",
                height: "10px",
            }
        }
        return(
            <Fragment>
{/*=========================  Progress Bar =================================== */}
                <div className="mt-2" style={style.myProgress}>
                        <div style={style.progress}></div>
                    </div>            
                <label className='text-info ml-3' style={{minWidth: "60px", textAlign: "right"}}>{this.props.width}%</label>               
            </Fragment>
        )
    }
}
export default ProgressBar