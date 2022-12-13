import { createHash, createHmac } from "crypto"
import { net } from "electron"
import {config} from "dotenv"
config()

export const KRAKEN_ENDPOINT = "https://api.kraken.com"

export async function krakenRequest_POST(endpoint: string) {

  const nonce = Date.now() * 1000


  return new Promise((resolve, reject) => {
    const body = {nonce: nonce.toString()}
    const urlEncode = (new URLSearchParams(body)).toString()
    const url = `${KRAKEN_ENDPOINT}${endpoint}`
    const req = net.request({
      url: url,
      method: "POST",
    })
    const signature = krakenSignRequest(endpoint, urlEncode, 	nonce)
    // @ts-ignore
    req.setHeader("API-Key", process.env.KRAKEN_API_KEY)
    req.setHeader("API-Sign", signature)
    req.setHeader("Content-Type", "application/x-www-form-urlencoded")


    req.on("response", (response) => {
      console.log(`STATUS: ${response.statusCode}`)
      let body = ""
      response.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`)
        body += chunk
      })
      response.on("end", () => {
        console.log("No more data in response.")
        resolve(JSON.parse(body))
      })

      response.on("error", (err: any) => {
        console.error(err)
        reject(err)
      })
    })
    req.write(urlEncode)
    req.end()
  })

}


export function getBalance() {
  return krakenRequest_POST('/0/private/Balance').then((res) => res)
}

function krakenSignRequest(path: string, urlEncodedBody: any, nonce: number) {
  //@ts-ignore
  const secretBuffer = Buffer.from(process.env.KRAKEN_SECRET, "base64")
  const hash = createHash("sha256")
  const hmac = createHmac("sha512", secretBuffer)
  const hashDigest = hash.update(nonce + urlEncodedBody).digest("binary")
  const hmacDigest = hmac.update(path + hashDigest, "binary").digest("base64")
  return hmacDigest
}
