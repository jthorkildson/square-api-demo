'use client'
import { Ach, CreditCard, GooglePay, PaymentForm, GiftCard, CashAppPay, AfterpayProvider, 
	AfterpayButton, AfterpayMessage, AfterpayWidget} from 'react-square-web-payments-sdk'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaymentForm 
        applicationId='sandbox-sq0idb-h1Se8ZaTZ-HEi74bDxw1_g'
        locationId='L8BGDGQZ1XN0N'
        cardTokenizeResponseReceived={ (token, verifiedBuyer) => {
          	alert(JSON.stringify(token, null, 2));
        }}
		createPaymentRequest={() => ({
			countryCode: "US",
			currencyCode: "USD",
			total: {
			  amount: "100.00",
			  label: "Total",
			},
		  })}
      >
        <CreditCard />
		<p><br></br></p>
        <Ach accountHolderName="John Doe"/>
		<p><br></br></p>
		<GooglePay />
		<p><br></br></p>
		<CashAppPay shape="semiround"/>
		<p><br></br></p>
		<GiftCard />
		<p><br></br></p>
		<AfterpayProvider>
        	<AfterpayButton />
        	<AfterpayMessage />
        	<AfterpayWidget />
      	</AfterpayProvider>
      </PaymentForm>
    </main>
  )
}