import { Client } from 'square';
import { randomUUID } from 'crypto';
BigInt.prototype.toJSON = function() { return this.toString(); }

const { paymentsAPI } = new Client({
	accessToken: "EAAAEOR9TMam5G8hDwjxSCZGBkmaFIDEl4laB2Xyvk_xhNutYeC4Vf2gRUxT_9RM",
	environment: 'sandbox',
})

export default async function handler(req, res) {
	if (req.method == 'POST') {
		const { result } = await paymentsAPI.createPayment({
			idempotencyKey: randomUUID(),
			sourceId: req.body.sourceId,
			amountMoney: {
				currency: 'USD',
				amount: '100'
			}
		})
		console.log(result);
		res.status(200).json(result);
	}
	else {
		res.status(500).send();
	}
}