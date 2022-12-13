import { getDOToken } from "main/screens/DigitalOcean"
import { net } from "electron"

export const DO_ENDPOINT = "https://api.digitalocean.com/v2"

export function makeDigitalOceanRequest_GET(endpoint: string): Promise<any> {
  if (!getDOToken()) throw new Error("No DigitalOcean token found")
  return new Promise((resolve, reject) => {
    const url = `${DO_ENDPOINT}/${endpoint}`
    const req = net.request({
      url,
      method: "GET",
    })
    req.setHeader("Content-Type", "application/json")
    req.setHeader("Authorization", `Bearer ${getDOToken()}`)
    req.on("response", (response) => {
      console.log(`STATUS: ${response.statusCode}`)
      console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
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

    req.end()
  })
}

export function getDigitalOceanAccount() {
  return makeDigitalOceanRequest_GET("account").then((res) => res)
}

