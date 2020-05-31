import React from 'react';

import 'assets/css/responsive.css';

const Responsive = () => {
  return (
    <div className="rpns-wrapper">
      <h1>Responsive Component</h1>
      <div className="grid-row">
        <div className="computer-3 mobile-1 ipad-2">
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut est fugiat ad distinctio maxime sit doloribus. Voluptas aliquam reprehenderit, facere repellat totam aliquid ab veniam consequatur dolor, ipsa modi doloribus.
          </div>
        </div>
        <div className="computer-3 mobile-1 ipad-2">
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut est fugiat ad distinctio maxime sit doloribus. Voluptas aliquam reprehenderit, facere repellat totam aliquid ab veniam consequatur dolor, ipsa modi doloribus.
          </div>
        </div>
        <div className="computer-3 mobile-1 ipad-2">
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut est fugiat ad distinctio maxime sit doloribus. Voluptas aliquam reprehenderit, facere repellat totam aliquid ab veniam consequatur dolor, ipsa modi doloribus.
          </div>
        </div>        
      </div>
      <div className="grid-row">
      <div className="computer-2 mobile-1">
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut est fugiat ad distinctio maxime sit doloribus. Voluptas aliquam reprehenderit, facere repellat totam aliquid ab veniam consequatur dolor, ipsa modi doloribus.
        </div>
      </div>   

      <div className="computer-2 mobile-1">
          <img className="img-responsive" src="https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg" alt="ML" />
        </div>
      </div>
    </div>
  );
};

export default Responsive;