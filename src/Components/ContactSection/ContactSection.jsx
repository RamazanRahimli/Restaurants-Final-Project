import React from 'react';
import map from 'react';
import style from './ContactSection.module.scss'; 

const ContactSection = () => {
    return (
        <section className={style.contact} id="contact">
            <h1 className={style.heading}>Contact <span>Us</span></h1>
            <div className={style.row}>
                <iframe className={style.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3676239785063!2d49.8485665!3d40.3785442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgTmVmdCB2yZkgU8mZbmF5ZSBVbml2ZXJzaXRldGk!5e0!3m2!1str!2s!4v1671134017021!5m2!1str!2s"
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <form>
                    <h3>GET IN TOUCH</h3>
                    <div className={style.inputBox}>
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={style.inputBox}>
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Mail" />
                    </div>
                    <div className={style.inputBox}>
                        <i className="fas fa-phone"></i>
                        <input type="number" placeholder="Number" />
                    </div>
                    <input type="submit" className={style.btn} value="contact now" />
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
