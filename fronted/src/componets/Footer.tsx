
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__info'>
            <p>Powered by <a href="https://neoslab.dev" target="_blank" rel="noopener noreferrer">Neos Lab</a> | 2025</p>
        </div>
        <div className='footer__social'>
            <a className="link" title="Telegram" href="https://t.me/neosoir" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
            <a className="link" title="WhatsApp" href="https://wa.me/5534044564" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
    </footer>
  );
}

export default Footer;