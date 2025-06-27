# Email Setup Guide for Questionnaire Responses

The questionnaire is currently configured to send responses to your email using Formspree. Follow these steps to set up your own endpoint:

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and create a free account
3. Verify your email address

### Step 2: Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Enter form name: "Discovery Questionnaire"
3. Set the email to: `pragmatechcompliancepartners@gmail.com`
4. Copy the form endpoint URL (it will look like: `https://formspree.io/f/xxxxxxxx`)

### Step 3: Update the Code
1. Open `src/services/emailService.ts`
2. Find line with `const formspreeEndpoint = 'https://formspree.io/f/xdkowwgz';`
3. Replace the URL with your new endpoint
4. Save the file

### Step 4: Deploy
1. Commit and push your changes to GitHub
2. Vercel will automatically deploy the updates

## Current Configuration

The questionnaire sends the following data:
- Contact information (name, email, company)
- All 12 questionnaire responses
- Formatted as readable email content
- Individual fields for easy processing

## Email Format

You'll receive emails with:
- Subject: "🔐 Discovery Questionnaire - [Name] ([Company])"
- Complete questionnaire responses
- Contact details for follow-up

## Testing

After setup, test the form by:
1. Filling out the questionnaire
2. Submitting it
3. Checking your email for the response

## Backup Method

If Formspree fails, the code includes error handling that displays a message to contact you directly at `pragmatechcompliancepartners@gmail.com`.

## Cost

Formspree free plan includes:
- 50 submissions per month
- Basic spam protection
- Email notifications

For higher volume, upgrade to a paid plan.

---

**Current Status**: ✅ Email functionality is implemented and ready to use once you configure your Formspree endpoint. 