import React from 'react';

const Landing = () => {
  return (
    <React.Fragment>
      <section className='section section-icons center'>
        <div className='container'>
          <div className='row scrollspy' id='about'>
            <div className='col s12 m4'>
              <div className='card-panel'>
                <i className='fa fa-user fa-3x deep-purple-text text-darken-2' />
                <h5 className='grey-text text-darken-4'>Free Account</h5>
                <p>
                  Create an account and start using iFeedback now to boost your
                  product sales.
                </p>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card-panel'>
                <i className='fa fa-database fa-3x deep-purple-text text-darken-2' />
                <h5 className='grey-text text-darken-4'>NoSQL Databases</h5>
                <p>
                  We use MongoDB for large volumes of structured and
                  non-structured data.
                </p>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card-panel'>
                <i className='fa fa-envelope fa-3x deep-purple-text text-darken-2' />
                <h5 className='grey-text text-darken-4'>Fast Conections</h5>
                <p>
                  We use SendGrid API trusted by developers and marketers for
                  time-savings and delivery expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-developers white-text'>
        <div className='primary-overlay valign-wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col s12 center'>
                <h4>For Managers, By Developers</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-language grey lighten-4'>
        <div className='container'>
          <div className='row'>
            <h5 className='center'>
              Over{' '}
              <span className='deep-purple-text text-darken-1'>
                15,000 customers
              </span>{' '}
              trust iFeedback to send more than 45 million emails every month.
            </h5>
            <br />
            <br />
            <div className='row'>
              <div className='col s3 l2'>
                <img
                  src='/images/square.png'
                  className='responsive-img'
                  alt=''
                />
              </div>
              <div className='col s3 l2'>
                <img
                  src='/images/wallmart.png'
                  className='responsive-img'
                  alt=''
                />
              </div>
              <div className='col s3 l2'>
                <img
                  src='/images/shadow.png'
                  className='responsive-img'
                  alt=''
                />
              </div>

              <div className='col s3 l2'>
                <img
                  src='/images/jpmorgan.png'
                  className='responsive-img'
                  alt=''
                />
              </div>
              <div className='col l2 hide-on-med-and-down'>
                <img
                  src='/images/lasso.png'
                  className='responsive-img'
                  alt=''
                />
              </div>
              <div className='col l2 hide-on-med-and-down'>
                <img
                  src='/images/bosch.png'
                  className='responsive-img'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section location white-text'>
        <div className='primary-overlay '>
          <div className='container'>
            <div className='row scrollspy' id='contact'>
              <div className='col s6'>
                <h5>Location</h5>
                <ul>
                  <li>iFeedback, INC</li>
                  <li> 4. Privet Drive, Little Whinging</li>
                  <li> Surrey</li>
                </ul>
              </div>
              <div className='col s4 offset-s2'>
                <h5 className='white-text'>Links</h5>
                <ul>
                  <li>
                    <a
                      href='https://portfolio.vishalrathore.info'
                      target='_blank'
                      className='white-text'
                      rel='noopener noreferrer'>
                      <i className='fa fa-address-card' /> Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://github.com/vishalcoderathore'
                      target='_blank'
                      className='white-text'
                      rel='noopener noreferrer'>
                      <i className='fa fa-github-square' /> Github
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://facebook.com/Vishal.sam17491'
                      target='_blank'
                      className='white-text'
                      rel='noopener noreferrer'>
                      <i className='fa fa-facebook-square' /> Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Landing;
