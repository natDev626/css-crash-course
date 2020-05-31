import React from 'react';

const Badge = props => {
   
  const renderIcon = iconNav => {
    let HTMLtags = '';
    switch(iconNav.label) {
      case 'notice': HTMLtags = 
        <a href="/">
          <i className="fas fa-globe-africa"></i>
          <span className="badge-nav-num">{'4'}</span>
        </a>
        break     
      case 'bookmark': HTMLtags =
        <a href="/">
          <i className="far fa-bookmark"></i>
          <span className="badge-nav">{' '}</span>
        </a>
        break
      default: HTMLtags = ''
    }
    return HTMLtags
  }

  return (
    <li className="icon-nav dropdown-nav">
      {renderIcon(props.icon)}
      <div className="nav-menu">
        {props.navList.length > 0 && (
          <ul>
            {props.navList.map((nav, index) => {
              if (nav.label === '-') {
              return <li key={index} className="menu-split">{''}</li>
              } else {
                return <li key={index}><a href={nav.link}>{nav.label}</a></li>
              }              
            })}
          </ul>
        )}
        

        {/* <ul>
          <li><a href="/">Hello</a></li>
          <li><a href="/">Web Development</a></li>
          <li><a href="/">Machine Learning</a></li>
          <li className="menu-split"><hr size="1" /></li>
          <li><a href="/">Exit</a></li>
        </ul> */}
      </div>
    </li>
  );
};

export default Badge;