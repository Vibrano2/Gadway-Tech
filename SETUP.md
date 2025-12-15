# Sales Funnel Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Mailchimp**
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example`
   - Get your Mailchimp API key from: https:Audience > Settings > Audience name and defaults
   - Update the `.env` file with your credentials

3. **Update Configuration**
   - Replace the webinar video URL in `src/pages/SqueezePage.js` (line 15)
   - Update WhatsApp number in `src/pages/DeliveryPage.js` (line 6)
   - Update email address in `src/pages/DeliveryPage.js` (line 58)

4. **Start Development Server**
   ```bash
   npm start
   ```

## 📋 Features Implemented

### ✅ Squeeze Page
- Webinar replay video integration
- Email capture form
- Mailchimp integration
- Social proof elements
- Mobile responsive design

### ✅ Sales Page
- Double presell format
- Countdown timer for urgency
- Three pricing tiers (Basic, Premium, VIP)
- Testimonials section
- Social proof
- Problem/solution framework
- Money-back guarantee

### ✅ Thank You Page
- Order confirmation
- Upsell products (3 complementary offers)
- Order summary
- Next steps guide

### ✅ Delivery Page
- Order tracking
- Course access instructions
- WhatsApp support integration
- FAQ section
- Multiple support channels

## 🎯 Sales Psychology Elements

- **Urgency**: Countdown timers on squeeze and sales pages
- **Scarcity**: Limited time offers, limited spots messaging
- **Social Proof**: Testimonials, recent purchases, enrollment numbers
- **Authority**: Professional design, structured curriculum
- **Reciprocity**: Free webinar, valuable content upfront
- **Commitment**: Email capture, engagement tracking

## 🔧 Customization

### Update Pricing
Edit `src/pages/SalesPage.js` - modify the `packages` object

### Update Testimonials
Edit `src/components/Testimonials.js` - modify the `testimonials` array

### Update Upsell Products
Edit `src/pages/ThankYouPage.js` - modify the `upsellProducts` array

### Payment Integration
Currently, the purchase flow redirects to the thank you page. To integrate a payment gateway:

1. **Paystack Integration** (Recommended for Nigeria):
   - Install: `npm install react-paystack`
   - Add Paystack public key to `.env`
   - Update `handlePurchase` function in `SalesPage.js`

2. **Flutterwave Integration**:
   - Install: `npm install flutterwave-react-v3`
   - Add Flutterwave public key to `.env`
   - Update `handlePurchase` function in `SalesPage.js`

## 📧 Email Sequences

The Mailchimp integration tracks:
- `viewed-squeeze-page` - When user views squeeze page
- `viewed-sales-page` - When user views sales page
- `purchase-intent` - When user clicks purchase button
- `purchased` - When user completes purchase

Set up automated email sequences in Mailchimp based on these events.

## 🎨 Design Features

- Modern gradient designs
- Mobile-first responsive layout
- Smooth animations and transitions
- Conversion-optimized layouts
- Nigerian market-focused content

## 📱 WhatsApp Integration

The delivery page includes WhatsApp support. Update the number in:
- `src/pages/DeliveryPage.js` (line 6)

Format: Country code + number (e.g., 2348123456789 for Nigeria)

## 🚀 Deployment

1. Build for production:
   ```bash
   npm run build
   ```

2. Deploy to:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Any static hosting service

3. Update environment variables in your hosting platform

## 📝 Notes

- Replace placeholder video URLs with your actual webinar video
- Update all contact information (email, WhatsApp)
- Configure Mailchimp tags and automation workflows
- Test the complete funnel flow before going live
- Set up proper payment gateway integration
- Add Google Analytics or Facebook Pixel for tracking

## 🆘 Support

For issues or questions, check the code comments or refer to the component documentation.

