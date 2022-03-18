import { cidrToMask } from './services/cidrtomask';
import { maskToCidr } from '../services/masktocidr';
import { ipv4Validation } from '../serives/ipv4validation';
import { health } from '../services/health';

export const init = (app) => {
    app.get('/cidr-to-mask', cidrToMask);
    app.get('/mask-to-cidr', maskToCidr);
    app.get('/ip-validation', ipv4Validation);
    app.get('/_health', health);


  };
