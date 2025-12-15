import axios from 'axios';

// Mailchimp API Configuration
// Replace with your actual Mailchimp API key and list ID
const MAILCHIMP_API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY || 'YOUR_API_KEY';
const MAILCHIMP_LIST_ID = process.env.REACT_APP_MAILCHIMP_LIST_ID || 'YOUR_LIST_ID';
const MAILCHIMP_SERVER = process.env.REACT_APP_MAILCHIMP_SERVER || 'us1'; // e.g., us1, us2, etc.

const MAILCHIMP_API_URL = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

/**
 * Subscribe user to Mailchimp list
 * @param {string} email - User email
 * @param {string} firstName - User first name
 * @param {string} lastName - User last name
 * @param {string} status - Subscription status (subscribed, unsubscribed, etc.)
 * @param {object} tags - Array of tags to add to subscriber
 */
export const subscribeToMailchimp = async (email, firstName = '', lastName = '', status = 'subscribed', tags = []) => {
  try {
    const response = await axios.post(
      MAILCHIMP_API_URL,
      {
        email_address: email,
        status: status,
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        tags: tags,
      },
      {
        headers: {
          'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || { message: error.message } 
    };
  }
};

/**
 * Add tags to existing subscriber
 * @param {string} email - User email
 * @param {array} tags - Array of tags to add
 */
export const addTagsToSubscriber = async (email, tags = []) => {
  try {
    const subscriberHash = Buffer.from(email.toLowerCase()).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const response = await axios.post(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}/tags`,
      {
        tags: tags.map(tag => ({ name: tag, status: 'active' })),
      },
      {
        headers: {
          'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Mailchimp tag error:', error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || { message: error.message } 
    };
  }
};

/**
 * Track user behavior (e.g., viewed squeeze page, viewed sales page, purchased)
 * @param {string} email - User email
 * @param {string} event - Event name (e.g., 'viewed-squeeze-page', 'viewed-sales-page', 'purchased')
 */
export const trackEvent = async (email, event) => {
  try {
    const subscriberHash = Buffer.from(email.toLowerCase()).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const response = await axios.post(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}/events`,
      {
        name: event,
        properties: {
          time: new Date().toISOString(),
        },
      },
      {
        headers: {
          'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Mailchimp event tracking error:', error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || { message: error.message } 
    };
  }
};

