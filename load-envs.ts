import dotenv from 'dotenv';

export interface Envs {
  twilioAccountSid: string,
  twilioAuthToken: string
}

const loadEnvs = (): Envs => {
  const result = dotenv.config()
 
  if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed);

  return {
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN
  };
};

export default loadEnvs;
