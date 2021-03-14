import React from 'react';


const Resume = ({firstName, lastName, address, phone, email, socialLinks}) => {
  return(
    <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {firstName}
            <span className="text-primary">{lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {address} · {phone} ·
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <p className="lead mb-5">
          Desenvolvedor Full Stack na Deway com as tecnologias 
          Node.Js, React e React Native e contribuo como 
          Frontend na Start-up ME2 Tecnologia.
          </p>
          <div className="social-icons">
            {socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
  );
}

export default Resume;