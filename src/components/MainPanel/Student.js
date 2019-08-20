import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ProgressBar from './ProgressBar';
import { getContactus } from '../../actions/classRoomActions'
import ClassAverage from './ClassAverage'

class Student extends Component {
    // constructor(props){
    //     super(props)
    //         this.state ={
    //             fullClassAverage:0
    //         }        
    // }
    componentDidMount() {
//============ calling api ==============
         this.props.getContactus() 
    }
    render() {
        let totalStudentRecord = 0, fullClassAverage = 0, newAverage = 0
//=============== redux state using by props =============
        const { markAverage } = this.props

        var result = Object.keys(markAverage).map(function(key) {
                        return markAverage[key]
                    })

        var newResult = Object.keys(result).map(function(key) {
                            return markAverage[key]
                        })
//================== redux state =========================
        let abc = newResult.map((res, i) => {
                if(res !== undefined){
                    return(
                        <div key={i} className="col-sm-5">                                    
                            {res.students.map((stud, i) => ( 
                                totalStudentRecord =stud.name,                  
                                <div key={i} >
                                    <div key={i} className="card mt-4 pt-4 pl-4 pb-4 pr-4"> 
                                        {stud.marks.map((mark, i) => (
                                            fullClassAverage = 0,
                                            fullClassAverage = (fullClassAverage + mark.Maths + mark.English + mark.Science)/3,                                        
                                        <div key={i}>
                                            <div className="bt-4">
                                                <span className="text-primary">{stud.name}</span>
                                                <span className="pull-right text-info font-weight-bold">
                                                    {Math.round((mark.Maths + mark.English + mark.Science)/3)}%
                                                </span>
                                            </div>
                                            <div className="d-flex mt-4">
                                                <span style={{minWidth: "125px"}}>Math</span>
                                                <ProgressBar width={Math.round(mark.Maths)} color="blue" />
                                            </div>
                                            <div className="d-flex">
                                                <span style={{minWidth: "125px"}}>English</span>
                                                <ProgressBar width={Math.round(mark.English)} color="blue" />
                                            </div>
                                            <div className="d-flex">
                                                <span style={{minWidth: "125px"}}>Science</span>
                                                <ProgressBar width={Math.round(mark.Science)} color="blue" />
                                            </div>
                                        </div>
                                        ))}
                                       <div style={{display: "none"}}> {newAverage = (newAverage + fullClassAverage)}</div>
                                    </div>
                                </div>                                    
                            ))}                                    
                        </div>
                    )
                }
            })
        return(
            <Fragment>
{/* ======================== Student Average Component ======================= */}
                <ClassAverage 
                    totalStudent={totalStudentRecord}
                    fullClassAverages = {newAverage/6}
                 />
{/* ======================= Student Record Card ============================== */}
                <div className="row">
                    <div className="col-sm-1"></div>
                    {abc}
                    <div className="col-sm-1"></div>
                </div> 
            </Fragment>
        )
    }
}
Student.propTypes = {
// ============= validating function ===============
    getContactus: PropTypes.func.isRequired,
}
// ============= map State to props=================
const mapStateToProps = state => ({
    markAverage: state.markAverage
})
export default connect(mapStateToProps, {getContactus})(Student);