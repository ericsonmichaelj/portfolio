import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class CoreLayout extends React.Component {

  _renderNav = () =>
    (
      <nav className='navbar navbar-default navbar-custom navbar-fixed-top'>
        <div className='container-fluid'>
          {/* Brand and toggle get grouped for better mobile display*/}
          <div className='navbar-header page-scroll'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span>
              Menu <i className='fa fa-bars' />
            </button>
            <a className='navbar-brand' href='/Resume.pdf' download>Download Resume</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='about.html'>Projects</a>
              </li>
              <li>
                <a href='post.html'>Blog</a>
              </li>           
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
          </div>
          {/* navbar-collapse */}
        </div>
        {/* .container */}
      </nav>
    )
  _renderHeader = () =>
    (
      <header className='intro-header' style={{ backgroundImage: 'url(\'img/home-bg.jpg\')' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
              <div className='site-heading'>
                <h1>Michael Ericson</h1>
                <hr className='small' />
                <span className='subheading'>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </header>
  )

  _renderFooterIcon = (url, icon) =>
    (
      <li>
        <a href={url}>
          <span className='fa-stack fa-lg'>
            <i className='fa fa-circle fa-stack-2x' />
            <i className={`fa ${icon} fa-stack-1x fa-inverse`} />
          </span>
        </a>
      </li>
  )
  _renderFooter = () => (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            <ul className='list-inline text-center'>
              {this._renderFooterIcon('https://github.com/ericsonmichaelj', 'fa-github')}
              {this._renderFooterIcon('http://stackoverflow.com/users/5105023/michael-ericson?tab=profile', 'fa-stack-overflow')}
              {this._renderFooterIcon('https://www.linkedin.com/in/ericsonmichaelj', 'fa-linkedin-square')}
            </ul>
            <p className='copyright text-muted'>Copyright &copy; Michael Ericson 2017</p>
          </div>
        </div>
      </div>
    </footer>
  )
  render() {
    return (
      <div>
        {this._renderNav()}
        {this._renderHeader()}
        { this.props.children }
        {this._renderFooter() }
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
