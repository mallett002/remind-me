import twilio from 'twilio';
import loadEnvs, {Envs} from './load-envs';

const {twilioAccountSid, twilioAuthToken}: Envs = loadEnvs();

console.log('app started...');


// const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

// twilioClient.messages.create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+15558675310'
//    }).then(message => console.log(message.sid));

