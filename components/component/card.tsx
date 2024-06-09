/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/NY7sYQ6EuKV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Card() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 text-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">DESCRIPTION OF TECHNOLOGY</h2>
          <p className="">
          DEEP6 AI tool primarily focus on the recruitment of eligible patients for clinical trials using electronic healthcare records (EHR). This will make everything faster. The selection is done by analysing various categories such as demographics, medical conditions and history. It is very helpful for the researchers and patients to have accurate and effective treatment.
          </p>
         
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">GCP, HEALTH CANADA COMPLIANCE:</h2>
          <p className="">
          Deep6 ai complies with GCP and Health Canada Regulations by;
Patient recruitment; accelerate the rate of matching participants to the clinical trials by means of ethical recruitment practices.
Data collection; personal data of patients are highly secured by HIPPA compliant system for data privacy and access for the personal information is controlled.
Reporting; this tool ensures transparency and regulatory compliance by integrating real time data and dashboard to provide information about the study progress and status.

          </p>
          
        </div>
      </div>
    </div>
  )
}
