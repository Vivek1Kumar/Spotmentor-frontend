import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class SidePanel extends Component {

  render() {
    return (
      <Fragment>
{/* ========================= Side Navbar ================================ */}
          <div id="sidebar" role="navigation">
              <h3><Link to="/">School: XYZ</Link></h3>
              <ul className="nav flex-column sticky-top">
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class I</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class II</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class III</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class IV</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class V</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/class">Class VI</Link>
                  </li>
              </ul>
          </div>
      </Fragment>
    )
  }
}
